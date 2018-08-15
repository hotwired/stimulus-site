---
slug: /data-api
section: appendix
---

# Data API

Each Stimulus controller has a `this.data` object with `has()`, `get()`, and `set()` methods. These methods provide convenient access to `data` attributes on the controller's element, scoped by the controller's identifier.

* `this.data.has("index")` returns `true` if the controller's element has a `data-slideshow-index` attribute
* `this.data.get("index")` returns the string value of the element's `data-slideshow-index` attribute
* `this.data.set("index", index)` sets the element's `data-slideshow-index` attribute to the string value of `index`

# naming convention

If your attribute name consists of more than one word, reference it as `camelCase` in JavaScript and `attribute-case` in HTML. For example, you can read the `data-slideshow-current-class-name` attribute with `this.data.get("currentClassName")`.

# explain that it's string based
