package it.unicas.server.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import it.unicas.server.model.Menu;

public interface MenuDAO extends CrudRepository<Menu, Integer> {
}
