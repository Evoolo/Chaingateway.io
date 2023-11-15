---
title: 'New: NFTs and estimateGas function'
description: We are happy to announce the release of several new functions and features.
date: 2021-11-24T17:06:49+00:00
authors: ["Chaingateway"]
layout: post
categories: ["Development", "News", "Blockchain"]
tags: []
permalink: /blog/new-nfts-and-estimategas-function/
---

We are happy to announce the release of several new functions and features.

## What is a NFT?

Non Fungible Tokens (NFTs), often referred to as collectibles, are a token standard which was initially created on the Ethereum blockchain. The big difference to ERC20 tokens is the missing fungibility. While every ERC20 tokens has exactly the same details, every ERC721 token (NFT) can be different and has a unique token id.

## Which new NFT related functions are available?

**getNFTOwner**: This function allows to retrieve the owner address of a specific NFT. It requires the unique token id and token contract address.

**getNFTURI**: This function allows to retrieve the URI of a specified NFT. It takes the same parameters as the getNFTOwner function.

**sendNFT:** The sendNFT function allows to send NFTs to another address. It requires several parameters like sender address, destination address, contract address and token id.

All above described functions are available for our Ethereum API, Tron API and Binance Smart Chain API. Please check the corresponding documentation to learn how to use the new functions correctly.

## Can Chaingateway.io be used to create/mint new NFTs?

Currently we do not offer a dedicated function to mint ERC721 tokens. You can still do this by encoding the required data yourself and sending a normal transaction with the encoded data.

We plan to add a dedicated minting function, however we do not have the required testing environment. If you have an own ERC721/BEP-721/TRC721 smart contract and would be happy to assist us with testing a mint function, please get in contact with us.

## What other functions have been released?

For Ethereum and BSC we released another very useful function: **estimateGas.** The function allows to get an estimate of required gas for a specific transaction. The required parameters are the same as a usual transaction (except for password). Many users have asked us to develop a function like this and we are happy to finally release it to allow an easier gas fee calculation.

## Want to discuss new features?

We are happy to receive your feedback! Join our Telegram group and discuss your ideas.

<div class="is-layout-flex wp-block-buttons"><div class="wp-block-button is-style-fill">[Join Telegram Group](https://t.me/chaingateway)</div></div>