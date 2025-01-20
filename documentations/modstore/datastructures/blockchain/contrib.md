---
layout: documentation
title: Contribution
heading: Contribute to BlockChain
parent: blockchain-modstore
source-code: https://github.com/d33p0st/modstore
release: ""
permalink: docs/modstore/data-structures/blockchain/contrib/
exclude: 'true'
identifier: blockchain-contrib-modstore
order: 2
---

To contribute to BlockChain class and it's working, you need to know:

- [Rust Programming Language](https://www.rust-lang.org).
- [Python Programming Language](https://www.python.org).
- [pyo3](https://crates.io/crates/pyo3) crate of rust.
- [maturin](https://pypi.org/project/maturin/) library of python.

If the requirements are met, fork the repository, clone it and create a new branch:

<pre data-language="shell" class="language-shell">
<code>
git clone https://github.com/your-username-here/modstore.git
git checkout -b 'feature-name'
</code>
</pre>


Make sure you add descriptive commit messages. To push them:


<pre data-language="shell" class="language-shell">
<code>
git push -u origin 'feature-name'
</code>
</pre>

After that create a pull request and I will look into it.

Requirements to be installed:

Make sure you have python and rust installed.

<pre data-language="shell" class="language-shell">
<code>
pip install maturin
</code>
</pre>

The files that you need to be concerned with:

- '[src/blockchain.rs](https://github.com/d33p0st/modstore/blob/main/src/blockchain.rs)' for changing internal blockchain working logic.
- '[src/lib.rs](https://github.com/d33p0st/modstore/blob/main/src/lib.rs)' for changing any module specific feature. This file incorporates both BlockChain and DAG inside a binary called `_binaries`.
- '[pysrc/_binaries.pyi](https://github.com/d33p0st/modstore/blob/main/pysrc/modstore/_binaries.pyi)' for defining any changed feature's type declaration. Note that when the library is built using maturin, a `binaries.so` will be created. The `binaries.pyi` file is the static type declaration file for the same. The `binaries.so` file is os-dependent and therefore make sure you don't push it to git. It is supposed to be built during wheel generation and is not needed as it is a bin file and not source code.
- '[pysrc/rust/blockchain.py](https://github.com/d33p0st/modstore/blob/main/pysrc/modstore/rust/blockchain.py)' for adding the changes in the wrapper class that will be used by the user. This file contains a wrapper class so that the user does not have to interact with the rust binary directly. Instead the user deals with a safely designed structure.