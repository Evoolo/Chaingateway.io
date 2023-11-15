---
Title: How to Set Up a Tron Node
Description: How to set up a Tron Network node to help authenticate transactions on the Tron Blockchain Network.
date: 2023-10-16
authors: ["Chaingateway"]
layout: post
categories: ["Blockchain", "Tron", "API", "Tron Node", "Web3"]
tags: ["Blockchain APIs", "Blockchain Nodes", "Tron Network", "Security", "Web3", "Tron Node", "Tron Blockchain"]
image: "/assets/images/blog/2023/10/blog_10_16.png"
thumbnail: "/assets/images/blog/2023/10/blog_10_16.png"
permalink: /blog/How-to-Set-Up-a-Tron-Node/

---
Tron is a blockchain platform working on creating a decentralized global digital content entertainment system. The Tron network relies on nodes spread throughout the world to validate transactions and maintain the security of the network. Here are the steps to set up a Tron Node.
## Requirements
* The Tron Node can be set up on Linux or MacOS.
* The recommended configuration is:
* Recommended Configuration
* CPU：16 cores
* RAM：32G
* SSD：2.5T+
* Bandwidth：100M
* the recommended configuration for creating a full node for block production is as follows:
* CPU：32 cores
* RAM：64G

## Deployment Steps
No matter the type of node, the deployment process is the same:
### Step 1 - Install Tools and Dependencies
You will require Oracle JDK 1.8 and git
### Step 2 – Download the Tron Full Node
The next step is to download the full node. You can obtain the FullNode.jar by compiling the source code or by downloading [the released jar](https://github.com/tronprotocol/java-tron/releases) directly.
### Step 3 – Start the Node
In this step, you must first get the mainnet configure file: [main_net_config.conf](https://github.com/tronprotocol/tron-deployment/blob/master/main_net_config.conf). You can find other network configuration files [here](https://github.com/tronprotocol/tron-deployment).
The full node contains the full historical data and acts as the entry point into the Tron Network. It provides HTTP APIL and Grpc API for external query. Using the fullnode, you can interact with the Tron Network. For instance, you can deploy contracts, interact with contracts, transfer assets, and more.
The startup command for the mainnet fullnode is detailed below. The -c parameter specifies the configuration file of the fullnode.

`$ java -Xmx24g -XX:+UseConcMarkSweepGC -jar FullNode.jar -c main_net_config.conf`

-XX:+UseConcMarkSweepGC ：Specifies parallel garbage collection. To be placed before the -jar parameter, not at the end.
-Xmx ：The maximum value of the JVM heap, which can be set to 80% of the physical memory.
To start up a fullnode that can produce blocks for the mainnet, you should add the --witness parameter to the startup command; fullnode will run as a node that produces blocks. Besides supporting all functions of fullnode, the block-producing fullnode also supports block production and transaction packaging.
Ensure you have a super representative account and receive votes from others. If the votes rank in the top 27, you will have to start a fullnode that can produce blocks to begin block production.
You will also need to fill in the private key of the super representative address into the localwitness list in the main_net_config.conf. Alternatively, you can use the keystore + password method if you do not want to specify the private key in plain text. Here is how to do it. Once you do that, run this command to start the node:

`$ java -Xmx24g -XX:+UseConcMarkSweepGC -jar FullNode.jar --witness -c main_net_config.conf`

Due to the size of the mainnet and nile testnet, it will take some time for the data to be synchronized. You can use [Data Snapshots](https://developers.tron.network/docs/main-net-database-snapshots) to speed up the process. To do this, you will need to download the latest data snapshot and extract it to the output-directory directory of the Tron project. You can then start the node that it synchronizes using the data snapshot.
To shut down the fullnode, you can use the command `kill -15 process id`.
### Step 4- Verify the Full Node
Once a node is synced, you can verify its status using the Tron Grid API. Run this command in a new terminal window:
tron-grid status
It will return information about the node, including the block height and the version of the software. Once that is done, you are now a successful operator of a Tron Network full node.
## Try Chaingateway.io
Setting up and maintaining a Tron Network node can be a lot of work. It is complex, and difficult to master. However, [Chaingateway.io](https://chaingateway.io) has the perfect solution. The platform offers direct access to the Tron blockchain without all the complexity.
## Summary
Running a full node requires huge resources, including storage space and bandwidth. You also have to keep the node updated with the latest software releases to ensure it works properly and is secure. Running a node is crucial for developers who want to build on Tron or take part in the consensus mechanism. Using the steps above, you should be well on your way to setting up a full node and interaction with the Blockchain.
