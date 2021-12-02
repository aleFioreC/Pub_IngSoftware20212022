
package it.unicas.server.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import it.unicas.server.dao.ConsumazioneDAO;
import it.unicas.server.dao.OrdineDAO;
import it.unicas.server.dao.TavoloDAO;
import it.unicas.server.dao.TipologiaConsumazioneDAO;
import it.unicas.server.model.Consumazione;
import it.unicas.server.model.Ordine;
import it.unicas.server.model.Tavolo;
import it.unicas.server.model.TipologiaConsumazione;

@Controller
public class ConsumazioneController {

	@Autowired
	private ConsumazioneDAO consumazioneDAO;

	@Autowired
	private TavoloDAO tavoloDAO;

	@Autowired
	private OrdineDAO ordineDAO;

	@Autowired
	private TipologiaConsumazioneDAO tipologiaConsumazioneDAO;
	
	@GetMapping(path = "/allTipologieConsumazioni")
	public @ResponseBody Iterable<TipologiaConsumazione> getAllConsumazioni() {
		return tipologiaConsumazioneDAO.findAll();
	}

	/* BARISTA E CUOCO */
	@GetMapping(path = "/getConsumazioniByIdTavolo/{idTavolo}")
	public @ResponseBody Iterable<Consumazione> getConsumazioni(@PathVariable int idTavolo) {
		Ordine ordine = null;
		List<Consumazione> consumazioni = new ArrayList<Consumazione>();
		Optional<Tavolo> tavolo = this.tavoloDAO.findById(idTavolo);
		if (tavolo.isPresent()) {
			ordine = this.ordineDAO.findByTavolo(tavolo.get());
		}
		if (ordine != null) {
			 consumazioni = this.consumazioneDAO.findByOrdine(ordine);
		}
		return consumazioni;
	}

}