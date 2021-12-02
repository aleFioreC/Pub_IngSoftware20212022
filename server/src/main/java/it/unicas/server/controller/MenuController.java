
package it.unicas.server.controller;

import it.unicas.server.model.Menu;
import it.unicas.server.model.TipologiaConsumazione;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import it.unicas.server.dao.MenuDAO;



@Controller
public class MenuController {

    @Autowired
    private MenuDAO menuDAO;


    @GetMapping(path="/menuItems")
    public @ResponseBody Iterable<Menu> getAllMenuItems() {
        return menuDAO.findAll();
    }
}
