---
layout: documentation
title: The Feature Class
heading: The Feature Class
parent: Featurelib
source-code: https://github.com/d33p0st/featurelib
release: ""
permalink: docs/featurelib/feature-class/
exclude: 'true'
identifier: feature-class
order: 1
---

The `Feature` class is the core object that featurelib offers. It has some special properties and rules:

- Any class meant to be a feature class must inherit from the `Feature` class.

- Any descendent of the `Feature` class no matter the depth of inheritance, cannot define the `__init__` method [as this class will contain partial implementation of some stand-alone feature separate from the main class].

- As the main class inherits the feature class [created by inheriting from the `Feature` class directly or indirectly] may or may not contain the `__init__` method, to bypass the previous mandatory rule of no `__init__` requires marking any main class or any class that should be the endpoint of implementation as an `endpoint` by passing `endpoint=True` in the class definition itself [Examples are explained below].

Now let us deep dive into it to see how it actually works and what it does in detail.

### The Feature class - Creation and related rules

To create a feature class separate from the main class, let us consider an example: You are developing an application where you need to provide the application with logging needs. Voila! there you have your first feature - Logging.

Let us create a class called `Logging` which will be a feature class. We also need to learn how to import the `feature` abstract class that `Logging` must inherit.

```python
from featurelib import feature
```

Now, onto creating the `Logging` class.

```python
class Logging(feature):
    def log(self, message, type) -> None:
        """Logs message to the terminal"""
        ...

    def log_and_exit(self, message, type, exit_code) -> None:
        """Logs a message to the terminal and exits"""
        ...

    # Must not define any __init__ method else will raise a TypeError.
    # def __init__(self) -> None: ...
```

Now, we have a feature class called `Logging` that can be inherited by the main application class for it to have access to its logging needs.

Let us create our application class. As I mentioned in the 2nd point that any descendant of the `Feature` class cannot have `__init__` implementation and inheriting the `Logging` class makes the main application class a descendant, we have to break the default behavior by marking the main application class an `endpoint`.

```python
class Application(Logging, endpoint=True):
    def __init__(self, parameters=()) -> None:
        ... # __init__ is valid here

    def some_arbitrary_method(self) -> None:
        # <-  Some code here  ->

        # < Logging Feature Access >
        self.log('This is a dummy message', 'INFO') # works like a charm.

        # <-  Some other code here  ->
```

This implementation works for all feature class definitions. However, do see [requires](../requires-feature), [abstract](../abstract-feature) and [optimize](../optimize-feature-inheritance) for a better control over your code base.

**Use the navigation menu on the left to navigate.**
