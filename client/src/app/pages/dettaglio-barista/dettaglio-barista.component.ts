import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dettaglio-barista',
  templateUrl: './dettaglio-barista.component.html',
  styleUrls: ['./dettaglio-barista.component.css']
})
export class DettaglioBaristaComponent implements OnInit {

  public numTavolo: any;
  public products: any = [];
  utente: any;

  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private service: GeneralService) {
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

  consegnaBevande() {
    console.log(this.products[0].ordine)
  }
}
