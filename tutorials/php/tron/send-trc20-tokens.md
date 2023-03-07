---
layout: tutorials
title: Tutorial to send Tron or TRC20 Tokens with PHP
permalink: /tutorials/php-tron-send-trc20-tokens
---

To send or receive ERC-20 tokens, you need an address that is compatible with the Tron blockchain. Of course, most people use their wallets to send TRC20 tokens. But what if you need to make hundreds of thousands of transactions? In this case, you need a better way to send TRC20 tokens in an automated way. We have written a detailed tutorial for this purpose. Read more.

1. Basic knowledge of PHP
2. Account at Chaingateway.io
3. A local or remote machine with PHP7 and installed modules JSON and CURL

#### The Code

{% highlight php linenos %}
    
    <?php

    # ----- REPLACE THE VARIABLES BELOW WITH YOUR DATA -----
    $apikey = "YOURAPIKEY"; // API Key in your account panel
    $tronaddress = "TRONADDRESS"; // Tron address you want to get the balance of
    $contractaddress = "CONTRACTADDRESS"; // Smart contract address of the Token
    # -------------------------------------------------------

    $ch = curl_init("https://api.chaingateway.io/v2/tron/transactions/erc20");

    $payload = json_encode( array("tronaddress" => $tronaddress, "contractaddress" => $contractaddress) );
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
Replace “PASSWORD” in line 4 of above code with a very secure password (at least 12 characters alphanumeric of different case). Don’t lose this password as you can’t recover it!

#### Final Steps

Upload the code above to your local or remote machine
Call the script by navigating to your favorite browser and entering the URL

Congratulations! You should now see a new generated address which you can use to send and receive ERC-20 Tokens. 