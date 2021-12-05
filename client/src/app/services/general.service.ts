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

    getConsumazioniByTavolo(idTavolo: string) {
        return this.httpClient.get('/api/getConsumazioniByIdTavolo/' + idTavolo);
    }

    getConsumazioniByTavoloAdmin(idTavolo: string) {
        return this.httpClient.get('/api/getConsumazioniByIdTavoloAdmin/' + idTavolo);
    }

    getConsumazioni() {
        return this.httpClient.get('api/allTipologieConsumazioni')
    }

    getTipologieStatoOrdine() {
        return this.httpClient.get('api/allTipologieStatoOrdine')
    }

    getMenu() {
        return this.httpClient.get('/api/menuItems');
    }

    getOrdine(idTavolo: number) {
        return this.httpClient.get('/api/getOrdineByTavolo/' + idTavolo);
    }

    

    getNuovaConsegna() {
        return this.httpClient.get('/api/getNuovaConsegna');
    }

    getNuovaConsegnaCuoco() {
        return this.httpClient.get('/api/getNuovaConsegnaCuoco');
    }

    getNuovaConsegnaBarista() {
        return this.httpClient.get('/api/getNuovaConsegnaBarista');
    }

    inserisciOrdine(body: any) {
        return this.httpClient.post('/api/inserisciOrdine', body);
    }

    inviaPagamento(body: any, idTipologiaPagamento: string) {
        return this.httpClient.post('/api/inviaPagamento/' + idTipologiaPagamento, body);
    }

    consegnaProdotto(body: any) {
        return this.httpClient.post('/api/consegnaProdotto', body);
    }

    updateStatusConsumazioneCucina(idTavolo: any, body: any ) {
        return this.httpClient.post('/api/updateStatusConsumazioneCucina/' + idTavolo, body);
    }

    updateStatusConsumazioneBar(idTavolo: any, body: any ) {
        return this.httpClient.post('/api/updateStatusConsumazioneBar/' + idTavolo, body);
    }

    updateStatusOrder(idConsumazione: any, body:any) {
        return this.httpClient.post('/api/updateStatusOrder/' + idConsumazione,body);
    }

    getConsumazioniPronte() {
        return this.httpClient.get('/api/getConsumazioniPronte');
    }
}