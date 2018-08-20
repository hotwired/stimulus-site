---
permalink: /handbook/targets
nav_group: reference
nav_order: 03
---

# Targets

By marking important elements as _targets_, controllers can easily reference them through corresponding properties.

## Descriptors

```html
<div data-controller="person">
  <input type="text" data-target="person.fullName person.input">
  <input type="text" data-target="person.emailAddress person.input">

  <p data-target="person.display"></p>
</div>
```

The `data-target` value `person.fullName` is called a _target descriptor_. This particular descriptor says:
* `person` is the controller identifier
* `fullName` is the target name

## Definitions

When Stimulus loads your controller class, it looks for target name strings in a static array called `targets`.

```js
// src/controllers/person_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "fullName", "emailAddress", "input", "display" ]

  // …
}
```

### Target Properties

For each target name in the `static targets` array, Stimulus adds three new properties to your controller.

* `this.`**`name`**`Target` evaluates to the first matching target in your controller's scope. If there is no element, accessing the property throws an error.
* `this.`**`name`**`Targets` evaluates to an array of all matching targets in the controller's scope.
* `this.has`**`Name`**`Target` evaluates to `true` if there is a matching target or `false` if not.

## Naming Conventions

Always use camelCase for target names so they map cleanly to JavaScript controller properties.

A kebab-case target name like `data-target="person.email-address"` would map to `this["email-addressTarget"]`, which is far less readable than `this.emailAddressTarget`.

## Optional Targets

Singular `this.`**`name`**`Target` properties assume the corresponding target element *should* be present and will throw an error if not. For targets that may or may not be present *by design*, always use `this.has`**`Name`**`Target` before accessing `this.`**`name`**`Target`.

## Examples

```js
initialize() {
  // Focus the *first* input target initially
  this.inputTarget.focus()
}

update() {
  if (this.emptyInputTarget) {
    // If there's an empty input target, focus it
    this.emptyInputTarget.focus()
  } else {
    // Otherwise, render the display target
    this.render()
  }
}

render() {
  // Consider the display target optional
  if (this.hasDisplayTarget) {
    this.displayTarget.textContent = this.nameWithEmailAddress
  }
}

get emptyInputTarget() {
  // Find the first input target with no value, if any
  return this.inputTargets.find(target => !target.value)
}

get nameWithEmailAddress() {
  const name = this.fullNameTarget.value
  const email = this.emailAddressTarget.value
  return `${name} (${email})`
}
```
