---
slug: /controllers
section: appendix
---

# Controllers

A _controller_ is the basic organizational unit of a Stimulus application.

Each controller is a JavaScript object which belongs to two other objects:

* a Stimulus `Application` instance
* an HTML element

## Classes

Controllers are instances of JavaScript classes that you define in your application.

Each controller class inherits from the `Controller` base class exported by the `stimulus` module.

Within a controller class, you can access the controller's:

* application, via the `this.application` property
* HTML element, via the `this.element` property

## Modules

Define controller classes in JavaScript modules, one per file:

```js
// controllers/reference_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  // Your methods go here
}
```

Export each controller class as the module's default object.

Place modules in a `controllers/` directory.

Name the files `[identifier]_controller.js`, where `identifier` corresponds to each controller's identifier.

## Identifiers

An _identifier_ is the name you use to reference a controller class in HTML.

When you add a `data-controller` attribute to an element, Stimulus reads the identifier from the attribute's value and creates a new instance of the corresponding controller class.

For example, the following element has one controller, an instance of the controller class registered with the identifier `reference`:

```html
<div data-controller="reference"></div>
```

## Naming Conventions

When an identifier is composed of more than one word, separate the words with dashes (`date-picker`, `list-item`).

In filenames, separate multiple words using either dashes or underscores (`controllers/date_picker.js`, `controllers/list-item.js`).

You may namespace your controller modules using subfolders. Each slash (`/`) in a namespaced controller module's path becomes two dashes (`--`) in its identifier.

## Registration

If you use Stimulus with webpack, your application will automatically load and register controller classes following the conventions above.

If you don't use webpack, your application must manually load and register each controller class.

### Registering Controllers Manually

To manually register a controller class with an identifier, call the `Application#register` method on your application:

```js
import ReferenceController from "./controllers/reference_controller"
application.register("reference", ReferenceController)
```
