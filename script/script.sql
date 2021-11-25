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

COMMIT;