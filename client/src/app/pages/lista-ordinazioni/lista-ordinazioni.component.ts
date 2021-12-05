import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Location } from '@angular/common';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-lista-ordinazioni',
  templateUrl: './lista-ordinazioni.component.html',
  styleUrls: ['./lista-ordinazioni.component.css']
})
export class ListaOrdinazioniComponent implements OnInit {

  public products: any = [];
  utente: any;




  constructor(public dialog: MatDialog, private location: Location, private route: ActivatedRoute, private router: Router, private service: GeneralService) { }


  ngOnInit(): void {
    this.utente =  this.utente = this.location.getState();
    this.fetchOrders(); 
  }

  logout() {
    this.router.navigate(['/'])
  }

  back() {
    this.router.navigate(['/private'], { state: this.utente })
  }

  fetchOrders()
  {
    this.service.getConsumazioniPronte().subscribe((res: any) => {
      this.products = res
    })
  }

  updateStatusOrder(idConsumazione : any)
  {
    this.service.updateStatusOrder(idConsumazione,this.products).subscribe((res: any) => {
    });
    this.ngOnInit();
  }


}
