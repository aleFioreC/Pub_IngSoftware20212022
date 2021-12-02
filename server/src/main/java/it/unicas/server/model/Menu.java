package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity // This tells Hibernate to make a table out of this class
public class Menu {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer idMenu;

    private String descrizione;
    
	private int prezzo;

    @ManyToOne
    private TipologiaConsumazione tipologiaConsumazione;

    public Integer getIdMenu() {
        return idMenu;
    }

    public void setIdMenu(Integer idMenu) {
        this.idMenu = idMenu;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public int getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(int prezzo) {
		this.prezzo = prezzo;
	}

	public TipologiaConsumazione getTipologiaConsumazione() {
        return tipologiaConsumazione;
    }

    public void setTipologiaConsumazione(TipologiaConsumazione tipologiaConsumazione) {
        this.tipologiaConsumazione = tipologiaConsumazione;
    }
}
