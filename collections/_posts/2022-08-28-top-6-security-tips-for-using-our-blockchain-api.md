---
title: 'Top 6 Security Tips for Using our Blockchain API'
description: This blog post discusses important security tips for using blockchain, including generating private keys safely, avoiding exposing private keys, signing transactions on your machine, avoiding using addresses created on Chaingateway.io Blockchain API for cold wallets, and enabling two-factor authentication.
date: 2022-08-28T16:03:17+00:00
authors: ["Chaingateway"]
layout: post
image: "/assets/images/blog/2022/08/blockchain-gb3026cdb5_1280.jpg"
thumbnail: "/assets/images/blog/2022/08/blockchain-gb3026cdb5_1280.jpg"
categories: ["Development", "Blockchain"]
tags: ["Private Blockchain", "Public Blockchain", "security"]
permalink: /blog/top-6-security-tips-for-using-our-blockchain-api/
---

Like everything else on the internet, using the blockchain for personal, and professional needs is never 100% safe and secure. Even though it’s one of the safest ways to transfer transactional and other information, there are still some steps you can take to make the process of communicating with a Blockchain API safer.

At Chaingateway.io, it’s our mission to make all transactions and connections using our Blockchain API, safe and secure. In this blog post, we’ll go over some important security tips you can implement into your daily blockchain routine, to ensure you are as safe and secure as possible.

Chaingateway has invested a lot of effort into making the provided Blockchain API as secure as possible. Furthermore, the available nodes are hosted on different machines than the API endpoint, and they have set up proxies that run in front.

## How To Generate Private Keys Safely

A private key is crucial to the blockchain’s function. A private key represents a code which enables the owner of the private key to make transactions and transfer information on the blockchain while being able to prove ownership of your holding.

To make sure your private key is private, a good thing to do is create your key while you are offline. Our API uses a node side pseudorandom method which generates private keys. This generates a new address which can be used for sending and receiving funds.

However, using this method creates a pseudorandom key, as a computer is unable to generate a truly random key.

The best way to generate private keys is offline and with a dice for example, to achieve real randomness. This process is recommended to avoid so-called hash collisions which are identical outputs for two different inputs. A hacker could potentially gain access to your wallet through a hash collision.

## Be Careful Not To Expose Private Keys

There’s a real danger and situations in which your key might be exposed and open to vulnerabilities. Storing your private key on an offline ledger, or a paper wallet is the only way to ensure that your private key is truly safe and secure.

Storing a private key for long storage, or so-called “cold storage” is best done using paper or an offline ledger. Saving the key to a mobile phone or computer that has no access to the internet is a potential vulnerability. Even a printer connected to the internet can be hacked.

Storing your private keys on devices that have no access to the internet may sound like a trivial thing, but it’s very important. In 2018, over a billion dollars were stolen from hot wallets, simply because they were stored on machines connected to the internet constantly.

Paper wallets are some of the most popular methods of storing private keys, as well as hardware wallets. A hardware wallet is a chip that is almost always offline. The biggest danger that comes from hardware wallets is the possibility of having them lost.

## Transactions Should Be Signed on Your Machine

Signing a transaction is an important part of the process that allows the information to be verified on the blockchain network. This is done through a mathematical function dependent on the details of the transaction, using your private key.

When a blockchain user is about to submit a transaction, they must prove to every user on the network that the funds they want to spend are theirs to spend. At the same time, this prevents other users from spending the very same funds. This is why the digital signature is important, as it allows for true verification of ownership of the transactional information on the blockchain.

Using the private key shows that the transactional information comes from your machine and you are the rightful owner of that transactional information. This is what the signature theoretically represents.

The most secure way to sign a transaction is to do it on your machine and only use the Chaingateway.io Blockchain API to broadcast it to the blockchain network. You can check out this [example code for signing Tron transactions](https://www.btcschools.net/tron/tron_sign_raw_data.php).

## Avoid Using Addresses Created on Chaingateway.io Blockchain API for Cold Wallets

Using Cold wallets when using deposit addresses to avoid a potential security breach for your account. An ideal place for keeping your cold wallet safe is in a fireproof safe, hidden somewhere in your home.

The benefit of having a cold wallet is being able to store a deposit address in a wallet which is not connected to the internet. Usually, a cold wallet would come with a piece of software that works alongside the wallet allowing the user access to their portfolio, without putting the portfolio at risk.

Addresses created with Chaingateway.io functions should not be used for your cold wallet. Especially the [newAddress function for Tron](https://chaingateway.io/docs-tron#newAddress) is not considered safe by us and should be avoided. The best thing you can do for security is to change the address as often as possible, and use a different address for the Chaingateway.io Blockchain API, and a different deposit address for the cold wallet.

Moving funds immediately and changing the address will greatly increase the security of your address and private key, by disabling hackers from potentially accessing a known user address. Nowadays in this day and age, having a hardware wallet is not a choice, but a necessity.

## Enable 2 Factor Authentication

This is true for all internet activities and all online accounts, no matter whether they are personal or work-related. 2 Factor Authentication is the most commonly used method of account protection and it should always be used on all accounts.

Furthermore, this method of protection is very effective as it requires the user to go through 2 steps of security and protection to access the desired account. Even though the internet is a dangerous place, many users use passwords that are very easy and simple to guess.

2FA plays a huge role in protecting the account by ensuring that only the legitimate user can access the account. After the user enters the username and password he/she will be required to provide the additional information related to the account as per the 2FA method previously set up.

## Add Your API Key as Authorization Header Within Your Request

Due to the nature of the transactional information in the blockchain, it’s a prime suspect for very skilled hackers that will do everything in their power to access accounts that aren’t theirs to manipulate data for unlawful gain.

An Authorization Request Header contains important information about the credentials of the user and uses those credentials to verify that the user trying to connect is genuine. Once the verification process is complete, the user is allowed to connect to the server.

One security tip that may prevent unwanted access and loss of transactional information is to add your API key as an authorization header within your request. For more help, [check out this section](https://chaingateway.io/docs-tron#apikey) within our documentation.

## Is Using These Measures A Necessity for a Blockchain API?

Even though the blockchain is very self by design, with the rising popularity of crypto – blockchain has become the main target of skilled hackers. No matter how secure the blockchain is by itself, taking measures to protect your portfolio can be a lifesaver.

The best approach would be to do everything listed above, to maximize the security provided by each step explained above. This will greatly increase the security of everything in your wallet and on the blockchain network.