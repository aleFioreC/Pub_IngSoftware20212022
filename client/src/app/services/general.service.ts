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

    login(body: any) {
        return this.httpClient.post('/api/login', body);
    }

    getTavoli() {
        return this.httpClient.get('/api/allTavoli');
    }

    getTavolo(id: string) {
        return this.httpClient.get('/api/getTavolo/' + id);
    }

    getConsumazioni() {
        return this.httpClient.get('api/allTipologieConsumazioni')
    }
}