package it.unicas.server.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import it.unicas.server.model.Consumazione;
import it.unicas.server.model.Ordine;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ConsumazioneDAO extends CrudRepository<Consumazione, Integer> {

	@Query("FROM Consumazione o WHERE o.ordine = ?1")
	List<Consumazione> findByOrdine(Ordine ordine);
	
}