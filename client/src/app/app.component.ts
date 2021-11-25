import { Component } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'client';

  headElements = ['id', 'name'];

  elements: any[] = [];

  constructor(private service: GeneralService) {
  }

  ngOnInit() {
    this.service.getProducts().subscribe((res: any) => {
      console.log(res)
      this.elements = res
    })
  }
}
