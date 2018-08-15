---
slug: /targets
section: appendix
---

# Targets

## descriptor syntax

The `data-target` value `hello.name` is called a _target descriptor_. This particular descriptor says:
* `hello` is the controller identifier
* `name` is the target name

## targets static array

When Stimulus loads your controller class, it looks for target name strings in a static array called `targets`. For each target name in the array, Stimulus adds three new properties to your controller. Here, our `"source"` target name becomes the following properties:

* `this.sourceTarget` evaluates to the first `source` target in your controller's scope. If there is no `source` target, accessing the property throws an error.
* `this.sourceTargets` evaluates to an array of all `source` targets in the controller's scope.
* `this.hasSourceTarget` evaluates to `true` if there is a `source` target or `false` if not.

## naming convention: camel case property names

## difference between singular and plural and when you would want to use each

## the singular accessor raises when there is no match; `has...`
