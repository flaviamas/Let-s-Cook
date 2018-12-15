function validaForm() {
  if (document.sign_up.cognome.value == "") {
    alert("insert last name");
    return false;
  }
  if (document.sign_up.nome.value == "") {
    alert("insert first name");
    return false;
  }

  if (document.sign_up.email_name.value == "") {
    alert("insert email");
    return false;
  }
  return true;
}

function controlloEmail() {
  var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
  if (!email_reg_exp.test(email_name) || email_name == "undefined") {
    alert("Please, enter correct email address!");
    document.sign_up.emailid.select();
    return false;
  }
  return true;
}

function controlloCognome() {
  var c = parseInt(document.sign_up.cognome.value);
  if (!isNaN(c)) {
    alert("last name is not a number!");
    return false;
  }
  return true;
}

function controlloNome() {
  var n = parseInt(document.sign_up.nome.value);
  if (!isNaN(n)) {
    alert("first name is not a number!");
    return false;
  }
  return true;
}

function controlloPassword() {
  if (document.sign_up.password.value.length < 4) {
    alert("too short password, min 4 characters");
    return false;
  }

  if (document.sign_up.password.value != document.sign_up.cpassword.value) {
    alert("Different passwords, please enter the same password!");
    document.sign_up.cpassword.value = "";
    document.sign_up.password.focus();
    return false;
  }

  return true;
}
