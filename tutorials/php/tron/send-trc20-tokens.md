---
layout: tutorials
title: Tutorial to send Tron or TRC20 Tokens with PHP
permalink: /tutorials/php-tron-send-trc20-tokens/
redirect_from:
  - /blog/send-trc-20-transactions-php-tutorial/
---

To send or receive ERC-20 tokens, you need an address that is compatible with the Tron blockchain. Of course, most people use their wallets to send TRC20 tokens. But what if you need to make hundreds of thousands of transactions? In this case, you need a better way to send TRC20 tokens in an automated way. We have written a detailed tutorial for this purpose. Read more.

1. Basic knowledge of PHP
2. Account at Chaingateway.io
3. A local or remote machine with PHP7 and installed modules JSON and CURL

#### The Code

{% highlight php linenos %}
    
<?php

// Replace with your values
$apikey = "YOURAPIKEY";
$contractaddress = "CONTRACTADDRESS";
$from = "SENDERADDRESS";
$to = "RECEIVERADDRESS";
$password = "PASSWORD";
$amount = 55.89;

$url = "https://api.chaingateway.io/v2/tron/transactions/trc20";

$data = array(
    "contractaddress" => $contractaddress,
    "from" => $from,
    "to" => $to,
    "password" => $password,
    "amount" => $amount
);

$headers = array(
    'Accept: application/json',
    'Authorization: ' . $apikey
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

curl_close($ch);

echo $response;

?>


{% endhighlight %}



#### Code Modifications

Replace “YOURAPIKEY” in line 3 of above code with the API Key in your Chaingateway.io Account Panel.
Replace “PASSWORD” in line 4 of above code with a very secure password (at least 12 characters alphanumeric of different case). Don’t lose this password as you can’t recover it!

#### Final Steps

Upload the code above to your local or remote machine
Call the script by navigating to your favorite browser and entering the URL

Congratulations! You should now see a new generated address which you can use to send and receive ERC-20 Tokens. 
