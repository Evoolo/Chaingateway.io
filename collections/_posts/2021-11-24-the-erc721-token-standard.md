---
title: 'The ERC721 Token Standard'
date: 2021-11-24T15:24:37+00:00
description: You may have heard about Non Fungible Tokens (NFTs). The most popular NFT standard right now is ERC721. But what actually defines a ERC721 token? And how does it technically work?
authors: ["Chaingateway"]
guid: 'https://chaingateway.io/blog/?p=496'
categories: ["Development", "Blockchain"]
tags: ["knowledge", "ethereum", "nft"]
permalink: /blog/the-erc721-token-standard/
---

You may have heard about Non Fungible Tokens (NFTs). The most popular NFT standard right now is ERC721. But what actually defines a ERC721 token? And how does it technically work?

## What is ERC721?

ERC721 is a technical standard for implementing non fungible tokens in Ethereum. The functions within the ERC721 standard define how ERC721 tokens can be sent, how owners of specific tokens can be retrieved and where details about a specific token are located at.

## How to create an ERC721 token?

To create an ERC721 token, one has to create and customize the ERC721 smart contract. As it is an open defined standard, various functions and events have to be considered when developing the smart contract for an ERC721 token. After creation and customization, the smart contract can be compiled, for example with the web based compiler [Remix](https://remix.ethereum.org/). The bytecode which is returned after compiling has to be broadcasted to the Ethereum blockchain. Congratulations! The ERC20 token is on the blockchain now!

## Are there any example codes for creating ERC721 token smart contracts?

The official standard, it’s functions and events are described in the official EIP-721, [William Entriken](https://github.com/fulldecent), [Dieter Shirley](mailto:dete@axiomzen.co), [Jacob Evans](mailto:jacob@dekz.net), [Nastassia Sachs](mailto:nastassia.sachs@protonmail.com), “EIP-721: Non-Fungible Token Standard,” *Ethereum Improvement Proposals*, no. 721, January 2018. \[Online serial\]. Available: Example implementations can also be found on the Github pages of [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC721/ERC721.sol).

## What is the difference between ERC721 tokens and ERC20 tokens?

An ERC20 token is fungible, which means every token is literally the same, just like usual currencies. An ERC721 token is non fungible, which means every token can have different details, just like collectibles.

## Can gas fees be paid with ERC721 tokens instead of Ethereum?

Gas fees always have to be paid in Ethereum. Even if only ERC721 tokens are transferred, some Ethereum on the sending address is required to cover blockchain side gas fees.

## How much does it cost to create an ERC721 token?

There are 2 answers to this question:

1. If you create the smart contract on your own and deploy it, you will only need to pay the gas fees for “saving” the smart contract on the blockchain. For deploying an ERC721 token smart contract, this will be around 2 million to 3 million gas. This has to be multiplied with the current gas price to get an estimate. The latest gas price can be found on [ETH Gas Station](https://ethgasstation.info/) for example.
2. If you let a developer or development agency create your smart contract, the cost will be up to a few thousand euro exclusive gas fees as mentioned above.
3. There is also a fee to mint every token, which is sometimes paid by the token contract owner and sometimes by a user of a NFT smart contract. Minting is the initial creation of a unique token.

## Are ERC721 tokens legal?

This depends a lot on the actual usage of the token and the country of the owner. In most countries, ERC721 tokens are legal itself, but when it comes to selling, exchanging, using them as payment method or company shares further regulations and licenses are needed. ERC721 tokens may also be subject to taxes in many countries. In any case, a lawyer is recommended to check if licenses are needed for a specific usage or business model. Know your Customer (KYC) and Anti Money Laundering (AML) rules may also apply when selling ERC721 tokens.

## How to send ERC721 tokens automatically?

Usually people send cryptocurrencies by using their wallet: They will enter the receiver and the amount to be sent. But what, if you want to send ERC721 tokens to ten thousands of people? Manually doing this will take you at least 7 days 24 hours of work, this is not a good option. This is one of the reasons why we created [Chaingateway.io](https://chaingateway.io?utm_source=blog). Using the simple to use REST API of our solution, it is possible to send ERC721 tokens to millions of people with a simple script. And the best: It works with any ERC721 token and doesn’t need any listing (like most exchanges do).

## What is a contract address?

When deploying an ERC721 token smart contract, you will receive a hash, which is like the unique identifier for Ethereum to know where to find the deployed smart contract on the Ethereum blockchain. This is also known as contract address, because it is the address where the smart contract is located at. The contract address is the only part of a token which allows you to identify you are dealing with the correct ERC721 token. Of course, every ERC721 token has a name, but these don’t have to be unique. In theory, you can create ten thousand ERC721 token contracts which all have the same name – only the contract address will differ.

## Are there more popular token standards?

Other popular token standards are ERC20 – a smart contract standard for non fungible tokens. And the ERC1155 – a smart contract multi token standard. Below we link our ERC20 token explanation and a further link to the ERC1155 token standard.



[Witek Radomski](mailto:witek@enjin.io), [Andrew Cooke](mailto:ac0dem0nk3y@gmail.com), [Philippe Castonguay](mailto:pc@horizongames.net), [James Therien](mailto:james@turing-complete.com), [Eric Binet](mailto:eric@enjin.io), [Ronan Sandford](mailto:wighawag@gmail.com), “EIP-1155: ERC-1155 Multi Token Standard,” *Ethereum Improvement Proposals*, no. 1155, June 2018. \[Online serial\]. Available: <https://eips.ethereum.org/EIPS/eip-1155>.