package it.unicas.server.dao;

import org.springframework.data.repository.CrudRepository;

import it.unicas.server.model.TipologiaPagamento;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TipologiaPagamentoDAO extends CrudRepository<TipologiaPagamento, Integer> {

	
}