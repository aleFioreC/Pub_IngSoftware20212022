import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Injectable({ providedIn: 'root' })
export class CameriereResolver implements Resolve<any>{

    constructor(private service: GeneralService) { }

    resolve(
        route: ActivatedRouteSnapshot,
    ) {
        return this.service.getTavolo(route.paramMap.get('id') || "");
    }
}