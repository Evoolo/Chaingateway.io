---
title: 'The ERC20 Token Standard'
description: You read it everywhere, even on our site. ERC20 tokens are here to stay and the most popular fungible token standard right now. But what actually defines an ERC20 token? And how does it technically work?
date: 2021-06-24T18:53:29+00:00
authors: ["Chaingateway"]
layout: post
categories: ["Development", "Blockchain"]
tags: ["knowledge", "ethereum", "tokens"]
permalink: /blog/the-erc20-token-standard/
---

You read it everywhere, even on our site: ERC20 tokens are here to stay and the most popular fungible token standard right now. But what actually defines an ERC20 token? And how does it technically work?

## What is ERC20?

ERC20 is a technical standard for implementing tokens in Ethereum. The functions within the ERC20 standard define how ERC20 tokens can be sent, how balances can be checked and general token details like name, symbol and max suplly.

## How to create an ERC20 token?

To create an ERC20 token, one has to create and customize the ERC20 smart contract. As it is an open defined standard, various functions and events have to be considered when developing the smart contract for an ERC20 token. After creation and customization, the smart contract can be compiled, for example with the web based compiler [Remix](https://remix.ethereum.org/). The bytecode which is returned after compiling has to be broadcasted to the Ethereum blockchain. Congratulations! The ERC20 token is on the blockchain now!

## Are there any example codes for creating ERC20 token smart contracts?

The official standard, it’s functions and events are described in the official EIP-20, [Fabian Vogelsteller](mailto:fabian@ethereum.org), [Vitalik Buterin](mailto:vitalik.buterin@ethereum.org), “EIP-20: ERC-20 Token Standard,” *Ethereum Improvement Proposals*, no. 20, November 2015. \[Online serial\]. Available: <https://eips.ethereum.org/EIPS/eip-20>. Example implementations can also be found on the Github pages of [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20/ERC20.sol) and [ConsenSys](https://github.com/ConsenSys/Tokens/blob/fdf687c69d998266a95f15216b1955a4965a0a6d/contracts/eip20/EIP20.sol).

## What is the difference between ERC20 tokens and Ethereum?

Ethereum is the native currency of the Ethereum blockchain. ERC20 tokens are based on smart contracts which run on the Ethereum Virtual Machine (EVM). The standardization of tokens allows an universal use within other applications like wallets and exchanges.

## Can gas fees be paid with ERC20 tokens instead of Ethereum?

Gas fees always have to be paid in Ethereum. Even if only ERC20 tokens are transferred, some Ethereum on the sending address is still required to cover blockchain side gas fees.

## How much does it cost to create an ERC20 token?

There are 2 answers to this question:

1. If you create the smart contract on your own and deploy it, you will only need to pay the gas fees for “saving” the smart contract on the blockchain. For deploying an ERC20 token smart contract, this will be around 2 million to 3 million gas. This has to be multiplied with the current gas price to get an estimate. The latest gas price can be found on [ETH Gas Station](https://ethgasstation.info/) for example.
2. If you let a developer or development agency create your smart contract, the cost will be up to $1000 exclusive gas fees as mentioned above.

## Are ERC20 tokens legal?

This depends a lot on the actual usage of the token and the country of the owner. In most countries, ERC20 tokens are legal itself, but when it comes to selling, exchanging, using them as payment method or company shares further regulations and licenses are needed. ERC20 tokens may also be subject to taxes in many countries. In any case, a lawyer is recommended to check if licenses are needed for a specific usage or business model. Know your Customer (KYC) and Anti Money Laundering (AML) rules also apply when selling ERC20 tokens.

## How to send ERC20 tokens automatically?

Usually people send cryptocurrencies by using their wallet: They will enter the receiver and the amount to be sent. But what, if you want to send ERC20 tokens to ten thousands of people? Manually doing this will take you at least 7 days 24 hours of work, this is not a good option. This is one of the reasons why we created [Chaingateway.io](https://chaingateway.io?utm_source=blog). Using the simple to use REST API of our solution, it is possible to send ERC20 tokens to millions of people with a simple script. And the best: It works with any ERC20 token and doesn’t need any listing (like most exchanges do).

## How to get ERC20 token balance of a specific address?

For getting the ERC20 token balance of an address, you can use block explorers like [Etherscan](https://etherscan.io/). Just open the site, enter the ethereum address you want to check the balance of, and Etherscan will give you a full overview of the tokens an individual address is holding. You may ask how to automate this work, for example to integrate your own ERC20 token as a payment method in your site. The answer is again [Chaingateway.io](https://chaingateway.io?utm_source=blog). Using our solution, you can even set up a notification script which allows you to receive and process deposits fully automated.

## What is a contract address?

When deploying an ERC20 token smart contract, you will receive a hash, which is like the unique identifier for Ethereum to know where to find the deployed smart contract on the Ethereum blockchain. This is also known as contract address, because it is the address where the smart contract is located at. The contract address is the only part of a token which allows you to identify you are dealing with the correct ERC20 token. Of course, every ERC20 token has a name and symbol, but these don’t have to be unique. In theory, you can create ten thousand ERC20 tokens which all have the same name and symbol – only the contract address will differ.

## Are there more popular token standards?

Other popular token standards are ERC721 – a smart contract standard for non fungible tokens. And the ERC1155 – a smart contract multi token standard. There may be other articles soon about these standards and their particularities. Until that, you can refer to their official EIPs:

[William Entriken](mailto:github.com@phor.net), [Dieter Shirley](mailto:dete@axiomzen.co), [Jacob Evans](mailto:jacob@dekz.net), [Nastassia Sachs](mailto:nastassia.sachs@protonmail.com), “EIP-721: ERC-721 Non-Fungible Token Standard,” *Ethereum Improvement Proposals*, no. 721, January 2018. \[Online serial\]. Available: <https://eips.ethereum.org/EIPS/eip-721>.

[Witek Radomski](mailto:witek@enjin.io), [Andrew Cooke](mailto:ac0dem0nk3y@gmail.com), [Philippe Castonguay](mailto:pc@horizongames.net), [James Therien](mailto:james@turing-complete.com), [Eric Binet](mailto:eric@enjin.io), [Ronan Sandford](mailto:wighawag@gmail.com), “EIP-1155: ERC-1155 Multi Token Standard,” *Ethereum Improvement Proposals*, no. 1155, June 2018. \[Online serial\]. Available: https://eips.ethereum.org/EIPS/eip-1155.