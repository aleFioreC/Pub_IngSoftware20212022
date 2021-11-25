package it.unicas.server.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Colleghi {

	@Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer idColleghi;

	private String nome;

	private String cognome;

	private String telefono;

	private String email;

	private Date compleanno;

	public Integer getIdColleghi() {
		return idColleghi;
	}

	public void setIdColleghi(Integer idColleghi) {
		this.idColleghi = idColleghi;
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

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getCompleanno() {
		return compleanno;
	}

	public void setCompleanno(Date compleanno) {
		this.compleanno = compleanno;
	}

}