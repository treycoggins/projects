<?php
  
if($_POST) {
    $visitor_fname = "";
    $visitor_lname = "";
    $visitor_email = "";
    $visitor_phone = "";
    $business_name = "";
    $business_address = "";
    $business_city = "";
    $business_state = "";
    $zip_code = "";

    $email_title = "New Inquiry";
    $email_body = "<div>";
      
    if(isset($_POST['first-name'])) {
        $visitor_fname = filter_var($_POST['first-name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Visitor First Name:</b></label>&nbsp;<span>".$visitor_fname."</span>
                        </div>";
    }

    if(isset($_POST['last-name'])) {
        $visitor_lname = filter_var($_POST['last-name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Visitor Last Name:</b></label>&nbsp;<span>".$visitor_lname."</span>
                        </div>";
    }
 
    if(isset($_POST['email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                        </div>";
    }
    
    if(isset($_POST['phone'])) {
        $visitor_phone = $_POST['phone'];
        $email_body .= "<div>
                         <label><b>Visitor Phone:</b></label>&nbsp;<span>".$visitor_phone."</span>
                      </div>";
  }

    if(isset($_POST['business-name'])) {
        $business_name = $_POST['business-name'];
        $email_body .= "<div>
                       <label><b>Business Name:</b></label>&nbsp;<span>".$business_name."</span>
                    </div>";
}

    if(isset($_POST['address'])) {
        $business_address = filter_var($_POST['address'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Address:</b></label>&nbsp;<span>".$business_address."</span>
                        </div>";
    }
     
    if(isset($_POST['city'])) {
        $business_city = filter_var($_POST['city'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>City:</b></label>&nbsp;<span>".$business_city."</span>
                        </div>";
    }

    if(isset($_POST['state'])) {
        $business_state = filter_var($_POST['state'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>State:</b></label>&nbsp;<span>".$business_state."</span>
                        </div>";
    }
  
    if(isset($_POST['zip-code'])) {
        $zip_code = htmlspecialchars($_POST['zip-code']);
        $email_body .= "<div>
                           <label><b>Zip Code:</b></label>
                           <div>".$zip_code."</div>
                        </div>";
    }

    $email_body .= "</div>";
 
    $recipient = "trey@surfturkey.net";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    . 'Content-type: text/html; charset=utf-8' . "\r\n"
    . 'From: ' . $visitor_email . "\r\n";
      
    if(mail($recipient, $email_title, $email_body, $headers)) {
        echo "<p>Thank you for contacting us $visitor_fname. You will get a reply within 24 hours.</p>
            <a href="index.html">Back to SurfTurkey.net</a>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
      
} else {
    echo '<p>Something went wrong</p>';
}
?>

