import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
  public listaFiltered: any = [];
  utente: any;
  tavolo: any;
  color: any;
  totale: any;

  constructor(public dialog: MatDialog, private location: Location, private route: ActivatedRoute, private router: Router, private service: GeneralService) {
  }

  ngOnInit(): void {
    this.numTavolo = this.route.snapshot.paramMap.get('id');
    this.utente = this.location.getState();
    this.service.getConsumazioniByTavoloAdmin(this.numTavolo).subscribe((res: any) => {
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
    var listaFiltrata = this.products.filter((item: any) => item.menu.tipologiaConsumazione.idTipologiaConsumazione == id);

    this.listaFiltered = listaFiltrata;
    var result = listaFiltrata.reduce((unique: any, o: any) => {
      if (!unique.some(((obj: any) => obj.menu.idmenu === o.menu.idmenu && obj.menu.descrizione === o.menu.descrizione))) {
        unique.push(o);
      }
      return unique;
    }, []);
    return result
  }


  getOccurrence(value: any) {
    var list = this.products
    var count = list.filter((item: any) => item.menu.idMenu == value).length
    return count;
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
      if (res) {
        this.openDialogConfirm()
      }
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
      this.back();
    });
  }




}
