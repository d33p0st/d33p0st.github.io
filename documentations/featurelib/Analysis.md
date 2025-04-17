---
layout: documentation
title: Feature Analysis
heading: Feature Analysis
parent: Featurelib
source-code: https://github.com/d33p0st/featurelib
release: ""
permalink: docs/featurelib/feature-analysis/
exclude: 'true'
identifier: feature-analysis
order: 4
---

The `Feature` class comes with additional helper methods pre-built which provides insights over the usage of `feature` abstract class for creating features.

Lets say we have some features defined:

```python
from featurelib import feature, validate, feature_info
```

```python
class Feature1(feature):
    ...

class Feature2(feature):
    ...

# and so on.
```

Now, using the inbuilt class methods:

1. `features` class method.

    Returns a comprehensive list of all available features in the entire project scope.

    ```python
    features: dict[str, type] = feature.features()
    ```

2. `dependency_graph` class method

    Returns a dependency graph of all features in the entire project scope.

    ```python
    dependency_graph: dict[str, Set[str]] = feature.dependency_graph()
    ```

3. `dependencies` class method

    Returns the set of dependencies for either the current feature or all dependencies of the current feature (direct or indirect).

    ```python
    self_dependencies = Feature1.dependencies()
    all_dependencies = Feature1.dependencies(type='all')
    ```

4. `composition_analysis` class method.

    Returns a `CompositionAnalysisResult` data class with attributes such as the feature name, it's defined methods and it's type (abstract or not).

    ```python
    print(Feature1.composition_analysis())
    ```

### The validate method

The `validate` method validates any given endpoint class for any potential errors such as illegal feature inheritance, MRO Conflicts, diamond inheritance, duplicated inheritance, and method rules and compatibility assessments. If the input is not an endpoint class will raise RuntimeError.

```python
class Application(Feature1, Feature2, endpoint=True):
    ...

validate(Application)
```

This will generate warnings for any discrepancies found.

### The feature_info method

This method returns either information on all registered features in the project scope or any particular feature.

```python
all_info = feature_info()
specific_info = feature_info(Feature1)
```

**Use the navigation menu on the left to navigate.**
