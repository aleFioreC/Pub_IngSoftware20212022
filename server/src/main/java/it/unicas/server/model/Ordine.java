package it.unicas.server.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity // This tells Hibernate to make a table out of this class
public class Ordine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idOrdine;

	@ManyToOne
	private TipologiaStatoOrdine statoOrdine;

	@ManyToOne
	private Tavolo tavolo;

	private float totalePagamento;

	@ManyToOne
	private TipologiaPagamento tipologiaPagamento;

	@OneToMany(mappedBy = "ordine")
	private List<Consumazione> consumazioni;

	public Integer getIdOrdine() {
		return idOrdine;
	}

	public void setIdOrdine(Integer idOrdine) {
		this.idOrdine = idOrdine;
    }

	public TipologiaStatoOrdine getStatoOrdine() {
		return statoOrdine;
	}

	public void setStatoOrdine(TipologiaStatoOrdine statoOrdine) {
		this.statoOrdine = statoOrdine;
	}

	public Tavolo getTavolo() {
		return tavolo;
	}

	public void setTavolo(Tavolo tavolo) {
		this.tavolo = tavolo;
	}

	public List<Consumazione> getConsumazioni() {
		return consumazioni;
	}

	public void setConsumazioni(List<Consumazione> consumazioni) {
		this.consumazioni = consumazioni;
	}

	public float getTotalePagamento() {
		return totalePagamento;
	}

	public void setTotalePagamento(float totalePagamento) {
		this.totalePagamento = totalePagamento;
	}

	public TipologiaPagamento getTipologiaPagamento() {
		return tipologiaPagamento;
	}

	public void setTipologiaPagamento(TipologiaPagamento tipologiaPagamento) {
		this.tipologiaPagamento = tipologiaPagamento;
	}

}