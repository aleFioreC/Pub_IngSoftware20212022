
package it.unicas.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import it.unicas.server.dao.UtenteDAO;
import it.unicas.server.model.Utente;

@Controller
public class UtenteController {
	
  @Autowired 
  private UtenteDAO utenteDAO;

  @PostMapping(path="/login")
  public @ResponseBody Utente login(@RequestBody Utente utente) {
    return utenteDAO.findUtenteByUsernameAndPassword(utente.getUsername(), utente.getPassword());
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Utente> getAllUsers() {
    return utenteDAO.findAll();
  }
}