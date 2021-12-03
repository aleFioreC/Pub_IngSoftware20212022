import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Location } from '@angular/common';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dettaglio-admin',
  templateUrl: './dettaglio-admin.component.html',
  styleUrls: ['./dettaglio-admin.component.css']
})


export class DettaglioAdminComponent implements OnInit {

  public numTavolo: any;
  public products: any = [];
  utente: any;
  tavolo: any;
  color: any;
  totale: any;

  constructor(public dialog: MatDialog, private location: Location, private route: ActivatedRoute, private router: Router, private service: GeneralService) {
  }

  ngOnInit(): void {
    this.numTavolo = this.route.snapshot.paramMap.get('id');
    this.utente = this.location.getState();
    this.service.getConsumazioniByTavolo(this.numTavolo).subscribe((res: any) => {
      this.products = res
    })
  }

  logout() {
    this.router.navigate(['/'])
  }

  back() {
    this.router.navigate(['/private'], { state: this.utente })
  }

  getItems(id: number) {
    return this.products.filter((item: any) => item.menu.tipologiaConsumazione.idTipologiaConsumazione == id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      data: {
        tavolo: this.numTavolo,
        utente: this.utente,
        totale: this.getTotale(),
        color: false
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      this.openDialogConfirm()
    });
  }

  getTotale() {
    let contoTotale = 0;

    this.products.forEach((element: { menu: { prezzo: number; }; }) => {
      contoTotale = contoTotale + element.menu.prezzo;
    });

    return contoTotale;
  }

  openDialogConfirm(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: { utente: this.utente, color: true, tavolo: this.numTavolo }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      this.color = res;
    });
  }


}
