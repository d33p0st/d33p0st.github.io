---
layout: default
title: "Projects"
nav_order: 2
permalink: /projects/
---

# Projects
{: .no_toc }

Here is a list of my projects that I have worked on so far.
{: .fs-6 .fw-300 }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Leveraging Blockchain to counter Crypto-Ransomware

{: .note}
This project is currently under works. A prototype can be found [here][blockchain-daemon]. The project is being made using `Rust` and `Python`.


Having a blockchain in the RAM of the local-machine can help prevent crypto-ransomware (the one which targets user files, the operating system remains operational). However, This technique will also support having the blockchain in your own server rather than in the RAM for obvious security concerns.

The blockchain will contain encrypted immutable shadow copies of specific sensitive files and will be completely in the memory.

There will be a `driver program` which is responsible for launching a perpetual thread in the background (The Blockchain Program). This `Blockchain Program` will create a default blockchain (or from backup if available) and start listening on a specified port for user instructions. Note that the driver program will exit once the `Blockchain Thread` is launched. The user can interact with the `Blockchain Thread` using the `driver program` which will send instructions to the `Blockchain Thread` on the port it is listening to. Instructions include `Add - Fetch - UploadToFTP - Backup`.

- Security Concerns Addressed

  - By having a blockchain with immutable shadow copies of files to protect, It acts as a preventive measure towards crypto-ransomware.

  - User can choose to create a blockchain of desired difficulty based on their hardware and therefore improve security on capable systems.

  - During Fetching a file from the blockchain, if the user doesn't provide the exact password to decrypt it, the contents wont be decrypted as the password is only known to the user and is not stored anywhere in the filesystem or program.

  - During a ransomware attack if the user doesn't feel safe fetching the contents in the current system, there is an option to upload it to a ftp server, from which the user can download in some other system.

[GitHub][blockchain-daemon]{: .btn .fs-5 .mb-4 .mb-md-0 }

[blockchain-daemon]: https://github.com/d33p0st/blockchain-daemon