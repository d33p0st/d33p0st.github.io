---
layout: documentation
title: MRO Conflicts
heading: MRO Conflicts
parent: Featurelib
source-code: https://github.com/d33p0st/featurelib
release: ""
permalink: docs/featurelib/optimize-feature-inheritance/
exclude: 'true'
identifier: optimize-feature-inheritance
order: 5
---

While dealing with multiple inheritance lanes and possibilities comes the MRO [Method Resolution Order] Conflict error and to avoid such errors while dealing with a lot of `Feature` classes the `optimize` method comes in handy.

Lets say, we have a couple of features

```python
from featurelib import feature, optimize

class Feature1(feature):
    ...

class Feature2(Feature1):
    ...

class Feature3(feature):
    ...

class Feature4(Feature3, Feature1):
    ...
```

While dealing with such jumbled inheritance order, usage of `optimize` method eliminates and warns for any potential MRO Conflicts as well as cyclic inheritance and optimizes the inheritance tree to avoid any kind of error.

```python
class Application(*optimize(Feature4, Feature2, Feature3, feature), endpoint=True):
    ... # This will be valid and wont raise any errors.
```

**Use the navigation menu on the left to navigate.**
