package it.unicas.server.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import it.unicas.server.model.Ordine;
import it.unicas.server.model.Tavolo;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface OrdineDAO extends CrudRepository<Ordine, Integer> {

	@Query("FROM Ordine o WHERE o.tavolo = ?1 AND o.statoOrdine = 'Inviato'")
	Ordine findByTavolo(Tavolo tavolo);
	
}