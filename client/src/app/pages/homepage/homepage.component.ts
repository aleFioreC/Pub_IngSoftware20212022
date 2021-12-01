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
  numeroTavolo: any;

  constructor(private location: Location, private service: GeneralService, private router: Router) {
  }

  ngOnInit(): void {
    this.utente = this.location.getState();
    this.service.getTavoli().subscribe((res: any) => {
      this.tavoli = res
    })
  }

  esci() {
    this.router.navigate(['/'])
  }

  showDetails(user: string, numTavolo : number){
    this.numeroTavolo = numTavolo;
    if (user === "cameriere") 
    {
      this.router.navigate(['/table',{tableNumber: this.numeroTavolo}]);
    }
    else
    {
      this.router.navigate(['/']);
    }
  }

}
