import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';
import { map, timer } from 'rxjs';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  utente: any;
  tavoli: any[] = []
  numeroTavolo: any;
  timerSubscription: any;
  nuovaConsegnaCameriere: number = 0;
  nuovaConsegnaCuoco: number = 0;
  listaNuoveConsegneCuoco: any = [];
  nuovaConsegnaBarista: number = 0;
  listaNuoveConsegneBarista: any = [];



  constructor(public dialog: MatDialog, private location: Location, private service: GeneralService, private router: Router) {

  }

  ngOnInit(): void {
    this.utente = this.location.getState();
    this.service.getTavoli().subscribe((res: any) => {
      this.tavoli = res
    })

    this.timerSubscription = timer(0, 10000).pipe(
      map(() => {
        this.loadData();
      })
    ).subscribe();


  }

  loadData() {
    if (this.utente.nome == "cameriere") {
      this.service.getNuovaConsegna().subscribe((res: any) => {
        let consegna = res;
        if (consegna > this.nuovaConsegnaCameriere) {
          this.nuovaConsegnaCameriere = consegna;
          this.openDialog();
        }
      })
    }
    else if (this.utente.nome == "cuoco") {
      this.service.getNuovaConsegnaCuoco().subscribe((res: any) => {
        if (res != null) {
          let consegna = res.length;
          this.listaNuoveConsegneCuoco = res;
          if (consegna > this.nuovaConsegnaCuoco) {
            this.nuovaConsegnaCuoco = consegna;
            this.openDialog();
          }
        }

      })
    }
    else if (this.utente.nome == "barista") {
      this.service.getNuovaConsegnaBarista().subscribe((res: any) => {
        if (res != null) {
          let consegna = res.length;
          this.listaNuoveConsegneBarista = res;
          if (consegna > this.nuovaConsegnaBarista) {
            this.nuovaConsegnaBarista = consegna;
            this.openDialog();
          }
        }
      })
    }
  }

  getDisponibilita(tavolo: number) {
    return tavolo == 0 ? 'Libero' : 'Occupato'
  }

  logout() {
    this.router.navigate(['/'])
  }

  showDetails(user: string, numTavolo: number) {
    this.numeroTavolo = numTavolo;
    if (user === "cameriere") {
      this.router.navigate(['/dettaglioCameriere/' + this.numeroTavolo], { state: this.utente });
    }
    else if (user === "cuoco") {
      this.router.navigate(['/dettaglioCuoco/' + this.numeroTavolo], { state: this.utente });
    }
    else if (user === "admin") {
      this.router.navigate(['/dettaglioAdmin/' + this.numeroTavolo], { state: this.utente });
    }
    else if (user === "barista") {
      this.router.navigate(['/dettaglioBarista/' + this.numeroTavolo], { state: this.utente });
    }
    else {
      this.router.navigate(['/']);
    }
  }

  openDialog(): void {
    if (this.utente.nome == "cameriere") {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '600px',
        data: {
          utente: this.utente,
          nuovaConsegna: this.nuovaConsegnaCameriere
        }
      });
      dialogRef.afterClosed().subscribe((res: any) => {
      });
    }
    else if (this.utente.nome == "cuoco") {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '600px',
        data: {
          nuoveConsegneCuoco: this.listaNuoveConsegneCuoco,
          utente: this.utente,
          nuovaConsegna: this.nuovaConsegnaCuoco,
          isNuovaConsegnaCuoco: true
        }
      });
      dialogRef.afterClosed().subscribe((res: any) => {
      });
    }
    else if (this.utente.nome == "barista") {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '600px',
        data: {
          nuoveConsegneBarista: this.listaNuoveConsegneBarista,
          utente: this.utente,
          nuovaConsegna: this.nuovaConsegnaBarista,
          isNuovaConsegnaBarista: true
        }
      });
      dialogRef.afterClosed().subscribe((res: any) => {
      });
    }

  }

  ListaOrdinazioni() {
    this.router.navigate(['/listaOrdinazioni'], { state: this.utente });
  }

}
