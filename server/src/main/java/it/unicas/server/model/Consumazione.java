package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity // This tells Hibernate to make a table out of this class
public class Consumazione {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idConsumazione;

	@ManyToOne
	private Menu menu;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_ordine")
	private Ordine ordine;

	@ManyToOne
	private TipologiaStatoOrdine statoConsumazione;

	public TipologiaStatoOrdine getStatoConsumazione() {
		return statoConsumazione;
	}

	public void setStatoConsumazione(TipologiaStatoOrdine statoConsumazione) {
		this.statoConsumazione = statoConsumazione;
	}

	public Integer getIdConsumazione() {
		return idConsumazione;
	}

	public void setIdConsumazione(Integer idConsumazione) {
		this.idConsumazione = idConsumazione;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public Ordine getOrdine() {
		return ordine;
	}

	public void setOrdine(Ordine ordine) {
		this.ordine = ordine;
	}

	public void setId(int id){this.ordine.setIdOrdine(id); }

}