import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-dettaglio-cuoco',
  templateUrl: './dettaglio-cuoco.component.html',
  styleUrls: ['./dettaglio-cuoco.component.css']
})
export class DettaglioCuocoComponent implements OnInit {

  public numTavolo: any;
  public products: any = [];
  utente: any;

  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private service: GeneralService) {
  }

  ngOnInit(): void {
    this.numTavolo = this.route.snapshot.paramMap.get('id');
    this.utente = this.location.getState();
    this.service.getConsumazioniByTavolo(this.numTavolo).subscribe((res: any) => {
      console.log(res)
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
    return this.products.filter((item: any) => item.menu.tipologiaConsumazione.idTipologiaConsumazione == id);
  }


}
