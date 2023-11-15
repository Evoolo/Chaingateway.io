---
layout: tutorials
title: Tutorial to send Ethereum or ERC20 Tokens with PHP
permalink: /tutorials/php-ethereum-subscribe/
---

This tutorial will show you how to receive automated messages when you receive money on the selected Ethereum address. The only thing needed is a Ethereum address where the money will land and a URL where the notification will be sent.

#### Prerequisites
1. Basic knowledge of PHP
2. Account at Chaingateway.io
3. A local or remote machine with PHP7 and installed modules JSON and CURL


#### IPN receiver

1. Create a folder with a secure name on your web server. For example B5tN-KtfOTf37 (Please use something own).
2. Upload the following PHP code in the new generated folder on your web server.
3. Create a file named ipnlog.txt and upload it to the same folder and give the file write permissions. The script below will log all deposits to the ipnlog.txt file. You can process deposits the way you want of course (Example: Update user balances, Mark orders as paid, …).

{% highlight php linenos %}
    <?php
        // Receive JSON
        $request = file_get_contents("php://input");

        // Decode JSON
        $request = json_decode($request, true);

        // Log parameters to a file
        file_put_contents("ipnlog.txt", "id:" . $request["id"] . " action:" . $request["action"] . " timestamp:" . $request["timestamp"] . " type:" . $request["type"] . " ethereumaddress:" . $request["ethereumaddress"] . " contractaddress:" . $request["contractaddress"] . "amount:" . $request["amount"] . "\r\n", FILE_APPEND);

        // Tell API that the IPN has been received successfully
        header("Content-Type: application/json");
        $response = ["ok" => true];
        $response = json_encode($response);
        echo $response;
    ?>
{% endhighlight %}

#### The Code

{% highlight php linenos %}
    
    <?php


    # ----- REPLACE THE VARIABLES BELOW WITH YOUR DATA -----
    $apikey = "YOURAPIKEY"; // API Key in your account panel
    $contractaddress = "CONTRACTADDRESS"; // Contract address of the token you want to watch
    $ethereumaddress = "ETHEREUMADDRESS"; // Ethereum address you want to watch
    $url = "https://yoururl.com/ipnreceiver.php"; // URL where you want to receive updates
    # -------------------------------------------------------

    $ch = curl_init("https://api.chaingateway.io/v2/ethereum/webhooks");

    $payload = json_encode( array("to" => $ethereumaddress, "contractaddress" => $contractaddress, "url" => $url) );
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $payload );
    curl_setopt( $ch, CURLOPT_CUSTOMREQUEST ,  'POST' );
    curl_setopt( $ch, CURLOPT_HTTPHEADER, array("Content-Type:application/json", "Authorization: " . $apikey));

    # Return response instead of printing.
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );

    # Send request.
    $result = curl_exec($ch);
    curl_close($ch);

    # Decode the received JSON string
    $resultdecoded = json_decode($result, true);

    # Print the Token balance to the screen
    echo $resultdecoded["balance"];

{% endhighlight %}



#### Code Modifications

Replace “YOURAPIKEY” in line 3 of above code with the API Key in your Chaingateway.io Account Panel.
Replace “ethereumaddress” in line 4 of above code with Contract address of the token you want to watch.
Replace “contractaddress” in line 5 of above code with the ethereum address you want to watch.
Replace “https://yoururl.com/ipnreceiver.php” in line 6 of above code with the URL you want to receive updates.

#### Final Steps

Upload the code above to your local or remote machine
Call the script in your browser. For example, if you upload it to the root directory of your website, you can call it by typing yourwebsite.com/createsubscription.php
After a few seconds, the script will return a status showing if the request was successful.

Congratulations! You just created an address subscription and will receive notifications on future deposits to the provided url.