<?php
    require_once('class.phpmailer.php');
    function sendmail($to,$subject,$message,$name)
    {
                  $mail             = new PHPMailer();
                  $body             = $message;
                  $mail->IsSMTP();
                  $mail->Host       = "smtp.gmail.com";                  
                  $mail->SMTPAuth   = true;
                  $mail->Port       = 587;
                  $mail->Username   = "";
                  $mail->Password   = "";
                  $mail->SMTPSecure = 'tls';
                  $mail->SetFrom('kaushik.iitmadras@gmail.com', 'Kaushik Karambelkar');
                  $mail->AddReplyTo("kaushik.iitmadras@gmail.com","Kaushik Karambelkar");
                  $mail->Subject    = $subject;
                  $mail->AltBody    = "To view the message, please use an HTML compatible email viewer!";
                  $mail->MsgHTML($body);
                  $address = $to;
                  $mail->AddAddress($address, $name);
                  if(!$mail->Send()) {
                      return 0;
                  } else {
                        return 1;
                  }
    }
?>
