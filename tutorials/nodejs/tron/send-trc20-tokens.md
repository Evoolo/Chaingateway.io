---
layout: tutorials
title: Tutorial to send Tron or TRC20 Tokens with NodeJs
permalink: /tutorials/nodejs-tron-send-trc20-tokens/
---

To send or receive ERC-20 tokens, you need an address that is compatible with the Tron blockchain. Of course, most people use their wallets to send TRC20 tokens. But what if you need to make hundreds of thousands of transactions? In this case, you need a better way to send TRC20 tokens in an automated way. We have written a detailed tutorial for this purpose. Read more.

#### Prerequisites

1. Basic knowledge of Nodejs
2. Account at Chaingateway.io
3. A local or remote machine with NodeJs and installed axios module

#### The Code

{% highlight nodejs linenos %}
    
    /*
    * Replace with your Values
    */
    var apikey = "YOURAPIKEY"; // API Key in your account panel
    var contractaddress = "CONTRACTADDRESS"; // Smart contract address of the Token
    var from = "SENDERADDRESS"; // Tron address you want to send from (must have been created with Chaingateway.io)
    var to = "RECEIVERADDRESS"; // Receiving tron address
    var password = "PASSWORD"; // Password of the tron address (which you specified when you created the address)
    var amount = 55.89; // Amount of Tokens to send

    var axios = require('axios');

    var data = JSON.stringify({
        "contractaddress": contractaddress,
        "from": from,
        "to": to,
        "password": password,
        "amount": amount
        });

    var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.chaingateway.io/v2/tron/transactions/trc20',
    headers: { 
        'Accept': 'application/json',
        'Authorization': apikey
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });


{% endhighlight %}



#### Code Modifications

Replace “YOURAPIKEY” in line 3 of above code with the API Key in your Chaingateway.io Account Panel.
Replace “CONTRACTADDRESS” in line 4 with the smart contract address of the Token.
Replace “SENDERADDRESS” in line 5 with the tron address you want to send from.
Replace “RECEIVERADDRESS” in line 6 with the receiving tron address
Replace “PASSWORD” in line 7 with your password of the tron address, which you specified when you created the address.
Replace “55.89” in line 8 with the amount of Tokens you want to send.

#### Final Steps

1. Upload the code above to your local or remote machine
2. Call the script by navigating to your favorite browser and entering the URL. For example, if you upload it to the root directory of your website, you can call it by typing yourwebsite.com/name-of-the-above-code.php
3. After a few seconds, the script will return a transaction id (which means the transaction has been sent successfully). You can lookup this transaction id for example on Etherscan.

Congratulations! You just sent TRC20 Tokens using Chaingateway.io. Wasn’t that hard, right?