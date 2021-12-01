import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public numTavolo : any;
  public products : any = [];

  constructor(private route: ActivatedRoute, private service: GeneralService) {
  }

  ngOnInit(): void {
    this.numTavolo = this.route.snapshot.paramMap.get("tableNumber")
    this.service.getMenu().subscribe((res: any) => {
      this.products = res
    })
  }


  getItems(id : number) {
    return this.products.filter((item :any ) => item.tipologiaConsumazione.idTipologiaConsumazione==id);
  }

}
