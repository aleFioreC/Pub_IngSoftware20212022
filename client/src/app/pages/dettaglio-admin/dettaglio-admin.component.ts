import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dettaglio-admin',
  templateUrl: './dettaglio-admin.component.html',
  styleUrls: ['./dettaglio-admin.component.css']
})
export class DettaglioAdminComponent implements OnInit {

  public numTavolo: any;
  public products: any = [];
  utente: any;

  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private service: GeneralService) {
  }

  ngOnInit(): void {
    this.numTavolo = this.route.snapshot.paramMap.get('id');
    this.utente = this.location.getState();
    this.service.getMenu().subscribe((res: any) => {
      this.products = res
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



}
