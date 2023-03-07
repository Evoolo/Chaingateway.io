---
layout: tutorials
title: Tron Tutorial to create adresses with PHP
permalink: /tutorials/php-tron-create-address
---

When sending or receiving ERC-20 Tokens, you need an address which is compatible with the Tron Blockchain. Of course, most people are using their wallets to create valid addresses. But what if you need to create hundreds of thousands of addresses for your users? Or create deposit addresses automatically whenever one of your users wants to pay you? In this case, you will need a better way of generating addresses in an automated and easy way. We have written an extensive tutorial for that. Keep on reading.
Prerequisites

1. Basic knowledge of PHP
2. Account at Chaingateway.io
3. A local or remote machine with PHP7 and installed modules JSON and CURL

#### The Code

{% highlight php linenos %}
    
    <?php


    # ----- REPLACE THE VARIABLES BELOW WITH YOUR DATA -----
    $apikey = "YOURAPIKEY"; // API Key in your account panel
    $password = "PASSWORD"; // Secure password for the Tron address you are creating
    # -------------------------------------------------------


    $curl = curl_init();

    $payload = json_encode(array("password" => $password );
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $payload );

    curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.chaingateway.io/v2/tron/addresses',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_HTTPHEADER => array(
        'Accept: application/json', 'Authorization: '. $apikey
    )
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    echo $response;

{% endhighlight %}



#### Code Modifications

Replace “YOURAPIKEY” in line 3 of above code with the API Key in your Chaingateway.io Account Panel.
Replace “PASSWORD” in line 4 of above code with a very secure password (at least 12 characters alphanumeric of different case). Don’t lose this password as you can’t recover it!

#### Final Steps

Upload the code above to your local or remote machine
Call the script by navigating to your favorite browser and entering the URL

Congratulations! You should now see a new generated address which you can use to send and receive ERC-20 Tokens. 