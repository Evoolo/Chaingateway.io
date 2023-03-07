---
layout: tutorials
title: Tutorial to get Ethereum or ERC20 Balance with PHP
permalink: /tutorials/php-ethereum-get-erc20-balance
---

To query the balance of ERC20 tokens, you need a valid Ethereum address. With this tutorial you can easily query the balance of the respective Ethereum address. We have written a detailed tutorial for this purpose. Read more.

1. Basic knowledge of PHP
2. Account at Chaingateway.io
3. A local or remote machine with PHP7 and installed modules JSON and CURL

#### The Code

{% highlight php linenos %}
    
    <?php

    # ----- REPLACE THE VARIABLES BELOW WITH YOUR DATA -----
    $apikey = "YOURAPIKEY";
    $ethereumaddress = "ETHEREUMADDRESS"; // Ethereum address you want to get the balance of
    $contractaddress = "CONTRACTADDRESS"; // Smart contract address of the Token
    # -------------------------------------------------------


    
    $ch = curl_init("https://api.chaingateway.io/v2/ethereum/balances/".$ethereumaddress."/erc20/".$contractaddress);

    # Setup request to send json via POST. This is where all parameters should be entered.

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
3. Replace “SENDERADDRESS” with the ethereum address you want to send from.
4. Replace “RECEIVERADDRESS” with the receiving ethereum address
5. Replace “PASSWORD” with your password of the ethereum address, which you specified when you created the address.
6. Replace “55.89” with the amount of Tokens you want to send.

#### Final Steps

