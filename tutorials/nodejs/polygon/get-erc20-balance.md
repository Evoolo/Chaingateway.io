---
layout: tutorials
title: Tutorial to get ERC20 or Polygon balance of an address
permalink: /tutorials/nodejs-polygon-get-erc20-balance/
---

To query the balance of ERC20 tokens, you need a valid Ethereum address. With this tutorial you can easily query the balance of the respective Ethereum address. We have written a detailed tutorial for this purpose. Read more.

#### Prerequisites

1. Basic knowledge of Nodejs
2. Account at Chaingateway.io
3. A local or remote machine with NodeJs and installed axios module

#### The Code

{% highlight javascript linenos %}
    
    /*
    * Replace with your Values
    */
    var apikey = "YOURAPIKEY"
    var polygonaddress = "ETHEREUMADDRESS"; // Polygon address you want to get the balance of
    var contractaddress = "CONTRACTADDRESS"; // Smart contract address of the Token

   var axios = require('axios');

    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.chaingateway.io/v2/polygon/balances/'+polygonaddress+'/erc20/'+contractaddress,
        headers: { 
            'Accept': 'application/json',
            'Authorization': apikey
        }
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

1. Replace “YOURAPIKEY” in line 5 of above code with the API Key in your Chaingateway.io Account Panel.
2. Replace "ETHEREUMADDRESS" in line 6 of above code with the Polygon address you want to get the balance of.
3. Replace "CONTRACTADDRESS" in line 7 of above code with the smart contract address of the Token

#### Final Steps

Upload the code above to your local or remote machine

Call the script by navigating to your favorite browser and entering the URL

Congratulations! You should now see a new generated address which you can use to send and receive ERC-20 Tokens. 