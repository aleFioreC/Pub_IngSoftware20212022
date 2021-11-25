
package it.unicas.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import it.unicas.server.dao.ColleghiDAO;
import it.unicas.server.model.Colleghi;

@Controller // This means that this class is a Controller
public class ColleghiController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private ColleghiDAO colleghiDAO;

  @PostMapping(path="/add") // Map ONLY POST Requests
  public @ResponseBody Iterable<Colleghi> addNewUser(@RequestBody Colleghi collega) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request
    colleghiDAO.save(collega);
    return colleghiDAO.findAll();
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Colleghi> getAllUsers() {
    // This returns a JSON or XML with the users
    return colleghiDAO.findAll();
  }
}