---
layout: tutorials
title: Tutorial to get Polygon or ERC20 Balance with PHP
permalink: /tutorials/php-polygon-get-erc20-balance
---

To query the balance of ERC20 tokens, you need a valid Ethereum address. With this tutorial you can easily query the balance of the respective Ethereum address. We have written a detailed tutorial for this purpose. Read more.

1. Basic knowledge of PHP
2. Account at Chaingateway.io
3. A local or remote machine with PHP7 and installed modules JSON and CURL

#### The Code

{% highlight php linenos %}
    
    <?php

    # ----- REPLACE THE VARIABLES BELOW WITH YOUR DATA -----
    $apikey = "YOURAPIKEY"; // API Key in your account panel
    $contractaddress = "CONTRACTADDRESS"; // Smart contract address of the Token
    $from = "SENDERADDRESS"; // Polygon address you want to send from (must have been created with Chaingateway.io)
    $to = "RECEIVERADDRESS"; // Receiving polygon address
    $password = "PASSWORD"; // Password of the polygon address (which you specified when you created the address)
    $amount = 55.89; // Amount of Tokens to send
    # -------------------------------------------------------


    
    $ch = curl_init("https://api.chaingateway.io/v2/polygon/balances/".$polygonaddress."/erc20/".$contractaddress);

    # Setup request to send json via POST. This is where all parameters should be entered.
    $payload = json_encode( array("contractaddress" => $contractaddress, "from" => $from, "to" => $to, "password" => $password, "amount" => $amount) );

    curl_setopt( $ch, CURLOPT_CUSTOMREQUEST ,  'GET' );
    curl_setopt( $ch, CURLOPT_HTTPHEADER, array("Content-Type:application/json", "Authorization: " . $apikey));

    # Return response instead of printing.
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );

    # Send request.
    $result = curl_exec($ch);
    curl_close($ch);

    # Decode the received JSON string
    $resultdecoded = json_decode($result, true);

    echo $result;

{% endhighlight %}


#### Code Modifications
1. Replace “YOURAPIKEY” in above code with the API Key in your Chaingateway.io Account Panel.
2. Replace “CONTRACTADDRESS” with the smart contract address of the Token.
3. Replace “SENDERADDRESS” with the polygon address you want to send from.
4. Replace “RECEIVERADDRESS” with the receiving polygon address
5. Replace “PASSWORD” with your password of the polygon address, which you specified when you created the address.
6. Replace “55.89” with the amount of Tokens you want to send.

#### Final Steps

