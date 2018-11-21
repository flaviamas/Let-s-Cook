var express = require("express");
var router = express.Router();
const apikey = "9f30fd6c33e0ab0ffcd0d2f1ae5c7099";
const appid = "e6ad82b4";
/* GET search page. */
router.get("/", function(req, res, next) {
  res.render("search", { title: "Express" }); //mostra una pagina HTML, cerca search nella /views e lo mostra
});

module.exports = router;
app.get('/',function(req,res) {
  res.render('/search',{recipe: null, error:null})
});

app.post('/',function(req,res){
  let name = req.body.name_field;
  let url ='https://api.edamam.com/search?q='+name+'&app_id='+appid+'&app_key='+apikey;
   request(url,function(err,response,body){
     if(err){
       res.render('search',{recipe:null,error:'error, try with another ingredient'})
     }
     else {
       let rec;
     }

   })

});