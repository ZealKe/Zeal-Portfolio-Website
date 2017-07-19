<?php

require("PHPMailerAutoload.php");

include("sendmail.php");
$servername = "localhost";
$username = "root";
$password = "betastar";
$db_name = "insti_webops";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db_name);

if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["comments"])) {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$comments = $_POST["comments"];

	$query = "INSERT into test(name,email,comments) values ('$name','$email','$comments')";
	$result = mysqli_query($conn,$query);
	echo "Suggestion Sent!\n";
	$mail = new PHPMailer;

	// $mail->SMTPDebug = 3;                               
	$mail->isSMTP();            
	$mail->Host = "smtp.gmail.com";
	$mail->SMTPAuth = true;                          
	$mail->Username = "username@gmail.com";                 
	$mail->Password = "userpassword";                           
	$mail->SMTPSecure = "tls";                           
	$mail->Port = 587;                                   

	$mail->From = "username@gmail.com";
	$mail->FromName = "Name here";

	$mail->addAddress("recipient@example.com", "Recipient's name here"); //Change it

	$mail->isHTML(true);

	$mail->Subject = "Suggestion for Website";
	$mail->Body = "Hello. I am " . $name . " and my suggestion for Institute Webops is " . $comments;
	$mail->AltBody = "This is the plain text version of the email content";
	if($mail->send()) {
		echo "Mail sent";
	}
	else {
		echo "Mail could not be sent";
	}
}
else {
	echo "Failed...";
}
?>
