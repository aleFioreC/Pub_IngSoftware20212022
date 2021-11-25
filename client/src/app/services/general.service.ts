import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class GeneralService {

    constructor(private httpClient: HttpClient) { }

    getProducts() {
        return this.httpClient.get('/api/products');
    }

}