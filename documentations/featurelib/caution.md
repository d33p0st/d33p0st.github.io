---
layout: documentation
title: CAUTION!
heading: CAUTION!
parent: Featurelib
source-code: https://github.com/d33p0st/featurelib
release: ""
permalink: docs/featurelib/feature-caution/
exclude: 'true'
identifier: feature-caution
order: 6
---

## CAUTION

The Feature class uses a customized metaclass and therefore changing the metaclass to your preferable one requires it to inherit the metaclass that is being used by the `feature` class.

If you want to create your own metaclass, it must inherit from `metaclass` under `featurelib`:

```python
from featurelib.abc import metaclass

class YourMetaClass(metaclass):
    def __new__(mcls, name, bases, namespace, /, **kwargs):
        super().__new__(mcls, name, bases, namespace, **kwargs)

        # your __new__ implementation here.
```

The `metaclass` already inherits from `ABCMeta` class under the `abc` module.

**Use the navigation menu on the left to navigate.**
