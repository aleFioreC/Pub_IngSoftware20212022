# Pub_IngSoftware20212022
Realizzazione webapp per gestione di un pub con Angular e Java

Passaggi da eseguire per l'installazione:

Clone da git

Aprire la cartella scripts e lanciare lo script.sql

Aprire la cartella client all'interno di VSCode:

1) npm install
2) npm run start
3) aprire localhost:4200 per visualizzare il client

Aprire Eclipse, importare la cartella server come Existing Maven Project:

1) Configurare l'application properties con le informazioni del database
2) Creare solo lo schema, le tabelle le crea all'avvio della Java Application
3) Run Java Application

Il proprietario di un pub ha deciso di introdurre un sistema per la raccolta e la gestione delle
ordinazioni dei clienti, per migliorare il servizio diminuendo i tempi di attesa, e per semplificare
le interazioni tra i dipendenti.
Il pub è situato nella zona centrale di una città di medie dimensioni. D’inverno il pub ha 25
tavoli nei locali interni, mentre d’estate può utilizzare la piazza antistante per altri 15 tavoli. I
clienti sono serviti ai tavoli o al bancone. Il servizio ai tavoli prevede la raccolta delle
ordinazioni da parte dei camerieri e la successiva consegna delle bevande e degli snack ordinati.
Di norma l’ordinazione di un tavolo è raccolta una volta sola anche se, sempre più spesso, i
clienti richiamano il cameriere per ordinare ulteriori bevande e snack. Il cameriere accetta solo
ordinazioni che fanno riferimento a bevande e snack presenti sul menu giornaliero.
Raccolta l’ordinazione, il cameriere la consegna al bar e in cucina. Uno dei baristi prende
un’ordinazione dalla lista di quelle da servire (rispettando l’ordine temporale di consegna),
prepara le bevande indicate su un vassoio che appoggia sul bancone, a disposizione del
cameriere. Lo stesso accade in cucina per gli snack, preparati da uno dei cuochi. Il cameriere
preleva le bevande e gli snack e li consegna ai clienti.
Prima di lasciare il pub, il cliente passa dalla cassa e comunica al cassiere il numero del suo
tavolo, ottenendo il conto che può pagare sia in contanti sia mediante carta di credito o
bancomat. Il conto è calcolato utilizzando i prezzi indicati nel menu. Il cassiere rilascia uno
scontrino fiscale, a prova dell’avvenuto pagamento. In seguito a un’ordinanza del sindaco, nel
periodo estivo non è permesso servire bevande alcoliche dopo le 22, fino alla chiusura.
Per dare una veste accattivante al locale, il proprietario è disposto a dotare ogni cameriere di un
palmare collegato senza fili al sistema di raccolta e gestione delle ordinazioni.

Caso d’uso: Raccolta.
Breve descrizione: Registrazione delle ordinazioni al tavolo.
Attore principale: Cameriere.
Attori secondari: NA
Precondizioni: NA
Postcondizioni: Ordine in attesa.
Sequenza principale degli eventi:
1. Il cameriere richiama un nuovo ordine e imposta il numero del tavolo.
2. Il sistema crea l’ordine.
3. while (ci sono consumazioni da registrare)
3.1. il cameriere la introduce nell’ordine;
4. il cameriere chiude l’ordine;
5. il sistema aggiorna lo stato dell’ordine a ‘InPreparazione’.

Caso d’uso: Consegna
Breve descrizione: Registrazione della consegna delle ordinazioni.
Attore principale: Barista / Cuoco.
Attori secondari: NA
Precondizioni: Ordine in attesa consegna.
Postcondizioni: Ordine conseganto.
Sequenza principale degli eventi:
1. Il cameriere richiama l’ordine relativo al tavolo appena servito e lo marca come consegnato;
2. il sistema aggiorna lo stato dell’ordine a 'Servito'.

Caso d’uso: Pagamento
Breve descrizione: Registrazione del saldo del conto.
Attore principale: Cassiere.
Attore secondario: Banca.
Sequenza principale degli eventi:
1. Il cassiere richiama l’ordine relativo al tavolo comunicatogli dal cliente;
2. il sistema calcola l’importo da pagare;
3. il cassiere comunica al sistema la forma di pagamento.
4. Se il pagamento è mediante carta di credito o bancomat,
4.1. il cassiere inserisce i dati relativi (passando la carta nell’apposito lettore)
4.2.il sistema contatta la banca e ottiene l’autorizzazione al pagamento.
5. Il cassiere comunica al sistema l’avvenuto pagamento,
6. il sistema emette lo scontrino.
Sequenza alternativa degli eventi:
1. La banca non concede l’autorizzazione al pagamento.
2. Il cliente non è in grado di pagare.

