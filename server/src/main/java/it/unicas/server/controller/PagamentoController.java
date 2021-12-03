
package it.unicas.server.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import it.unicas.server.dao.OrdineDAO;
import it.unicas.server.dao.TavoloDAO;
import it.unicas.server.dao.TipologiaPagamentoDAO;
import it.unicas.server.dao.TipologiaStatoOrdineDAO;
import it.unicas.server.model.Ordine;
import it.unicas.server.model.Tavolo;
import it.unicas.server.model.TipologiaPagamento;
import it.unicas.server.model.TipologiaStatoOrdine;

@Controller
public class PagamentoController {
	
	@Autowired
	private OrdineDAO ordineDAO;
	
	@Autowired
	private TipologiaPagamentoDAO tipologiaPagamentoDAO;
	
	@Autowired
	private TipologiaStatoOrdineDAO tipologiaStatoOrdineDAO;
	
	@Autowired
	private TavoloDAO tavoloDAO;
	
	@PostMapping(path = "/inviaPagamento/{idTipologiaPagamento}")
	public @ResponseBody boolean inviaPagamento(@PathVariable("idTipologiaPagamento") String idTipologiaPagamento, @RequestBody Ordine ordine) {
		Optional<TipologiaPagamento> tipologiaPagamento = tipologiaPagamentoDAO.findById(Integer.valueOf(idTipologiaPagamento));
		Optional<TipologiaStatoOrdine> tipologiaStatoOrdine = tipologiaStatoOrdineDAO.findById(3);
		if (tipologiaPagamento.isPresent() && tipologiaStatoOrdine.isPresent()) {
			Optional<Tavolo> tavolo = tavoloDAO.findById(ordine.getTavolo().getIdTavolo());
			if (tavolo.isPresent()) {
				Tavolo tavoloSave = tavolo.get();
				tavoloSave.setOccupato(0);
				tavoloDAO.save(tavoloSave);
			}
			ordine.setTipologiaPagamento(tipologiaPagamento.get());
			ordine.setStatoOrdine(tipologiaStatoOrdine.get());
			ordineDAO.save(ordine);
			return true;
		} else {
			return false;
		}
	}


}