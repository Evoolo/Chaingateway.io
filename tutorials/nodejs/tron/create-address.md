---
layout: tutorials
title: Tron Tutorial to create addresses with NodeJs
permalink: /tutorials/nodejs-tron-create-address/
---

When sending or receiving ERC-20 Tokens, you need an address which is compatible with the Tron Blockchain. Of course, most people are using their wallets to create valid addresses. But what if you need to create hundreds of thousands of addresses for your users? Or create deposit addresses automatically whenever one of your users wants to pay you? In this case, you will need a better way of generating addresses in an automated and easy way. We have written an extensive tutorial for that. Keep on reading.

#### Prerequisites

1. Basic knowledge of Nodejs
2. Account at Chaingateway.io
3. A local or remote machine with NodeJs and installed axios module

#### The Code

{% highlight php linenos %}
    /*
    * Replace with your Values
    */
    var apikey = "YOURAPIKEY"
    var password = "YOURPASSWORD"

    var axios = require('axios');
    var data = JSON.stringify({"password": password});

    var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.chaingateway.io/v2/tron/addresses',
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

1. Replace “YOURAPIKEY” in line 3 of above code with the API Key in your Chaingateway.io Account Panel.
2. Replace “PASSWORD” in line 4 of above code with a very secure password (at least 12 characters alphanumeric of different case). Don’t lose this password as you can’t recover it!

#### Final Steps

Upload the code above to your local or remote machine
Call the script by navigating to your favorite browser and entering the URL

Congratulations! You should now see a new generated address which you can use to send and receive ERC-20 Tokens. 