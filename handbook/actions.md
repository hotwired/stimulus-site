---
permalink: /handbook/actions
nav_group: reference
nav_order: 02
---

# Actions

An _action_ is a connection between

* a controller method,
* the controller's element, and
* a DOM event listener

Actions are how you handle events in your controllers.

```html
<div data-controller="gallery">
  <button data-action="click->gallery#next"></button>
  …
</div>
```

## Descriptors

The string `click->gallery#next` is called an _action descriptor_. In this descriptor:

* `click` is the name of the event to listen for
* `gallery` is the controller identifier
* `next` is the name of the method to invoke

### Event Shorthand

Stimulus lets you shorten the action descriptors for some common element/event pairs, such as the button/click pair above, by omitting the event name:

```html
  <button data-action="gallery#next"></button>
```

The full set of these shorthand pairs is as follows:

Element           | Default event
----------------- | -------------
a                 | click
button            | click
form              | submit
input             | change
input type=submit | click
select            | change
textarea          | change

### Global Events

Sometimes a controller needs to listen for events dispatched on the global `window` or `document` objects.

You can append `@window` or `@document` to the event name in an action descriptor to install the event listener on `window` or `document`, respectively, as in the following example:

```html
<div data-controller="gallery"
     data-action="resize@window->gallery#layout">
  …
</div>
```

## Methods

An _action method_ is the method in a controller which serves as an action's event listener.

The first argument to an action method is the DOM event. You may want access to the event for a number of reasons, including:

* to read the key code from a keyboard event
* to read the coordinates of a mouse event
* to read data from an input event
* to prevent the browser's default behavior for an event
* to find out which element dispatched an event before it bubbled up to this action

## Multiple Actions

The `data-action` attribute's value is a space-separated list of action descriptors.

It's normal for any given element to have many actions.

When an element has more than one action for the same event, Stimulus invokes the actions from left to right in the order that their descriptors appear.
