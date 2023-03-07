---
layout: tutorials
title: Tutorial to send Ethereum or ERC20 Tokens with Python
permalink: /tutorials/python-ethereum-send-erc20-tokens
---

To send or receive ERC-20 tokens, you need an address that is compatible with the Ethereum blockchain. Of course, most people use their wallets to send ERC20 tokens. But what if you need to make hundreds of thousands of transactions? In this case, you need a better way to send ERC20 tokens in an automated way. We have written a detailed tutorial for this purpose. Read more.

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
    apikey = "YOURAPIKEY"; # API Key in your account panel
    contractaddress = "CONTRACTADDRESS"; # Smart contract address of the Token
    from = "SENDERADDRESS"; # Ethereum address you want to send from (must have been created with Chaingateway.io)
    to = "RECEIVERADDRESS"; # Receiving ethereum address
    password = "PASSWORD"; # Password of the ethereum address (which you specified when you created the address)
    amount = 55.89; # Amount of Tokens to send
    

    
    url = "https://api.chaingateway.io/v2/ethereum/transactions/erc20"

    payload = json.dumps({"contractaddress": contractaddress, "from": from,"to": to,"password": password, "amount": amount})

    headers = {
    'Accept': 'application/json',
    'Authorization': apikey
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)


{% endhighlight %}


#### Code Modifications

Replace “YOURAPIKEY” of above code with the API Key in your Chaingateway.io Account Panel.
Replace “CONTRACTADDRESS”  with the smart contract address of the Token.
Replace “SENDERADDRESS”  with the ethereum address you want to send from.
Replace “RECEIVERADDRESS”  with the receiving ethereum address
Replace “PASSWORD”  with your password of the ethereum address, which you specified when you created the address.
Replace “55.89”  with the amount of Tokens you want to send.

#### Final Steps

1. Upload the code above to your local or remote machine
2. Call the script by navigating to your favorite browser and entering the URL. For example, if you upload it to the root directory of your website, you can call it by typing yourwebsite.com/name-of-the-above-code.php
3. After a few seconds, the script will return a transaction id (which means the transaction has been sent successfully). You can lookup this transaction id for example on Etherscan.

Congratulations! You just sent ERC20 Tokens using Chaingateway.io. Wasn’t that hard, right?