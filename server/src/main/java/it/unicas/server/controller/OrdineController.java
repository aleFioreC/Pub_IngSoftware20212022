
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
import it.unicas.server.model.Consumazione;
import it.unicas.server.model.Ordine;
import it.unicas.server.model.Tavolo;

@Controller
public class OrdineController {

	@Autowired
	private OrdineDAO ordineDAO;
	
	@Autowired
	private TavoloDAO tavoloDAO;
	
	@Autowired
	private ConsumazioneDAO consumazioneDAO;

	@PostMapping(path = "/inserisciOrdine")
	public @ResponseBody boolean saveOrdine(@RequestBody Ordine ordine) {
		Ordine ordineSave = ordineDAO.save(ordine);
		for (Consumazione consumazione : ordine.getConsumazioni()) {
			consumazione.setOrdine(ordineSave);
			consumazioneDAO.save(consumazione);
		}
		return true;
	}

	/* ADMIN */
	@GetMapping(path = "/getOrdineByTavolo/{idTavolo}")
	public @ResponseBody Ordine getOrdine(@PathVariable int idTavolo) {
		Ordine  ordine = null;
		Optional<Tavolo> tavolo = this.tavoloDAO.findById(idTavolo);
		if (tavolo.isPresent()) {
			 ordine = this.ordineDAO.findByTavolo(tavolo.get());
		}
		return ordine;
	}

}