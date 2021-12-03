package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity // This tells Hibernate to make a table out of this class
public class TipologiaStatoOrdine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idStatoOrdine;

    private String descrizione;

    public Integer getIdStatoOrdine() {
        return idStatoOrdine;
    }

    public void setIdStatoOrdine(Integer idStatoOrdine) {
        this.idStatoOrdine = idStatoOrdine;
    }

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
}
