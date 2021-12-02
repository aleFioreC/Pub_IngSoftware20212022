package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity // This tells Hibernate to make a table out of this class
public class Consumazione {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idConsumazione;

	@ManyToOne
	private TipologiaConsumazione tipologiaConsumazione;

	@ManyToOne
	@JoinColumn(name = "id_ordine")
	private Ordine ordine;

	public Integer getIdConsumazione() {
		return idConsumazione;
	}

	public void setIdConsumazione(Integer idConsumazione) {
		this.idConsumazione = idConsumazione;
	}

	public TipologiaConsumazione getTipologiaConsumazione() {
		return tipologiaConsumazione;
	}

	public void setTipologiaConsumazione(TipologiaConsumazione tipologiaConsumazione) {
		this.tipologiaConsumazione = tipologiaConsumazione;
	}

	public Ordine getOrdine() {
		return ordine;
	}

	public void setOrdine(Ordine ordine) {
		this.ordine = ordine;
	}

}