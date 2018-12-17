var express = require("express");
var router = express.Router();
var pgp = require('pg-promise')();
var db = pgp("postgres://postgres:admin@localhost:5432/Letscook");
//per farlo funzionare da ilaria scrivere dopo il secondo postgres la password "admin"

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});


//controllo campo login
router.post("/", function(req, res) {
  var email = req.body.email_login;
  var password=req.body.psw_login;
  
  //metodo one significa che la funzione viene esguita una sola volta
  db.one('SELECT * FROM utente where $1=utente.email',email).then(function(data){
    //stampa sul terminale i dati partendo dalla mail inserita
    console.log("user data:")
    console.log(data);
    res.render('index',{nome:data.nome})
  })
  .catch(function(err){
    console.log(err);
    console.log("email inserita è:", email)
    console.log("la password inserita è:",password)  
    console.log("LOGIN ERROR!!!!!!!!!!!!!")
    res.render("index");
  });

/*
  User.findOne({email: email_log, psw: password},function(err,user){
    if(err){
      console.log("erroreeeeeee",err);
      return res.status(500).send();
    }
    if(!user){
      return res.status(404).send();
    }
    req.session.user=user;
    return res.status(200).send();
  })
  */
});

module.exports = router;

/*
router.get('index', function(req,res){
  if(!req.session.user){
    return res.status(401).send();
  }
  return res.status(200).send("Welcome to Let's cook");

})*/