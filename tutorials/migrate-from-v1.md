---
layout: tutorials
title: Migrate from V1
permalink: /tutorials/migrate-from-v1/
description: 'Tutorials for our chaingateway.io api to migrate your code from V1 to V2 version from our api'
---

Welcome to the tutorial section. Here we want to show you all necessary steps you need to do to migrate your api from V1 to V2. 

### Create a new accout on V2

Since we have increased the security of Chaingateway, you will need to create a new account in our new app. To do this, go to [app.chaingateway.io/register](https://app.chaingateway.io/register) and create a new account (if you haven't already done so). 

### Authentication

After that you should create an Api Key for the V2. To do this, go to "API Keys" in the dashboard and create a new key.
[app.chaingateway.io/account/apiKeys](https://app.chaingateway.io/account/apiKeys)

<p><img src="/tutorials/auth.jpg" alt="Authentication"  width="100%"> </p>


In our v2 api you need to give your api Key in the 'Authorization' header with every request. as mentioned here: [Authorization](https://app.chaingateway.io/tutorials)

### Cancel your old plan and create a new one (optional)

Now, cancel your plan in V1 and create a new one in V2. You only have to do this if you have a paid subscription in Chaingateway V1. If you are a FREE customer, you will be a FREE Customer in V2 automatically. 

You can cancel your old plan at [v1.chaingateway.io/account](https://v1.chaingateway.io/account) <br>
You can create a new subscription at [app.chaingateway.io/subscription](https://app.chaingateway.io/subscription)

### Migrate your addresses from V1 to V2

For migrating your addresses we created an migration tool. You can access it from the sidebar in the new Dashboard or with this Link: [app.chaingateway.io/migration](https://app.chaingateway.io/migration)

Simply fill your old V1 Api Key to the form and hit the button, your addresses will automatically be imported to your new profile. 

The Success message shows you how many addresses are imported for Ethereum and BSC. It also tells you if addresses are ignored because they were imported once before. This means you can run this script as often as you want and it will always import newly created addresses from V1. 

<p><img src="/tutorials/migration.png" alt="migrating your addresses" width="100%"> </p>

you find our new docs here: [docs.chaingateway.io](https://docs.chaingateway.io)

### Update the routing

In our new api we only provide one endpoint for all blockchains. So you need to update your routes according to this table: 

<table class="table text-white">
    <tr>
        <th>Old V1 route  </th>
        <th>New V2 route </th>
    </tr>

    <tr>
        <td>https://eu.eth.chaingateway.io</td>
        <td>https://api.chaingateway.io/v2/ethereum/ </td>
    </tr>
    <tr>
        <td>https://eu.bsc.chaingateway.io</td>
        <td>https://api.chaingateway.io/v2/bsc/ </td>
    </tr>
    <tr>
        <td>https://eu.trx.chaingateway.io</td>
        <td>https://api.chaingateway.io/v2/tron/</td>
    </tr>

</table>


### Adapt your code to our new schema

Since we have made many changes in our API regarding changes to be REST Compliant, you will need to adjust all your Api methods. 

For this you can use our new Api Docs. It also provides examples for countless languages. For this you just need to select your language in the header and you will automatically get code samples. For some use cases we have provided tutorials for PHP, Python and NodeJs. 

<p><img src="/tutorials/docs.jpg" alt="Update the routing"  width="100%"> </p>

### Ask for Help

If you need help with your migration, you cal always ask for help here: 

1. [Telegram support bot](https://t.me/ChaingatewaySupportBot)
2. [Telegram community group](https://t.me/ChaingatewaySupportBot)
2. [Email support](mailto:support@chaingateway.io)