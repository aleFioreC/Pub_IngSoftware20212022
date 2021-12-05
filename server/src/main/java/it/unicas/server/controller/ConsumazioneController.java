
package it.unicas.server.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import it.unicas.server.dao.*;
import it.unicas.server.model.*;
import it.unicas.server.model.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

	@Autowired
	private TipologiaStatoOrdineDAO tipologiaStatoOrdineDAO;



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

	/* ADMIN */
	@GetMapping(path = "/getConsumazioniByIdTavoloAdmin/{idTavolo}")
	public @ResponseBody Iterable<Consumazione> getConsumazioniAdmin(@PathVariable int idTavolo) {
		Ordine ordine = null;
		List<Consumazione> consumazioni = new ArrayList<Consumazione>();
		Optional<Tavolo> tavolo = this.tavoloDAO.findById(idTavolo);
		if (tavolo.isPresent()) {
			ordine = this.ordineDAO.findByTavolo(tavolo.get());
		}
		if (ordine != null) {
			consumazioni = this.consumazioneDAO.findByOrdineAdmin(ordine);
		}
		return consumazioni;
	}

	//CHECK NUOVE CONSEGNE PER CAMERIERE
	@GetMapping(path = "/getNuovaConsegna")
	public @ResponseBody int getNuovaConsegna()
	{
		int result = 0;
		result = consumazioneDAO.findAllNuoveConsegne();
		return result;
	}

	//CHECK NUOVE CONSEGNE PER CUOCO
	@GetMapping(path = "/getNuovaConsegnaCuoco")
	public @ResponseBody Iterable<ConsumazioniPronte> getNuovaConsegnaCuoco()
	{
		List<ConsumazioniPronte> consumazioni = new ArrayList<ConsumazioniPronte>();
		List<Consumazione> appo = new ArrayList<Consumazione>();

		appo = consumazioneDAO.findAllNuoveConsegneCuoco();

		for (Consumazione item: appo)
		{
			ConsumazioniPronte consumazioniPronte = new ConsumazioniPronte();
			consumazioniPronte.setMenu(item.getMenu());
			consumazioniPronte.setStatoOrdine(item.getStatoConsumazione());
			consumazioniPronte.setOrdine(item.getOrdine());
			consumazioniPronte.setTavolo(item.getOrdine().getTavolo());
			consumazioniPronte.setIdConsumazione(item.getIdConsumazione());
			consumazioni.add(consumazioniPronte);
		}
		return consumazioni;
	}

	//CHECK NUOVE CONSEGNE PER BARISTA
	@GetMapping(path = "/getNuovaConsegnaBarista")
	public @ResponseBody Iterable<ConsumazioniPronte> getNuovaConsegnaBarista()
	{
		List<ConsumazioniPronte> consumazioni = new ArrayList<ConsumazioniPronte>();
		List<Consumazione> appo = new ArrayList<Consumazione>();

		appo = consumazioneDAO.findAllNuoveConsegneBarista();

		for (Consumazione item: appo)
		{
			ConsumazioniPronte consumazioniPronte = new ConsumazioniPronte();
			consumazioniPronte.setMenu(item.getMenu());
			consumazioniPronte.setStatoOrdine(item.getStatoConsumazione());
			consumazioniPronte.setOrdine(item.getOrdine());
			consumazioniPronte.setTavolo(item.getOrdine().getTavolo());
			consumazioniPronte.setIdConsumazione(item.getIdConsumazione());
			consumazioni.add(consumazioniPronte);
		}
		return consumazioni;
	}




	//RECUPERO DI TUTTE LE CONSUMAZIONI ELABORATE DA CUCINA E BAR MA NON ANCORA CONSEGNATE AI TAVOLI
	@GetMapping(path = "/getConsumazioniPronte")
	public @ResponseBody Iterable<ConsumazioniPronte> getConsumazioniPronte() {
		List<ConsumazioniPronte> consumazioni = new ArrayList<ConsumazioniPronte>();
		List<Consumazione> appo = new ArrayList<Consumazione>();

		appo = this.consumazioneDAO.findAllOrdinazioniPronte();

		for (Consumazione item: appo)
		{
			ConsumazioniPronte consumazioniPronte = new ConsumazioniPronte();
			consumazioniPronte.setMenu(item.getMenu());
			consumazioniPronte.setStatoOrdine(item.getStatoConsumazione());
			consumazioniPronte.setOrdine(item.getOrdine());
			consumazioniPronte.setTavolo(item.getOrdine().getTavolo());
			consumazioniPronte.setIdConsumazione(item.getIdConsumazione());
			consumazioni.add(consumazioniPronte);
		}
		return consumazioni;
	}

	//CAMBIO STATO DELLE CONSUMAZIONI ELABORATE DALLA CUCINA
	@PostMapping(path = "/updateStatusConsumazioneCucina/{idTavolo}")
	public @ResponseBody boolean updateStatusConsumazioneCucina (@PathVariable("idTavolo") Integer idTavolo, @RequestBody Consumazione[] consumazione)
	{
		Ordine ordine = null;
		List<Consumazione> listaConsumazioni = Arrays.asList(consumazione);
		Optional<TipologiaStatoOrdine> tipologiaStatoOrdine = tipologiaStatoOrdineDAO.findById(4);
		Optional<Tavolo> tavolo = this.tavoloDAO.findById(idTavolo);
		ordine = this.ordineDAO.findByTavolo(tavolo.get());
		for (Consumazione element:listaConsumazioni.stream().filter(q-> q.getMenu().getTipologiaConsumazione().getIdTipologiaConsumazione()==1 ).collect(Collectors.toList())) {
			int x = consumazioneDAO.findIdOrdine(element.getIdConsumazione());
			ordine.setIdOrdine(x);
			element.setOrdine(ordine);
			element.setStatoConsumazione(tipologiaStatoOrdine.get());
			consumazioneDAO.save(element);
		}

		return true;
	}

	//CAMBIO STATO DELLE CONSUMAZIONI ELABORATE DAL BAR
	@PostMapping(path = "/updateStatusConsumazioneBar/{idTavolo}")
	public @ResponseBody boolean updateStatusConsumazioneBar (@PathVariable("idTavolo") Integer idTavolo, @RequestBody Consumazione[] consumazione)
	{
		Ordine ordine = null;
		List<Consumazione> listaConsumazioni = Arrays.asList(consumazione);
		Optional<TipologiaStatoOrdine> tipologiaStatoOrdine = tipologiaStatoOrdineDAO.findById(5);
		Optional<Tavolo> tavolo = this.tavoloDAO.findById(idTavolo);
		ordine = this.ordineDAO.findByTavolo(tavolo.get());
		for (Consumazione element:listaConsumazioni.stream().filter(q-> (q.getMenu().getTipologiaConsumazione().getIdTipologiaConsumazione()==2 ||
																		 q.getMenu().getTipologiaConsumazione().getIdTipologiaConsumazione()==3 )).collect(Collectors.toList()))
		{
			int x = consumazioneDAO.findIdOrdine(element.getIdConsumazione());
			ordine.setIdOrdine(x);
			element.setOrdine(ordine);
			element.setStatoConsumazione(tipologiaStatoOrdine.get());
			consumazioneDAO.save(element);
		}
		return true;
	}

	//CAMBIO STATO DELLE CONSUMZIONI CONSEGNATE DAL CAMERIERE AI TAVOLI
	@PostMapping(path = "/updateStatusOrder/{idConsumazione}")
	public @ResponseBody boolean updateStatusOrder (@PathVariable("idConsumazione") Integer idConsumazione, @RequestBody Consumazione[] consumazione)
	{
		Consumazione consumazioneDaAggiornare = consumazioneDAO.findConsumazioneByIdConsumazione(idConsumazione);
		Optional<TipologiaStatoOrdine> tipologiaStatoOrdine = tipologiaStatoOrdineDAO.findById(2);
		consumazioneDaAggiornare.setStatoConsumazione(tipologiaStatoOrdine.get());
		consumazioneDAO.save(consumazioneDaAggiornare);

		return true;
	}





}