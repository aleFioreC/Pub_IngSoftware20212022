package it.unicas.server.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import it.unicas.server.model.Utente;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UtenteDAO extends CrudRepository<Utente, Integer> {

	Utente findUtenteByUsernameAndPassword(String username, String password);

}