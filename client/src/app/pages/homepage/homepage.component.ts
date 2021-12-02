import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  utente: any;
  tavoli: any[] = []
  cuoco: boolean = false
  admin: boolean = false
  cameriere: boolean = false
  barista: boolean = false

  constructor(private location: Location, private service: GeneralService, private router: Router) {
  }

  ngOnInit(): void {
    this.utente = this.location.getState();
    this.getRuoloUtente()
    this.service.getTavoli().subscribe((res: any) => {
      this.tavoli = res
    })
  }

  logout() {
    this.router.navigate(['/'])
  }

  getRuoloUtente() {
    switch (this.utente.tipologiaRuolo.tipologia) {
      case 'Admin': {
        this.admin = true;
        break;
      }
      case 'Cuoco': {
        this.cuoco = true;
        break;
      }
      case 'Cameriere': {
        this.cameriere = true;
        break;
      }
      case 'Barista': {
        this.barista = true;
        break;
      }
    }
  }

  dettaglio(tavolo: any) {
    this.router.navigate(['/dettaglioCameriere/' + tavolo.idTavolo], { state: this.utente })
  }
}
