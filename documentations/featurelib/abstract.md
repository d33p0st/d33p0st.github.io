---
layout: documentation
title: The abstract argument
heading: The abstract argument
parent: Featurelib
source-code: https://github.com/d33p0st/featurelib
release: ""
permalink: docs/featurelib/abstract-feature/
exclude: 'true'
identifier: abstract-feature
order: 3
---

The usage described in this page require knowledge of [..](../feature-class "The Feature Class Section") and therefore if you haven't read it yet, I recommend you do.

The `abstract` argument marks a feature class to behave as an abstract class (a blueprint) for creating similar type of features.

Let's say you have multiple feature that can be categorized under a simple namespace, say, `IOFeature`. Therefore to create an abstract feature class `IOFeature`,

```python
from featurelib import feature
from abc import abstractmethod

class IOFeature(feature, abstract=True):
    @abstractmethod
    def some_io_related_method(self) -> None:
        ...
```

Now, several IO related features can inherit `IOFeature` and must have `some_io_related_method` and maybe some unique methods as they require.

```python
class SomeIOFeature(IOFeature):
    def some_io_related_method(self) -> None:
        pass

    def dummy_method(self, *args, **kwargs) -> str:
        pass


class SomeOtherIOFeature(IOFeature):
    def some_io_related_method(self) -> None:
        pass
```

**Use the navigation menu on the left to navigate.**
