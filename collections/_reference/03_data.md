---
slug: /data
section: appendix
---

# Data

Each Stimulus controller has a `this.data` object with `has()`, `get()`, `set()`, and `delete()` methods. These methods provide convenient access to `data` attributes on the controller's element, scoped by the controller's identifier.

```html
<div data-controller="person" data-person-full-name="Javan Makhmali">…</div>
```

* **`this.data.has("fullName")`** returns `true` if the controller's element has a `data-person-full-name` attribute or `false` if not
* **`this.data.get("fullName")`** returns the string value of the element's `data-person-full-name` attribute
* **`this.data.set("fullName", name)`** sets the element's `data-person-full-name` attribute to the string value of `name`
* **`this.data.delete("fullName")`** removes the element's `data-person-full-name` attribute and returns `true` if the element *had* the attribute or `false` if not

## Naming Conventions

Always use `camelCase` in JavaScript and `kebab-case` for HTML attributes.

## Values Are Strings

Attribute values are always `get()` and `set()` as strings. For example, `this.set("age", 1)` will convert the value `1` to `"1"`, and `this.get("age")` will return `"1"`.

### Using Other Value Types

String-only attribute values are consistent with the [HTMLElement.dataset
](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) API and DOM attributes in general, but may be surprising if you're accustomed to [jQuery's `data()` method](https://api.jquery.com/jquery.data/).

To persist values as other types, wrap the Data API with your own `get()`-and-`set()`er methods.

```html
<div data-controller="person" data-person-age="99">…</div>
```

```js
initialize() {
  console.log(this.data.get("age")) // "99"
  console.log(this.age)             // 99

  this.age = 100
  console.log(this.data.get("age")) // "100"
  console.log(this.age)             // 100
}

get age() {
  return parseInt(this.data.get("age"))
}

set age(value) {
  return this.data.set("age", value)
}
```
