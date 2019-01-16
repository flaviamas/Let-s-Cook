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
Per poter accedere alla Chat implementata attraverso WebSocket è necessario fare l'accesso al sito tramite Facebook utilizzando il protocollo Oauth  e successivamente premere il bottone Chat.

La pagina iniziale contiene il nome del sito, le pagine con le informazioni riguardanti il sito, le due card  food e cocktails che mandano alle rispettive pagine di ricerca e il bottone per effettuare il login tramite Facebook. Nel momento in cui viene effettuato l'accesso, compare il nome dell'utente e il pulsante Chat.

## **SignIn**

![immagine1](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/SchermataPrincipale.png)

Per effettuare l'accesso bisogna premere il pulsantre login sulla navbar del sito, inserire nome, email o nomero di telefono di Facebook e la password. 

![immagine1.2](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/SchermataLogin.png)

In alto a destra sulla navbar comparirà il nome dell'utente mentre a sinistra il pulsante chat.

## **Richerca**

 ![immagine2](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/errorSearch.png)

 La pagina di ricerca ha un asemplice barra per la ricerca. Nel caso in cui la ricerca della ricetta inserita non mostri risultati, comparirà una pagina di erorre. poi schiacciando il tasto back si tornerà alla ricerca.

## **Risultato**

![immagine3](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/risultatiRicerca.png)

Dopo aver inserito la ricetta da cercare,se la ricerca va a buon fine, viene mostrata la pagina dei riultati trovati. Sotto ogni immagine del piatto è inserito anche il link di reindirizzamento per trovare la ricetta.

## **Chat**

![immagine4](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/chatRoom.png)

La pagina della chat presenta una barra iniziale per inserire il nome che comparirà nella chat, una schermata centrale in cui compaiono i messaggi e una barra in basso in cui viene scritto il messaggio da inviare.


## [API reference]

    Le API utilizzate sono 
     Edamam(https://developer.edamam.com/edamam-recipe-api)
     The Coocktail DB (https://www.thecocktaildb.com/api.php)
     Facebook (https://developers.facebook.com/?locale=it_IT)



