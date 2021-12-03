
package it.unicas.server.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import it.unicas.server.dao.ConsumazioneDAO;
import it.unicas.server.dao.OrdineDAO;
import it.unicas.server.dao.TavoloDAO;
import it.unicas.server.dao.TipologiaStatoOrdineDAO;
import it.unicas.server.model.Consumazione;
import it.unicas.server.model.Ordine;
import it.unicas.server.model.Tavolo;
import it.unicas.server.model.TipologiaStatoOrdine;

@Controller
public class OrdineController {

	@Autowired
	private OrdineDAO ordineDAO;

	@Autowired
	private TavoloDAO tavoloDAO;

	@Autowired
	private ConsumazioneDAO consumazioneDAO;
	
	@Autowired
	private TipologiaStatoOrdineDAO tipologiaOrdineDAO;

	@PostMapping(path = "/inserisciOrdine")
	public @ResponseBody boolean saveOrdine(@RequestBody Ordine ordine) {
		
		// aggiorno il tavolo a occupato quando inserisco l'ordine
		Optional<Tavolo> tavolo = tavoloDAO.findById(ordine.getTavolo().getIdTavolo());

		if (tavolo.isPresent()) {
			Tavolo tavoloSave = tavolo.get();
			tavoloSave.setOccupato(1);
			tavoloDAO.save(tavoloSave);
		}
		// check se è già presente un ordine con uno stato diverso da 'Pagato' per quel
		// determinato tavolo,
		// se presente si recupera idOrdine e si fa insert in consumazioni con lo stesso
		// idOrdine, altrimenti si fa insert in ordine e consumazioni
		if (ordineDAO.checkOrder(ordine.getTavolo().getNumero()) > 0) {
			Integer idOrdine = ordineDAO.getIdOrdine(ordine.getTavolo().getNumero());
			for (Consumazione consumazione : ordine.getConsumazioni()) {
				consumazione.setOrdine(ordine);
				ordine.setIdOrdine(idOrdine);
				consumazioneDAO.save(consumazione);
			}
		} else {
			Ordine ordineSave = ordineDAO.save(ordine);
			for (Consumazione consumazione : ordine.getConsumazioni()) {
				consumazione.setOrdine(ordineSave);
				consumazioneDAO.save(consumazione);
			}
		}

		return true;
	}

	/* ADMIN */
	@GetMapping(path = "/getOrdineByTavolo/{idTavolo}")
	public @ResponseBody Ordine getOrdine(@PathVariable int idTavolo) {
		Ordine ordine = null;
		Optional<Tavolo> tavolo = this.tavoloDAO.findById(idTavolo);
		if (tavolo.isPresent()) {
			ordine = this.ordineDAO.findByTavolo(tavolo.get());
		}
		return ordine;
	}
	
	@GetMapping(path = "/allTipologieStatoOrdine")
	public @ResponseBody Iterable<TipologiaStatoOrdine> getAllTipologieStatoOrdine() {
		return tipologiaOrdineDAO.findAll();
	}

}