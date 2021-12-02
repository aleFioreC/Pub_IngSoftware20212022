INSERT INTO `amici`.`tipologia_consumazione` (`id_tipologia_consumazione`, `tipologia`, `prezzo`) VALUES ('1', 'Snack', 50);
INSERT INTO `amici`.`tipologia_consumazione` (`id_tipologia_consumazione`, `tipologia`, `prezzo`) VALUES ('2', 'Bevanda', 20);
INSERT INTO `amici`.`tipologia_consumazione` (`id_tipologia_consumazione`, `tipologia`, `prezzo`) VALUES ('3', 'Bevanda Analcolica',, 20);

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

COMMIT;