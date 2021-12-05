package it.unicas.server.model;

public class ConsumazioniPronte {

    private Ordine ordine;
    private Tavolo tavolo;
    private TipologiaStatoOrdine statoOrdine;
    private Menu menu;

    public int getIdConsumazione() {
        return idConsumazione;
    }

    public void setIdConsumazione(int idConsumazione) {
        this.idConsumazione = idConsumazione;
    }

    private int idConsumazione;

    public ConsumazioniPronte() {

    }

    public ConsumazioniPronte(Menu setMenu, TipologiaStatoOrdine setStatoOrdine, Ordine setOrdine, Tavolo setTavolo, int idConsumazione) {

    }

    public Ordine getOrdine() {
        return ordine;
    }

    public void setOrdine(Ordine ordine) {
        this.ordine = ordine;
    }

    public Tavolo getTavolo() {
        return tavolo;
    }

    public void setTavolo(Tavolo tavolo) {
        this.tavolo = tavolo;
    }

    public TipologiaStatoOrdine getStatoOrdine() {
        return statoOrdine;
    }

    public void setStatoOrdine(TipologiaStatoOrdine statoOrdine) {
        this.statoOrdine = statoOrdine;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }
}
