---
layout: documentation
title: Usage
heading: BlockChain Usage
parent: blockchain-modstore
source-code: https://github.com/d33p0st/modstore
release: ""
permalink: docs/modstore/data-structures/blockchain/usage/
exclude: 'true'
identifier: blockchain-usage-modstore
order: 1
---

### Import the BlockChain class

<pre data-language="python" class="language-python">
<code>
from modstore.datastructures import BlockChain
</code>
</pre>

### Create a blockchain

To create a blockchain, we have to provide two parameters: difficulty (int) and timezone (for timestamps). The timezone parameter takes either 'UTC' and 'IST' string literals or a pattern in the form 'HH:MM:SS' defining the hours, minutes and seconds to be added to UTC time to get your required timezone.

<pre data-language="python" class="language-python">
<code>
blockchain = BlockChain(difficulty=10, timezone='IST')
</code>
</pre>

At this point, the blockchain is ready with a genesis block as a placeholder for all other blocks to connect to. The genesis block does not have any content in it.

### Add a block in the blockchain

For adding a block, we need two parameters: `uniqueIdentifier` (str) which uniquely identifies the block and `data` which can be any python object or string or bytes.

Internally, unless the `data` is string or bytes, all objects will be forcefully converted to bytes using `pickle` module.

<pre data-language="python" class="language-python">
<code>
# the data being used is a list of integers (object)
blockchain.addBlock(uniqueIdentifier='block-1', data=[1, 2, 3, 4])
</code>
</pre>

### Search for a block using its identifier and get the concerned block

Note that if the block is found, it will be returned as `Block` type. This is an internal type to represent a block within the blockchain and its sole purpose is to act as a return type for `search` method. Outside this, `Block` class object cannot exist.

<pre data-language="python" class="language-python">
<code>
# we will use the identifier we set during adding a block
first_block = blockchain.search(identifier='block-1')
</code>
</pre>

This `first_block` variable is of the type `Block` and has a few properties that can be used to get information about this block.

<pre data-language="python" class="language-python">
<code>
# index of the block
index = first_block.index

# timestamp of creation
timestamp = first_block.timestamp

# identifier of the block
identifier = first_block.identifier

# previous block's hash (in this case the previous block is the genesis block)
previous_hash = first_block.previous_hash

# hash of the block
_hash = first_block.hash

# the contents of the block
contents = first_block.data()
# Note that this will return the value in bytes if the original data given
# was an object or bytes and str if the original data was str.

# to get the original data as it is
contents = first_block.data(return_original=True) # [1, 2, 3, 4] as we added.
</code>
</pre>

### Get a list of identifiers of blocks that are currently in the blockchain

<pre data-language="python" class="language-python">
<code>
identifiers = blockchain.identifiers() # returns ['block-1'] as of now..
</code>
</pre>

### Validity of the blockchain and length

Validity means tamper free and consistent according to the difficulty factor set.

<pre data-language="python" class="language-python">
<code>
if blockchain.valid:
    print('blockchain is valid')
else:
    print('someone tampered with the internal mechanism.')
    print('current blockchain length:', blockchain.length)
</code>
</pre>

### Printing the blockchain

<pre data-language="python" class="language-python">
<code>
print(blockchain)

# or in the python shell:
>>> blockchain
</code>
</pre>