import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GeneralService } from 'src/app/services/general.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-dettaglio-cameriere',
  templateUrl: './dettaglio-cameriere.component.html',
  styleUrls: ['./dettaglio-cameriere.component.css']
})
export class DettaglioCameriereComponent implements OnInit {

  public numTavolo: any;
  public products: any = [];
  utente: any;
  tavolo: any
  name: any;
  color: any;

  constructor(public dialog: MatDialog, private location: Location, private route: ActivatedRoute, private router: Router, private service: GeneralService) {
  }

  ngOnInit(): void {
    this.numTavolo = this.route.snapshot.paramMap.get('id');
    this.service.getTavolo(this.numTavolo).subscribe((res: any) => {
      this.tavolo = res
    })
    this.utente = this.location.getState();
    this.service.getMenu().subscribe((res: any) => {
      this.products = res
      this.products.forEach((element: any) => {
        element.quantita = 0
      });
    })
  }

  logout() {
    this.router.navigate(['/'])
  }

  back() {
    this.router.navigate(['/private'])
  }

  getItems(id: number) {
    return this.products.filter((item: any) => item.tipologiaConsumazione.idTipologiaConsumazione == id);
  }

  inserisciOrdine() {
    let list: any[] = []
    this.products.forEach((element: any) => {
      while (element.quantita > 0) {
        element.quantita -= 1
        let object: any = {}
        object.idConsumazione = 0
        object.ordine = null
        object.menu = element
        list.push(object)
      }
    });
    let ordine = {
      consumazioni: list,
      statoOrdine: 'Eseguito',
      tavolo: this.tavolo
    }
    console.log(ordine)
    this.service.inserisciOrdine(ordine).subscribe((res: any) => {
      console.log(res)
      this.openDialog()
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: { utente: this.utente, color: this.color }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      this.color = res;
    });
  }

}
