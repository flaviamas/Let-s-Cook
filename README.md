# 🍝 Let's Cook

## Progetto Reti di Calcolatori

Il progetto consiste nella realizzazione di un servizio REST accessibile via Web.

## Requisiti

- [x] Il servizio REST implementato deve interfacciare almeno due servizi REST _esterni_, cioè non su localhost.
- [x] Almeno uno dei servizi REST esterni deve essere _commerciale_ (es: Twitter, Google, Facebook, Pubnub, Firebase, etc)
- [x] Almeno uno dei servizi REST esterni deve essere acceduto con OAuth.
- [x] Si devono usare WebSocket.
- [x] Il progetto deve essere su GitHub.
- [x] Le API del servizio REST implementato devono essere documentate su GitHub.

## Avvio

- Per installare le dipendenze eseguire `npm install`, verranno lette dal file _package.json_ e installate.
- Per avviare il server eseguire `npm start`

## Descrizione

Il progetto utilizza le API fornite da [https://www.edamam.com/ ](https://www.edamam.com/)per cercare le ricette e quelle di [https://www.thecocktaildb.com/](https://www.edamam.com/) per la ricerca delle ricette di cocktail.

Una volta ottenute, tali ricette vengono mostrate nella pagina dei risultati.
Per poter accedere alla Chat implementata attraverso WebSocket è necessario fare l'accesso al sito tramite Facebook utilizzando il protocollo OAuth e successivamente premere il bottone Chat.

La pagina iniziale contiene il nome del sito, le pagine con le informazioni riguardanti il sito, le due card food e cocktails che mandano alle rispettive pagine di ricerca e il bottone per effettuare il login tramite Facebook. Nel momento in cui viene effettuato l'accesso, compare il nome dell'utente e il pulsante Chat.

## SignIn

![immagine1](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/SchermataPrincipale.png)

Per effettuare l'accesso bisogna premere il pulsante login sulla navbar del sito, inserire nome, email o numero di telefono di Facebook e la password.

![immagine1.2](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/SchermataLogin.png)

In alto a destra sulla navbar comparirà il nome dell'utente mentre a sinistra il pulsante chat.

## Ricerca

![immagine2](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/errorSearch.png)

La pagina di ricerca ha una semplice barra per la ricerca. Nel caso in cui la ricerca della ricetta inserita non mostri risultati, comparirà una pagina di errore. Schiacciando il tasto back si tornerà poi alla ricerca.

## Risultato

![immagine3](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/risultatiRicerca.png)

Dopo aver inserito la ricetta da cercare, se la ricerca va a buon fine, viene mostrata la pagina dei risultati trovati. Il risultato è composto dalla foto del piatto finito e dal link di reindirizzamento al sito in cui è scritta la ricetta.

## Chat

![immagine4](https://github.com/flaviamas/Let-s-Cook/blob/master/public/images/chatRoom.png)

La pagina della chat presenta una barra iniziale per inserire il nome che comparirà nella chat, una chatbox in cui compaiono i messaggi e una barra in basso in cui viene scritto il messaggio da inviare.

## API reference

Le API utilizzate sono:

- [Edamam](https://developer.edamam.com/edamam-recipe-api)
- [The Cocktail DB](https://www.thecocktaildb.com/api.php)
- [Facebook API](https://developers.facebook.com/?locale=it_IT)
- [Google Drive API](https://developers.google.com/drive/)

## Tecnologie usate

- [Node.js](https://nodejs.org/it/)
- [Express](https://expressjs.com/)
- [Jade](https://pugjs.org/api/getting-started.html)
- [Heroku](https://www.heroku.com/)
- [Socket.io](https://socket.io/)
- [Bootstrap](https://getbootstrap.com/)

## Endpoints

### Ricette

* **URL**

  /search/json="recipe"

* **Metodo:**

  `GET` 
  
*  **Parametri URL**
   
 	` Nome ricetta = [String] ` 

* **Success Response:**
  * **Code:** 200 OK
  * **Content:** 
      `
      "q": "carbonara",
      "hits": [
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_acffbf23436b4bebeb7efe30d75127a5",
                  "label": "Risotto Carbonara",
                  "image": "https://www.edamam.com/web-img/e36/e36c818c53ce8bfd491bdbfd4dc48bf1.jpeg",
                  "source": "Ruhlman",
                  "url": "http://ruhlman.com/2012/07/q-a-with-and-she-cooks-2/",
                  "shareAs": "http://www.edamam.com/recipe/risotto-carbonara-acffbf23436b4bebeb7efe30d75127a5/carbonara",
                  ...
        ],
        `
	
* **Error Response:**

	**Code:** 400 Bad Request  <br />
    **Content:** `{}` Array JSON vuoto

* **Esempio:**

	` GET http://localhost:3000/search/json=carbonara `

### Cocktail

* **URL**

  /searchcocktail/json="cocktail"

* **Metodo:**

  `GET` 
  
*  **Parametri URL**
   
 	` cocktail name = [String] ` 
	
* **Success Response:**
  * **Code:** 200 OK<br />
    **Content:**
    `
  "drinks": [
    {
      "idDrink": "13060",
      "strDrink": "Margarita",
      "strCategory": "Ordinary Drink",
      "strIBA": "Contemporary Classics",
      "strAlcoholic": "Alcoholic",
      ...
    `
	
* **Error Response:**

	* **Code:** 400 Bad Request  <br />
    **Content:** `{}` Array JSON vuoto

* **Esempio:**

	` GET http://localhost:3000/searchcocktail/json=Margarita `