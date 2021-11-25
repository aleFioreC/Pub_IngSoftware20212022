import { Component } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'client';

  headElements = ['idColleghi', 'nome', 'cognome', 'telefono', 'email'];

  elements: any[] = [];

  constructor(private service: GeneralService) {
  }

  ngOnInit() {
    this.service.getProducts().subscribe((res: any) => {
      console.log(res)
      this.elements = res
    })
  }

  addCollega() {
    let collega = {
      id_colleghi: 1,
      nome: 'Alessio',
      cognome: 'Fiore',
      telefono: '0000000',
      email: 'test@test.com'
    }
    this.service.addProduct(collega).subscribe((res: any) => {
      console.log(res)
      this.service.getProducts().subscribe((res: any) => {
        console.log(res)
        this.elements = res
      })
    })
  }
}
