---
title: 'New: IP Whitelist'
description: Today we release a new feature which allows users to increase the security of their application.
date: 2021-06-21T14:11:11+00:00
authors: ["Chaingateway"]
layout: post
categories: ["News", "Development", "Blockchain"]
tags: ["feature"]
permalink: /blog/ip-whitelist/
---


Today we release a new feature which allows users to increase the security of their application.

## What is the IP Whitelist Feature?

This feature allows to limit API access to specified IPs. Whenever someone sends a request to our API, the IP will be validated against a set of IPs defined inside your account panel. If the IP is not allowed to access our API with your API key, the IP will be banned.

## Do I have to enable this feature?

Yes! Inside your account panel, you can see a new button “Enable Whitelist”. Once enabled, all new API requests with your API key will be validated against the list of defined IPs.

<figure class="wp-block-image size-large is-resized">![](/assets/images/blog/2021/06/image.png)</figure>## How to add new allowed IPs to the whitelist?

Once the whitelist has been enabled in your account, a new text area will appear. In this area you can write or paste new allowed IPs. Please add only one IP per line!

<figure class="wp-block-image size-large is-resized">![](/assets/images/blog/2021/06/image-1.png)</figure>## How many allowed IPs can I add?

We have set the limit to 10 IPs in total. This is a hard limit, so there are no exceptions.

## What happens if I connect to the API with a not listed IP?

If you enabled the whitelist feature but didn’t add your IP, you will receive an error and the attempt will be logged. After a few attempts, your IP will be banned for several minutes.

## Questions?

Use the contact options below to contact us. We are happy to help!