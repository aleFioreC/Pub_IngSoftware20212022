package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class TipologiaTavolo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idTipologiaTavolo;

	private String tipologia;

	public Integer getIdTipologiaTavolo() {
		return idTipologiaTavolo;
	}

	public void setIdTipologiaTavolo(Integer idTipologiaTavolo) {
		this.idTipologiaTavolo = idTipologiaTavolo;
	}

	public String getTipologia() {
		return tipologia;
	}

	public void setTipologia(String tipologia) {
		this.tipologia = tipologia;
	}

}