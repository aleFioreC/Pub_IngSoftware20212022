package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class TipologiaPagamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTipologiaPagamento;

    private String Descrizione;

    public Integer getIdTipologiaPagamento() {
        return idTipologiaPagamento;
    }

    public void setIdTipologiaPagamento(Integer idTipologiaPagamento) {
        this.idTipologiaPagamento = idTipologiaPagamento;
    }

    public String getDescrizione() {
        return Descrizione;
    }

    public void setDescrizione(String descrizione) {
        Descrizione = descrizione;
    }
}
