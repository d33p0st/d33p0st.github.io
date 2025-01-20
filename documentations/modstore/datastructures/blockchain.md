---
layout: documentation
title: BlockChain
heading: BlockChain
parent: data-structures-modstore
source-code: https://github.com/d33p0st/modstore
release: ""
permalink: docs/modstore/data-structures/blockchain/
exclude: 'true'
identifier: blockchain-modstore
---

The blockchain data structure is powered by Rust backend and brings speed and reliability with it. As the basic need for a blockchain is to be tamper-resistant and decentralized, the `BlockChain` class provides all of them along with a proof-of-work concept implemented using an integer difficulty factor.

### Difficulty Factor

The `BlockChain` class' difficulty factor defines the number of leading zeroes each block's hash must have for it to be accepted into the chain. This algorithm updates the block's nonce to obtain an acceptable block hash. Therefore, for someone to tamper the blockchain, they have to not only change contents of a block but also apply this algorithm to each block (that comes after the tampered block including itself).

A higher difficulty factor makes it more computationally expensive to find a valid hash, thereby regulating the time between block generations and maintaining the security of the blockchain. During the mining process (`mine` method (internal)), the block repeatedly computes its hash until the hash contains difficulty factor times zeroes. This process involves trial and error, and the number of iterations needed depends on the difficulty factor.