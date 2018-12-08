
function validaForm(){

   /*var email_reg_exp= /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
  
    if (!email_reg_exp.test(emailid) || (emailid == "") || (emailid == "undefined")) {
      alert("Please, enter correct email address!");
      document.sign_up.emailid.select();
      return false;
    }*/
  
    if(document.sign_up.password.value != document.sign_up.cpassword.value){
      alert("Different passwords, please enter the same password!");
      document.sign_up.cpassword.value='';
      document.sign_up.password.focus();
      return false;
    }
  
    return true;
 }