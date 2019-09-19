var express = require("express");
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Letscook';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});


/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/*
//controllo campo login
router.post("/", function(req, res) {
  var email= req.body.email_login;
  var password=req.body.password_login;
  
  //metodo one significa che la funzione viene esguita una sola volta
  var q1= db.one('SELECT * FROM utente where $1=utente.email and $2=psw',[email,password]).then(function(data){
    //stampa sul terminale i dati partendo dalla mail inserita
    let welcomestr="Welcome "+data.nome+ " thanks for logging in!";
    console.log("user data:")
    console.log(data);
    res.render('index',{nome:welcomestr})
  })
  .catch(function(err){
    console.log(err);
    console.log("email entered is:", email)
    console.log("password entered is:",password)  
    console.log("LOGIN ERROR!!!!!!!!!!!!!")
    res.render("SignUp",);
  });
});*/


module.exports = router;
