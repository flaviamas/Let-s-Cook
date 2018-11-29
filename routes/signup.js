var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("SignUp", { title: "Express" });
});

module.exports = router;

function validaForm(){
  if (document.signup.password.value.length<5){
    alert("password too short");
    return false;
  }
  if(document.signup.cpassword.value.length<5){
    alert("password too short");
    return false;
  }
  if(document.signup.cpassword.value != document.signup.password.value){
    alert("different password,please enter the same password");
    return false;
  }
  return true;
}

