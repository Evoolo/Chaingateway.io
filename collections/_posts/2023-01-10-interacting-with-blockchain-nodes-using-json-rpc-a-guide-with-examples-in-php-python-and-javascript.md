---
title: 'Interacting with Blockchain Nodes using JSON-RPC'
description: Learn how to use JSON-RPC, a lightweight protocol that allows for the transmission of data between a client and a server, to interact with blockchain nodes with example code in PHP, Python, and JavaScript.
date: 2023-01-10T14:57:03+00:00
authors: ["Chaingateway"]
layout: post
image: "/assets/images/blog/2023/01/Interacting-with-Blockchain-Nodes-using-JSON-RPC-A-guide-with-examples-in-PHP-Python-and-JavaScript.png"
thumbnail: "/assets/images/blog/2023/01/Interacting-with-Blockchain-Nodes-using-JSON-RPC-A-guide-with-examples-in-PHP-Python-and-JavaScript.png"
categories: ["Development", "Blockchain"]
tags: ["blockchain", "development"]
permalink: /blog/interacting-with-blockchain-nodes-using-json-rpc-a-guide-with-examples-in-php-python-and-javascript/
---

JSON-RPC is a remote procedure call (RPC) protocol encoded in JSON. It is a light-weight protocol that allows for the transmission of data between a client and a server, in this case, a blockchain node. JSON-RPC is typically used to interact with decentralized systems, such as blockchain networks, and can be used to send transactions, query the blockchain for information, and manage accounts on the network.

In this article, we will explore the basics of JSON-RPC and how it can be used to interact with blockchain nodes. We will also provide example code in PHP, Python, and JavaScript to help you get started.

## What is JSON-RPC?

JSON-RPC is a remote procedure call protocol that uses JSON to encode its calls and responses. It is designed to be light-weight and easy to implement, making it a popular choice for interacting with decentralized systems like blockchain networks.

The JSON-RPC protocol defines a number of commands, or “methods,” that can be used to interact with the blockchain node. These methods include sending transactions, querying the blockchain for information, and managing accounts on the network.

## How to use JSON-RPC to interact with blockchain nodes

To use JSON-RPC to interact with a blockchain node, you’ll first need to set up a connection to the node. The connection can be established using various library in different programming languages like HTTP, WebSockets etc.

Once the connection is established, you can begin sending JSON-RPC requests to the blockchain node. The requests take the form of JSON objects, and include a “method” field, which specifies the action to be taken, and a “params” field, which contains any additional information needed to complete the request.

The response will also be in JSON format, it will include a “result” field, which contains the result of the request, and an “error” field, which will contain any error messages that may have occurred.

Here is an example of a JSON-RPC request to get the current block number on the Ethereum blockchain:

```
<pre class="wp-block-code">```
`{  "jsonrpc": "2.0",  "method": "eth_blockNumber",  "params": [],  "id": 1}`
```
```

And the response will look like this

```
<pre class="wp-block-code">```
`{    "jsonrpc": "2.0",    "id": 1,    "result": "0x4b7"}`
```
```

## Example code in PHP, Python and JavaScript

Here is an example of how to send a JSON-RPC request using the PHP `curl` library:

```
<pre class="wp-block-code">```
`<?php    $curl = curl_init();    curl_setopt($curl, CURLOPT_URL, 'http://localhost:8545');    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);    curl_setopt($curl, CURLOPT_POST, true);    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($request));    $response = curl_exec($curl);    curl_close($curl);    var_dump($response);?>`
```
```

Here is an example of how to send a JSON-RPC request using the Python `requests` library:

```
<pre class="wp-block-code">```
import requests headers = {'content-type': 'application/json'}
data = '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
response = requests.post('http://localhost:8545', headers=headers, data=data)

print(response.json())
```
```

And here is an example of how to send a JSON-RPC request using the JavaScript `fetch` function:

```
<pre class="wp-block-code">```
fetch('http://localhost:8545',{
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({
 jsonrpc: '2.0',
 method: 'eth_blockNumber',
 params: [],
 id: 1
 })
})
 .then(response => response.json())
 .then(console.log)
 .catch(console.error);
```
```

It’s worth noting that above examples are simple GET requests to get the current block number on ethereum blockchain, you can use various different methods to achieve other tasks like sending transactions, creating accounts and much more.

By understanding the basics of JSON-RPC and how it can be used to interact with blockchain nodes, you’ll be able to create decentralized applications that can take advantage of the security and immutability offered by blockchain technology. With the help of the example code provided, you’ll be able to send JSON-RPC requests to a blockchain node with ease and start building your own decentralized application.
