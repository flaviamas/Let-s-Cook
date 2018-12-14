<html>
    <head></head>
    <body>
<?php
    $dbconn=@pg_connect('host=localhost port=2543 dbname=Lets user=postgres password=''');

    if($dbconn) {
       $email=$_POST['emailid'];
       $cognome=$_POST['last_name'];
       $nome=$_POST['first_name'];
       $q1="select * from utente where $1==utente.email and $2==utente.cognome and $3==utente.nome";
       $result = =pg_query_params ($dbconn ,$q1 ,array($email,$cognome,$nome)); 
       if(!$result) alert("C'è già uno che si chiama così,nun ce provà");
       else {
           $psw=$_POST['password'];
           $data=pg_query_params($dbconn,$q2,array($email,$nome,$cognome,$psw);
           if($data)
           {
           // header (” Location :  r e g i s t r a t i o n C o m p l e t e d . html ” ) ;
           echo "<h1>
           Registrazione completata
           <br/></h1>" ;
           echo
           "<a href=/index";      
       }
    }
    
    ?> 
    </body>
</html>


