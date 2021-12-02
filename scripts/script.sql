INSERT INTO `amici`.`tipologia_consumazione` (`id_tipologia_consumazione`, `tipologia`) VALUES ('1', 'Snack');
INSERT INTO `amici`.`tipologia_consumazione` (`id_tipologia_consumazione`, `tipologia`) VALUES ('2', 'Bevanda');
INSERT INTO `amici`.`tipologia_consumazione` (`id_tipologia_consumazione`, `tipologia`) VALUES ('3', 'Bevanda Analcolica');

INSERT INTO `amici`.`tipologia_ruolo` (`id_ruolo`, `tipologia`) VALUES ('1', 'Admin');
INSERT INTO `amici`.`tipologia_ruolo` (`id_ruolo`, `tipologia`) VALUES ('2', 'Cameriere');
INSERT INTO `amici`.`tipologia_ruolo` (`id_ruolo`, `tipologia`) VALUES ('3', 'Barista');
INSERT INTO `amici`.`tipologia_ruolo` (`id_ruolo`, `tipologia`) VALUES ('4', 'Cuoco');

INSERT INTO `amici`.`tipologia_tavolo` (`id_tipologia_tavolo`, `tipologia`) VALUES ('1', 'Interno');
INSERT INTO `amici`.`tipologia_tavolo` (`id_tipologia_tavolo`, `tipologia`) VALUES ('2', 'Esterno');

INSERT INTO `amici`.`utente` (`id_utente`, `cognome`, `nome`, `password`, `username`, `tipologia_ruolo_id_ruolo`) VALUES ('1', 'admin', 'admin', 'admin', 'admin', '1');
INSERT INTO `amici`.`utente` (`id_utente`, `cognome`, `nome`, `password`, `username`, `tipologia_ruolo_id_ruolo`) VALUES ('2', 'cameriere', 'cameriere', 'cameriere', 'cameriere', '2');
INSERT INTO `amici`.`utente` (`id_utente`, `cognome`, `nome`, `password`, `username`, `tipologia_ruolo_id_ruolo`) VALUES ('3', 'barista', 'barista', 'barista', 'barista', '3');
INSERT INTO `amici`.`utente` (`id_utente`, `cognome`, `nome`, `password`, `username`, `tipologia_ruolo_id_ruolo`) VALUES ('4', 'cuoco', 'cuoco', 'cuoco', 'cuoco', '4');

INSERT INTO `amici`.`tavolo` (`id_tavolo`, `numero`, `tipologia_tavolo_id_tipologia_tavolo`) VALUES ('1', '1', '1');
INSERT INTO `amici`.`tavolo` (`id_tavolo`, `numero`, `tipologia_tavolo_id_tipologia_tavolo`) VALUES ('2', '2', '2');
INSERT INTO `amici`.`tavolo` (`id_tavolo`, `numero`, `tipologia_tavolo_id_tipologia_tavolo`) VALUES ('3', '3', '2');

INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`, `tipologia_consumazione_id_tipologia_consumazione`) VALUES ('1', 'Big Mac','10','1');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('2', 'Gran McChicken','10','1');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('3', 'My Selection BBQ','10','1');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('4', 'Crispy McBacon','10','1');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('5', 'Coca Cola','2','3');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('6', 'Fanta','2','3');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('7', 'Sprite','2','3');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('8', 'Acqua','2','3');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('9', 'Birra','3','2');
INSERT INTO `amici`.`menu` (`id_menu`, `descrizione`,`prezzo`,`tipologia_consumazione_id_tipologia_consumazione`) VALUES ('10', 'Vino','3','2');

COMMIT;