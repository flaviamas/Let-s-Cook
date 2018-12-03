
function validaForm(){
    console.log(document.sign_up.cpassword.value);
    console.log(document.sign_up.password.value);
    
    var email_reg_exp= /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
  
    if (!email_reg_exp.test(emailid) || (emailid == "") || (emailid == "undefined")) {
      alert("Please, enter correct email address");
      document.sign_up.emailid.select();
    }
  
    if(document.sign_up.cpassword.value != document.sign_up.password.value){
      alert("Different password, please enter the same password");
      //document.signup.cpassword.value='';
     // document.signup.password.focus();
      return false;
    }
  
    return true;
  }