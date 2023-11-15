---
Title: How to Set Up a Binance Smart Chain Node
Description: How to set up a Binance Smart Chain network node to authenticate transactions on the BSC network.
date: 2023-10-04
authors: ["Chaingateway"]
layout: post
categories: ["Blockchain", "Binance", "Nodes", "Binanace SMart Chain Node"]
tags: ["Blockchain Nodes", "Binance Network", "BSC Network", "Security", "Binance Smart Chain", “Blockchain APIs”, "Binance Node"]
image: "/assets/images/blog/2023/10/blog_10_04.png"
thumbnail: "/assets/images/blog/2023/10/blog_10_04.png"
permalink: /blog/How-to-Set-Up-a-Binance-Smart-Chain-Node/

---
BNB Smart or BSC is a blockchain working to provide an alternative and extension to the Ethereum blockchain. It achieves this via several innovative implementations made during the creation of the platform. This is a guide on how to set up a BSC node.
## Requirements
* VPS running recent versions of Mac OS X or Linux
* 3TB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms. (if starting with snap sync, it requires NVMe SSD.)
* 16 cores of CPU and 64 gigabytes of RAM
* Suggest m5zn.3xlarge instance type on AWS, c2-standard-16 on Google cloud
* A broadband Internet connection with upload/download speeds of 5 megabytes per second

## Deployment Steps
Whether you are running a Validator Node or a Witness Node, the process is similar. The recommended method is to sync from a snapshot.
### Step 1 - Download the Pre-Build Binaries
These can be accessed from the [release page](https://github.com/bnb-chain/bsc/releases/latest).
### Step 2 - Download The Config Files
Download genesis.json and config.toml by doing the following:

`wget $(curl -s https://api.github.com/repos/bnb-chain/bsc/releases/latest |grep browser_ |grep mainnet |cut -d\" -f4)`

`unzip mainnet.zip`
### Step 3 - Download Snapshot
You can find the latest chain data snapshot [here](https://github.com/bnb-chain/bsc-snapshots). Follow the guide to structure your files.
The --datadir flag should point to the folder where the extracted snapshot data is. For instance, you can create a folder named node and move the extracted snapshot data to the folder.

`mv server/data-seed/geth/chaindata node/geth/chaindata`

`mv server/data-seed/geth/chaindata node/geth/triecache`
### Step 4 - Start a Full Node
`./geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0`

Ensure that you use the version of geth download with wget above and not the local installation of geth, which could be the wrong version.
The recommended setup entails running a fast node, which is a full node with the flag --tries-verify-mode none to ensure high performance if you do not care about state consistency. You can find the details on running a fast node [here](https://docs.bnbchain.org/docs/BSC-fast-node).

`./geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none`
### Step 5 -Verify the Node Status
By default, you can monitor the log from ./node/bsc.log. When the node begins syncing, you will see this output:
You can monitor the log from ./node/bsc.log by default. When your node starts syncing, you should be able to see the following output:
t=2022-09-08T13:00:27+0000 lvl=info msg="Imported new chain segment"            
blocks=1 txs=177 mgas=17.317  
elapsed=31.131ms   
mgasps=556.259 number=21,153,429 hash=0x42e6b54ba7106387f0650defc62c9ace3160b427702dab7bd1c5abb83a32d8db dirty="0.00 B"
t=2022-09-08T13:00:29+0000 lvl=info msg="Imported new chain segment"            
blocks=1 txs=251 mgas=39.638  
elapsed=68.827ms   
mgasps=575.900 number=21,153,430 hash=0xa3397b273b31b013e43487689782f20c03f47525b4cd4107c1715af45a88796e dirty="0.00 B"
t=2022-09-08T13:00:33+0000 lvl=info msg="Imported new chain segment"            
blocks=1 txs=197 mgas=19.364  
elapsed=34.663ms   
mgasps=558.632 number=21,153,431 hash=0x0c7872b698f28cb5c36a8a3e1e315b1d31bda6109b15467a9735a12380e2ad14 dirty="0.00 B"
## Syncing From the Genesis Block
This is not recommended as it requires more powerful resources. The server should have an IOPS of at least 40k and be at least an i3/i3en series server.
### Step 1 - Write the Genesis State Locally
`./geth --datadir node init genesis.json`

Once done, you will see this output:
INFO [05-19|14:53:17.468] Allocated cache and file handles        
database=/Users/huangsuyu/Downloads/bsc/node/geth/chaindata cache=16.00MiB handles=16
INFO [05-19|14:53:17.498] Writing custom genesis block
INFO [05-19|14:53:17.501] Persisted trie from memory database nodes=21 size=56.84KiB time=357.915µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B
INFO [05-19|14:53:17.502] Successfully wrote genesis state database=chaindata hash=7d79cc…fb0d1e
INFO [05-19|14:53:17.503] Allocated cache and file handles        
database=/Users/huangsuyu/Downloads/bsc/node/geth/lightchaindata cache=16.00MiB handles=16
INFO [05-19|14:53:17.524] Writing custom genesis block
INFO [05-19|14:53:17.525] Persisted trie from memory database nodes=21 size=56.84KiB time=638.396µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B
INFO [05-19|14:53:17.528] Successfully wrote genesis state database=lightchaindata hash=7d79cc…fb0d1e
### Step 2 - Start Fullnode
## Start a Full Node
`./geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0`
## Types of Sync Mode
When running a full node, there are two sync modes. These are snap and full, which be verified by flag --syncmode.
The snap mode is used for the initial sync. It downloads the latest state instead of executing blocks from the Genesis block. When the initial sync is over, it switches to full sync.
A full sync can also be used for the initial sync, which will execute all blocks from the genesis block. However, the amount of historical data is high, and it is thus not recommended. Instead, download a snapshot from the [official repo](https://github.com/bnb-chain/bsc-snapshots) and begin the full sync using the snapshot.
If you do not provide the flag syncmode, the default sync mode will depend on the state of the data folder. It will be a snap mode if you sync from the genesis or full mode if you start from a snapshot.
## Local Private Network
To set up a local private network, refer to the [BSC-Deploy Tools](https://github.com/bnb-chain/node-deploy).
## Node Maintenance
Read [this guide](https://docs.bnbchain.org/docs/validator/node-maintenance) for node maintenance.
## Upgrade Geth
Read [this guide](https://docs.bnbchain.org/docs/upgrade-fullnode) on how to upgrade geth.
## Try Chaingateway.io
Before you get started, you should know that setting up and maintaining a BSC Network node is a complex, and difficult task. Luckily, [chaingateway.io](https://chaingateway.io) offers the perfect solution. The platform offers direct access to the blockchain, helping you skip all the hassle.
## Summary
If you follow the steps above, you can now connect to other peers to sync your node. Depending on your region, it may be easier or harder to find peers to share data to sync your chain. The process requires patience. Eventually, you will succeed. With the full node running, you can now send transactions to the blockchain for confirmation without relying on others since you can route your traffic to the node you are operating.
