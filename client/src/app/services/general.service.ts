import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class GeneralService {

    constructor(private httpClient: HttpClient) { }

    getProducts() {
        return this.httpClient.get('/api/all');
    }

    addProduct(body: any) {
        return this.httpClient.post('/api/add', body);
    }

}