package it.unicas.server.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import it.unicas.server.model.Consumazione;
import it.unicas.server.model.Ordine;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ConsumazioneDAO extends CrudRepository<Consumazione, Integer> {

	//OR (o.statoConsumazione is NOT NULL AND o.statoConsumazione.idStatoOrdine<> 2 )
	@Query("FROM Consumazione o WHERE o.ordine = ?1 AND ((o.statoConsumazione is NULL)) ")
	List<Consumazione> findByOrdine(Ordine ordine);

	@Query("FROM Consumazione o WHERE o.ordine = ?1 AND ((o.statoConsumazione.descrizione is 'Consegnato'))")
	List<Consumazione> findByOrdineAdmin(Ordine ordine);

	@Query("SELECT COUNT (c.idConsumazione) FROM Consumazione c WHERE c.statoConsumazione is not  null AND c.statoConsumazione.idStatoOrdine <> 2 ")
	int findAllNuoveConsegne();


	@Query("FROM Consumazione c WHERE c.statoConsumazione IS NULL AND c.menu.tipologiaConsumazione.idTipologiaConsumazione = 1")
	List<Consumazione> findAllNuoveConsegneCuoco();

	@Query("FROM Consumazione c WHERE c.statoConsumazione IS NULL AND ( (c.menu.tipologiaConsumazione.idTipologiaConsumazione = 2 ) OR (c.menu.tipologiaConsumazione.idTipologiaConsumazione = 3) )")
	List<Consumazione> findAllNuoveConsegneBarista();

	@Query("SELECT c.ordine.idOrdine FROM Consumazione c where c.idConsumazione= ?1 ")
	int findIdOrdine(int idConsumazione);

	@Query("FROM Consumazione c WHERE c.statoConsumazione IS NOT NULL AND c.statoConsumazione.idStatoOrdine <> 2 ")
	List<Consumazione> findAllOrdinazioniPronte();

	Consumazione findConsumazioneByIdConsumazione(Integer idConsumazione);
}