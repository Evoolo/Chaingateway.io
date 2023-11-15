---
layout: tutorials
title: Tutorial to get ERC20 or Ethereum balance of an address
permalink: /tutorials/python-ethereum-get-erc20-balance/
---

To query the balance of ERC20 tokens, you need a valid Ethereum address. With this tutorial you can easily query the balance of the respective Ethereum address. We have written a detailed tutorial for this purpose. Read more.

#### Prerequisites

1. Basic knowledge of Nodejs
2. Account at Chaingateway.io
3. A local or remote machine with Python3 and installed requests and json modules

#### The Code

{% highlight python linenos %}
    import requests
    import json

    ############################
    # Replace with your Values #
    ############################
    apikey = "YOURAPIKEY"
    ethereumaddress = "ETHEREUMADDRESS"
    contractaddress = "CONTRACTADDRESS";
    

    url = "https://api.chaingateway.io/v2/ethereum/balances/"+ethereumaddress+"/erc20/"+contractaddress

    payload={}
    headers = {
    'Accept': 'application/json',
    'Authorization': apikey
    }

    response = requests.request("GET", url, headers=headers, , data=payload)

    print(response.text)

{% endhighlight %}


#### Code Modifications

1. Replace “YOURAPIKEY” in line 6 of above code with the API Key in your Chaingateway.io Account Panel.
2. Replace "ETHEREUMADDRESS" in line 7 of above code with the Ethereum address you want to get the balance of.
3. Replace "CONTRACTADDRESS" in line 8 of above code with the smart contract address of the Token

#### Final Steps

Upload the code above to your local or remote machine

Call the script by navigating to your favorite browser and entering the URL

Congratulations! You should now see a new generated address which you can use to send and receive ERC-20 Tokens. 