---
layout: tutorials
title: Tutorial to subscribe to ERC20 Token deposits of an Polygon address
permalink: /tutorials/nodejs-polygon-subscribe/
---

This tutorial will show you how to receive automated messages when you receive money on the selected Polygon address. The only thing needed is a Polygon address where the money will land and a URL where the notification will be sent.

1. Basic knowledge of Nodejs
2. Account at Chaingateway.io
3. A local or remote machine with NodeJs and installed axios module

#### IPN Receiver (simple example in express.js)

1. Create an nodejs web server (e.g. express) and create a secure post route (example: /B5tN-KtfOTf37)
2. Upload the following code for creating the post route
3. The code will always the send the request body to the console log as soon as the subscribed event occurs in the blockchain.  You can process deposits the way you want of course (Example: Update user balances, Mark orders as paid, …).


{% highlight javascript linenos %}

    const express = require( 'express' );
    const app = express();
    app.use( express.json() );

    app.post( '/B5tN-KtfOTf37', ( req, res ) => {
        console.log( 'received webhook', req.body );
        res.sendStatus( 200 );
    } );

    app.listen( 9000, () => console.log( 'Node.js server started on port 9000.' ) );

{% endhighlight %}


#### Subscribing to an Blockchain-Event

{% highlight javascript linenos %}
    /* 
    * Replace with your Values
    */
    var apikey = "YOURAPIKEY"; // API Key in your account panel
    var contractaddress = "CONTRACTADDRESS"; // Contract address of the token you want to watch
    var polygonaddress = "ETHEREUMADDRESS"; // Polygon address you want to watch
    var url = "https://yoururl.com/ipnreceiver"; // URL where you want to receive updates

    var axios = require('axios');
    var data = JSON.stringify({
        "contractaddress": contractaddress,
        "to": polygonaddress,
        "url": url
    });

    var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.chaingateway.io/v2/polygon/webhooks',
    headers: { 
        'Accept': 'application/json'
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
2. Replace “polygonaddress” in line 4 of above code with Contract address of the token you want to watch.
3. Replace “contractaddress” in line 5 of above code with the polygon address you want to watch.
4. Replace “https://yoururl.com/ipnreceiver.php” in line 6 of above code with the URL you want to receive updates.

#### Final Steps

1. Upload the code above to your local or remote machine
2. Call the script in your browser. For example, if you upload it to the root directory of your website, you can call it by typing yourwebsite.com/createsubscription.php
3. After a few seconds, the script will return a status showing if the request was successful.

*Congratulations!* You just created an address subscription and will receive notifications on future deposits to the provided url.