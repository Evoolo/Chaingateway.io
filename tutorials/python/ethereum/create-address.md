---
layout: tutorials
title: Ethereum Tutorial to create addresses with NodeJs
permalink: /tutorials/python-ethereum-create-address/
---

When sending or receiving ERC-20 Tokens, you need an address which is compatible with the Ethereum Blockchain. Of course, most people are using their wallets to create valid addresses. But what if you need to create hundreds of thousands of addresses for your users? Or create deposit addresses automatically whenever one of your users wants to pay you? In this case, you will need a better way of generating addresses in an automated and easy way. We have written an extensive tutorial for that. Keep on reading.

#### Prerequisites

1. Basic knowledge of Python
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
    password = "YOURPASSWORD"
    

    url = "https://api.chaingateway.io/v2/ethereum/addresses"

    payload = json.dumps({'password': password})

    headers = {
    'Accept': 'application/json',
    'Authorization': apikey
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)


{% endhighlight %}



#### Code Modifications

1. Replace “YOURAPIKEY” in line 3 of above code with the API Key in your Chaingateway.io Account Panel.
2. Replace “PASSWORD” in line 4 of above code with a very secure password (at least 12 characters alphanumeric of different case). Don’t lose this password as you can’t recover it!

#### Final Steps

Upload the code above to your local or remote machine
Call the script by navigating to your favorite browser and entering the URL

Congratulations! You should now see a new generated address which you can use to send and receive ERC-20 Tokens. 