import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GeneralService } from 'src/app/services/general.service';


export class Consumazione {
  tipologia: string;
  prezzo: number;
  quantita: number;
  constructor(tipologia: string, prezzo: number, quantita: number) {
    this.tipologia = tipologia
    this.prezzo = prezzo
    this.quantita = quantita
  }
}

@Component({
  selector: 'app-dettaglio-cameriere',
  templateUrl: './dettaglio-cameriere.component.html',
  styleUrls: ['./dettaglio-cameriere.component.css']
})
export class DettaglioCameriereComponent implements OnInit {

  consumazioni: any[] = []
  consumazioniOrdinate: any[] = []
  data: any;
  utente: any

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private service: GeneralService) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
    this.utente = this.location.getState();
    this.service.getConsumazioni().subscribe((res: any) => {
      this.consumazioni = res
    })
  }

  logout() {
    this.router.navigate(['/'])
  }

  addProduct(consumazione: any) {
    if (this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0]) {
      this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0].quantita += 1
      this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0].prezzo = consumazione.prezzo * this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0].quantita
    } else {
      let consumazioneToAdd = new Consumazione(consumazione.tipologia, consumazione.prezzo, 0)
      consumazioneToAdd.quantita += 1
      consumazioneToAdd.prezzo = consumazione.prezzo * consumazioneToAdd.quantita
      this.consumazioniOrdinate.push(consumazioneToAdd)
    }
  }

  removeProduct(consumazione: any, index: number) {
    if (this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0]) {
      this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0].quantita -= 1
      this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0].prezzo = consumazione.prezzo * this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0].quantita
    }
    if (this.consumazioniOrdinate.filter(elemento => elemento.tipologia == consumazione.tipologia)[0].quantita == 0) {
      this.consumazioniOrdinate.splice(index, 1)
    }
  }

}
