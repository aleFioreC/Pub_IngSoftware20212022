package it.unicas.server.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import it.unicas.server.model.Ordine;
import it.unicas.server.model.Tavolo;
import org.springframework.data.repository.query.Param;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface OrdineDAO extends CrudRepository<Ordine, Integer> {

	@Query("FROM Ordine o WHERE o.tavolo = ?1 AND o.statoOrdine = 'Eseguito'" )
	Ordine findByTavolo(Tavolo tavolo);

	@Query("SELECT COUNT(o.idOrdine) from Ordine o where o.tavolo.numero = ?1  AND o.statoOrdine <> 'Pagato'")
	int checkOrder(int numeroTavolo);

	@Query("SELECT o.idOrdine from Ordine o where o.tavolo.numero = ?1  AND o.statoOrdine <> 'Pagato'")
	int getIdOrdine(int numeroTavolo);
	
}