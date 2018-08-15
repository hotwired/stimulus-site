---
slug: /targets
section: appendix
---

# Targets

By marking important elements as _targets_, controllers can easily reference them through corresponding properties.

## Descriptor Syntax

```html
<div data-controller="person">
  <input type="text" data-target="person.input person.firstName">
  <input type="text" data-target="person.input person.lastName">
  <h1 data-target="person.fullName"></h1>
</div>
```

The `data-target` value `person.firstName` is called a _target descriptor_. This particular descriptor says:
* `person` is the controller identifier
* `firstName` is the target name

## Controller Syntax: The `static targets` Array

```js
// src/controllers/person_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "firstName", "lastName", "fullName" ]

  // …
}
```

When Stimulus loads your controller class, it looks for target name strings in a static array called `targets`. For each target name in the array, Stimulus adds three new properties to your controller: `this.[name]Target`, `this.has[Name]Targets`, and `this.[name]Targets`.

* `this.firstNameTarget` evaluates to the first `firstName` target in your controller's scope. If there is no `firstName` target, accessing the property throws an error.
* `this.hasFullNameTarget` evaluates to `true` if there is a `fullName` target or `false` if not.
* `this.inputTargets` evaluates to an array of all `input` targets in the controller's scope.

## naming convention: camel case property names

## difference between singular and plural and when you would want to use each

## the singular accessor raises when there is no match; `has...`
