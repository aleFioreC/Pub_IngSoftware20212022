package it.unicas.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity // This tells Hibernate to make a table out of this class
public class Utente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idUtente;

	private String nome;

	private String cognome;

	private String username;

	private String password;

	@ManyToOne
	private TipologiaRuolo tipologiaRuolo;

	public Integer getIdUtente() {
		return idUtente;
	}

	public void setIdUtente(Integer idUtente) {
		this.idUtente = idUtente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public TipologiaRuolo getTipologiaRuolo() {
		return tipologiaRuolo;
	}

	public void setTipologiaRuolo(TipologiaRuolo tipologiaRuolo) {
		this.tipologiaRuolo = tipologiaRuolo;
	}

}