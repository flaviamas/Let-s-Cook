var express = require("express");
var router = express.Router();
var pgp = require('pg-promise')();
var db = pgp("postgres://postgres:@localhost:5432/Letscook");
//per farlo funzionare da ilaria scrivere dopo il secondo postgres la password "admin"

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});


//controllo campo login
router.post("/", function(req, res) {
  let email = req.body.email_login;
  let password=req.body.psw_login;

  //metodo one significa che la funzione viene esguita una sola volta
  db.one('SELECT * FROM utente where $1=utente.email',email).then(function(data){
    //stampa sul terminale i dati partendo dalla mail inserita
    console.log("i dati dell'utente dalla mail sono:")
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
    console.log("email inserita è:", email)
    console.log("la password inserita è:",password)
    if(function(errore){
      console.log("LOGIN ERROR!!!!!!!!!!!!!")
      res.render("index");
    });
  });
  
});
module.exports = router;
