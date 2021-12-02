
package it.unicas.server.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import it.unicas.server.dao.TavoloDAO;
import it.unicas.server.model.Tavolo;

@Controller
public class TavoloController {
	
  @Autowired 
  private TavoloDAO tavoloDAO;

  @GetMapping(path="/allTavoli")
  public @ResponseBody Iterable<Tavolo> getAllTavoli() {
    return tavoloDAO.findAll();
  }
  
  @GetMapping(path="/getTavolo/{id}")
  public @ResponseBody Optional<Tavolo> getAllTavoli(@PathVariable String id) {
    return tavoloDAO.findById(Integer.valueOf(id));
  }

}