<?php
if(isset($_POST['email'])) {
     
    // CHANGE THE TWO LINES BELOW
    $email_to = "annika.hallerberg@gmx.de";
     
    $email_subject = "Hallo StudentWonderCoach! Ich brauche deine Hilfe.";
     
     
    function died($error) {
        // your error code can go here
        echo "Ups! Hier ist etwas schief gelaufen.";
        echo "Fehler:<br /><br />";
        echo $error."<br /><br />";
        echo "Schau noch mal nach, ob du etwas falsch eingetragen hast.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('Ups! Hier ist etwas schief gelaufen.');       
    }
     
    $name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'Deine E-Mail Adresse scheint nicht korrekt zu sein.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'Dein Name scheint Fehler zu enthalten.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'Deine Nachricht scheint Fehler zu enthalten.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- place your own success html below -->
 
Danke für deine Nachricht! Ich melde mich so schnell wie möglich bei dir.
 
<?php
}
die();
?>
