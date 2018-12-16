var express = require("express");
var pgp = require('pg-promise')();
var router = express.Router();
var db = pgp("postgres://postgres:@localhost:5432/Letscook");
//per farlo funzionare da ilaria aggiungere dopo il secondo postgres la password "admin"

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("SignUp", { title: "Express" });
});

router.post("/", function(req, res) {
  let email = req.body.email_name;
  db.one('SELECT * FROM utente where $1=utente.email',email)
  .then(function(data){
    console.log('già registrato',data);
    res.render("error");
    //res.send("fatto");
  })
  .catch(function(err){
    console.log(err);
    let password=req.body.password;
    let nome=req.body.nome;
    let cognome = req.body.cognome;
    console.log(password,nome,cognome);
    db.one('INSERT INTO UTENTE VALUES ($1,$2,$3,$4)',[email,nome,cognome,password]).then(function(ok){
      console.log('not ok');
    }).catch(function(errore){
      let ris='registrato!'
      res.render('SignUp',{ris:ris});
    });
  });
  
});
module.exports = router;
