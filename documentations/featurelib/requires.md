---
layout: documentation
title: '@requires decorator'
heading: '@requires decorator'
parent: Featurelib
source-code: https://github.com/d33p0st/featurelib
release: ""
permalink: docs/featurelib/requires-feature/
exclude: 'true'
identifier: requires-feature
order: 2
---

The `@requires` decorator has one job - To mark methods under any class inheriting from the `Feature` class as requiring some given feature. This adds an overview check for any creator or maintainer about which method requires which feature. Additionally, an internal check is performed that raises `TypeError` in case any required feature by any method was not inherited by the class containing it.

Let us see it in action.

```python
from featurelib import feature, requires
```

Once we imported the necessary classes and decorators,
Let us consider the example we used in [..](../feature-class "The Feature Class Section")

```python
class Logging(feature):
    ...

# Let us create another one for example's sake,
# It inherits from Logging feature without marking
# itself as endpoint, making it another feature.
class Reboot(Logging):
    ...
```

Let us now use it in the example implementation:

```python
class Application(Logging, endpoint=True):

    @requires(Logging) # valid
    def some_method(self) -> None:
        ...

    @requires(Logging, Reboot) # invalid
    def some_other_method(self) -> None:
        ... # this method will generate an error as Reboot was not inherited.
```

**Use the navigation menu on the left to navigate.**
