package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class TipologiaConsumazione {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idTipologiaConsumazione;

	private String tipologia;

	private int prezzo;
	
	public Integer getIdTipologiaConsumazione() {
		return idTipologiaConsumazione;
	}

	public void setIdTipologiaConsumazione(Integer idTipologiaConsumazione) {
		this.idTipologiaConsumazione = idTipologiaConsumazione;
	}

	public String getTipologia() {
		return tipologia;
	}

	public void setTipologia(String tipologia) {
		this.tipologia = tipologia;
	}

	public int getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(int prezzo) {
		this.prezzo = prezzo;
	}
	

}