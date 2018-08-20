---
permalink: /handbook/controllers
nav_group: reference
nav_order: 00
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

Define your controller classes in JavaScript modules, one per file:

```js
// controllers/reference_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  // Your methods go here
}
```

Export each controller class as the module's default object.

Place these modules in the `controllers/` directory.

Name the files `[identifier]_controller.js`, where `[identifier]` corresponds to each controller's identifier.

## Identifiers

An _identifier_ is the name you use to reference a controller class in HTML.

When you add a `data-controller` attribute to an element, Stimulus reads the identifier from the attribute's value and creates a new instance of the corresponding controller class.

For example, this element has a controller which is an instance of the class defined in `controllers/reference_controller.js`:

```html
<div data-controller="reference"></div>
```

## Multiple Controllers

The `data-controller` attribute's value is a space-separated list of identifiers:

```html
<div data-controller="clipboard list-item"></div>
```

It's normal for any given element on the page to have many controllers.

Similarly, it's normal for an application to have many instances of a particular controller class at any given time.

## Naming Conventions

Always use camelCase for method and property names.

When an identifier is composed of more than one word, separate the words with dashes (`date-picker`, `list-item`).

In filenames, separate multiple words using either dashes or underscores (`controllers/date_picker.js`, `controllers/list-item.js`).

You may namespace your controller modules using subfolders. Each slash (`/`) in a namespaced controller module's path becomes two dashes (`--`) in its identifier.

## Registration

If you use Stimulus with the `@stimulus/webpack-helpers` package, your application will automatically load and register controller classes following the conventions above.

If you don't use the webpack helpers, your application must manually load and register each controller class.

### Registering Controllers Manually

To manually register a controller class with an identifier, call the `Application#register` method on your application object:

```js
import ReferenceController from "./controllers/reference_controller"

application.register("reference", ReferenceController)
```
