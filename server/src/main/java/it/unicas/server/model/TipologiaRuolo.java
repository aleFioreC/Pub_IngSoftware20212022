package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class TipologiaRuolo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idRuolo;

	private String tipologia;

	public Integer getIdRuolo() {
		return idRuolo;
	}

	public void setIdRuolo(Integer idRuolo) {
		this.idRuolo = idRuolo;
	}

	public String getTipologia() {
		return tipologia;
	}

	public void setTipologia(String tipologia) {
		this.tipologia = tipologia;
	}

}