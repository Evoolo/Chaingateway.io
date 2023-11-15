---
layout: tutorials
title: Tutorial to subscribe to ERC20 Token deposits of an Polygon address
permalink: /tutorials/python-polygon-subscribe/
---

This tutorial will show you how to receive automated messages when you receive money on the selected Polygon address. The only thing needed is a Polygon address where the money will land and a URL where the notification will be sent.

1. Basic knowledge of Nodejs
2. Account at Chaingateway.io
3. A local or remote machine with Python3 and installed requests and json modules

#### IPN Receiver (simple example in express.js)

1. Create an python web server (e.g. flask) and create a secure post route (example: /B5tN-KtfOTf37)
2. Upload the following code for creating the post route
3. The code will always the send the request body to the console log as soon as the subscribed event occurs in the blockchain.  You can process deposits the way you want of course (Example: Update user balances, Mark orders as paid, …).


{% highlight py linenos %}

    from flask import Flask,request,json

    app = Flask(__name__)

    @app.route('/B5tN-KtfOTf37',methods=['POST'])
    def webhookreceiver():
    data = request.json
    print(data)
    return data

{% endhighlight %}

run it with ´´´python3 YOURFILENAME.py´´´


#### Subscribing to an Blockchain-Event
{% highlight python linenos %}
    import requests
    import json

    ############################
    # Replace with your Values #
    ############################
    apikey = "YOURAPIKEY"; # API Key in your account panel
    contractaddress = "CONTRACTADDRESS"; # Contract address of the token you want to watch
    polygonaddress = "POLYGONADDRESS"; # Polygon address you want to watch
    yoururl = "https://yoururl.com/ipnreceiver"; # URL where you want to receive updates

    
    url = "https://api.chaingateway.io/v2/polygon/webhooks"

    payload = json.dumps({"contract": contractaddress, "to": polygonaddress, "url": yoururl})

    headers = {
    'Accept': 'application/json',
    'Authorization': apikey
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)


{% endhighlight %}



#### Code Modifications

1. Replace “YOURAPIKEY” in  above code with the API Key in your Chaingateway.io Account Panel.
2. Replace “POLYGONADDRESS” in  above code with Contract address of the token you want to watch.
3. Replace “CONTRACTADDRESS” in  above code with the polygon address you want to watch.
4. Replace “https://yoururl.com/ipnreceiver” in above code with the URL you want to receive updates.

#### Final Steps

1. Upload the code above to your local or remote machine
2. Call the script for subscribing to your event
3. After a few seconds, the script will return a status showing if the request was successful.

*Congratulations!* You just created an address subscription and will receive notifications on future deposits to the provided url.