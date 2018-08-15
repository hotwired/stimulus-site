---
slug: /controllers
section: appendix
---

# Controllers

## identifiers

## naming conventions

## lifecycle callbacks

The Stimulus _lifecycle callback_ methods are useful for setting up or tearing down associated state when your controller enters or leaves the document.

Callback   | Invoked by Stimulus…
---------- | --------------------
initialize | once, when the controller is first instantiated
connect    | anytime the controller is connected to the DOM
disconnect | anytime the controller is disconnected from the DOM
