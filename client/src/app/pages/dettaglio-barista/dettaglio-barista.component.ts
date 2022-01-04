import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Location } from '@angular/common';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dettaglio-barista',
  templateUrl: './dettaglio-barista.component.html',
  styleUrls: ['./dettaglio-barista.component.css']
})
export class DettaglioBaristaComponent implements OnInit {

  public numTavolo: any;
  public products: any = [];
  public listaFiltered: any = [];
  utente: any;

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
    if (this.products.statoConsumazione == null) {
      var listaFiltrata = this.products.filter((item: any) => item.menu.tipologiaConsumazione.idTipologiaConsumazione == id);
    }
    else {
      var listaFiltrata = this.products.filter((item: any) => item.menu.tipologiaConsumazione.idTipologiaConsumazione == id
        && item.statoConsumazione.idStatoOrdine != 2);
    }

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

  consegnaBevande() {
    let consumazione = this.products;
    let idTavolo = this.numTavolo;
    this.service.updateStatusConsumazioneBar(idTavolo, consumazione).subscribe((res: any) => {
      this.openDialog();
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { utente: this.utente, showModal: true }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      this.back();
    });
  }
}
