# Let-s-Cook
#Progetto Reti di calcolatori
Il progetto consiste nella realizzazione di un servizio REST accedibile via Web

## **Requisiti**
- [x] Il servizio REST implementato deve interfacciare almeno due servizi REST *esterni*, cioè non su localhost
- [x] Almeno uno dei servizi REST esterni deve essere *commerciale* (es: twitter, google, facebook, pubnub, parse, firbase etc)
- [x] Almeno uno dei servizi REST esterni deve essere acceduto con oauth
- [x] Si devono usare Websocket
- [x] Il progetto deve essere su GITHUB
- [x] Le API del servizio REST implementato devono essere documentate su GITHUB

## **Avvio**

- Per installare le dipendenze eseguire `npm install`, verranno lette dal file *package.json* e installate.

- Per avviare il server eseguire `npm start`


## [Descrizione]

Il progetto utilizza le API fornite da https://www.edamam.com/ per cercare le ricette e quelle di https://www.thecocktaildb.com/ per la ricerca delle ricette di coocktail.

Una volta ottenute, tali ricette vengono mostrate nella pagina dei risultati.
Per poter accedere alla Chat implementata attraverso WebSocket è necessario fare l'accesso al sito tramite Facebook utilizzando il protocollo Oauth.

## [API reference]

    Le API utilizzate sono 
     Edamam(https://developer.edamam.com/edamam-recipe-api)
     The Coocktail DB (https://www.thecocktaildb.com/api.php)
     Facebook (https://developers.facebook.com/?locale=it_IT)



