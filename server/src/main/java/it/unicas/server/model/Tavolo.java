package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity // This tells Hibernate to make a table out of this class
public class Tavolo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idTavolo;

	private int numero;
	
	@ManyToOne
	private TipologiaTavolo tipologiaTavolo;

	private int occupato;

	public Integer getIdTavolo() {
		return idTavolo;
	}

	public void setIdTavolo(Integer idTavolo) {
		this.idTavolo = idTavolo;
	}

	public TipologiaTavolo getTipologiaTavolo() {
		return tipologiaTavolo;
	}

	public void setTipologiaTavolo(TipologiaTavolo tipologiaTavolo) {
		this.tipologiaTavolo = tipologiaTavolo;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

}