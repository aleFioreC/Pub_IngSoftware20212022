import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { EventEmitter } from 'events';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  pagamento: string = '1';
  ordine: any
  nuovaConsegna: number = 0;
  nuovaConsegnaCuoco: number = 0;
  nuovaConsegnaBarista: number = 0;
  showModal: boolean = false;
  showModalCameriere: boolean = false;
  showModalBarista: boolean = false;
  showModalCuoco: boolean = false;
  color: boolean = true;
  listaNuoveConsegneCuoco: any = [];
  listaNuoveConsegneBarista: any = [];
  utente: any;
  utenteAttuale : any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>, private service: GeneralService, private location: Location, private router: Router) { }

  close(): void {
    if (this.data.error) {
      this.dialogRef.close(false);
    } else {
      this.dialogRef.close(true);
    }
  }

  ngOnInit() {
    this.utente = this.location.getState();
    if (this.utente.nome === "admin") 
    {
      this.utenteAttuale = "admin";
      if (this.data.tavolo !== undefined && this.data.tavolo !== null) 
      {
        this.service.getOrdine(this.data.tavolo).subscribe((res: any) => {
          this.ordine = res
        })
      }
      this.color = this.data.color;
    }
    else if (this.utente.nome === "cameriere") 
    {
      this.utenteAttuale = "cameriere";
      if (this.data.nuovaConsegna > this.nuovaConsegna) 
      {
        this.nuovaConsegna = this.data.nuovaConsegna;
        this.showModalCameriere = this.data.isNuovaConsegnaCameriere;
      }
      this.color = this.data.color;
    }
    else if (this.utente.nome === "cuoco") 
    {
      this.utenteAttuale = "cuoco";
      if (this.data.nuoveConsegneCuoco != null) 
      {
        if (this.data.nuovaConsegna > this.nuovaConsegnaCuoco) 
        {
          this.nuovaConsegnaCuoco = this.data.nuovaConsegna;
          this.showModalCuoco = this.data.isNuovaConsegnaCuoco;
          this.listaNuoveConsegneCuoco = this.data.nuoveConsegneCuoco.reduce((unique: any, o: any) => {
            if (!unique.some(((obj: any) => obj.tavolo.numero === o.tavolo.numero))) {
              unique.push(o);
            }
            return unique;
          }, []);
        }
      }
    }
    else if (this.utente.nome === "barista") {
      this.utenteAttuale = "barista";
      if (this.data.nuoveConsegneBarista != null) {
        if (this.data.nuovaConsegna > this.nuovaConsegnaBarista) {
          this.nuovaConsegnaBarista = this.data.nuovaConsegna;
          this.showModalBarista = this.data.isNuovaConsegnaBarista;
          this.listaNuoveConsegneBarista = this.data.nuoveConsegneBarista.reduce((unique: any, o: any) => {
            if (!unique.some(((obj: any) => obj.tavolo.numero === o.tavolo.numero))) {
              unique.push(o);
            }
            return unique;
          }, []);
        }
      }
    }
    
  }

  inviaPagamento() {
    this.service.inviaPagamento(this.ordine, this.pagamento).subscribe((res: any) => {
      this.dialogRef.close(true)
    })
  }

  showLista() {
    this.router.navigate(['/listaOrdinazioni'],{ state: this.utente });
    this.dialogRef.close();
  }

}
