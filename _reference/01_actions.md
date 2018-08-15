---
slug: /actions
section: appendix
---

# Actions

## descriptor syntax

The `data-action` value `click->hello#greet` is called an _action descriptor_. This particular descriptor says:
* `click` is the event name
* `hello` is the controller identifier
* `greet` is the name of the method to invoke

## shorthand

The `click->hello#greet` _action descriptor_ can be shortened to `hello#greet`. That's because Stimulus defines `click` as the default event for actions on `<button>` elements.

Certain other elements have default events, too. Here's the full list:

Element           | Default event
----------------- | -------------
a                 | click
button            | click
form              | submit
input             | change
input type=submit | click
select            | change
textarea          | change

## global event syntax

## working with events

event argument on method

canceling events (stopping propagation, preventing default behavior)

## multiple actions on an element

action ordering
