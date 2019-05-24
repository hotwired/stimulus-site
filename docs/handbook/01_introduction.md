---
permalink: /handbook/introduction
---

# Introduction

## About Stimulus

Stimulus is a JavaScript framework with modest ambitions. Unlike other front-end frameworks, Stimulus is designed to enhance _static_ or _server-rendered_ HTML—the "HTML you already have"—by connecting JavaScript objects to elements on the page using simple annotations.

These JavaScript objects are called _controllers_, and Stimulus continuously monitors the page waiting for HTML `data-controller` attributes to appear. For each attribute, Stimulus looks at the attribute's value to find a corresponding controller class, creates a new instance of that class, and connects it to the element.

You can think of it this way: just like the `class` attribute is a bridge connecting HTML to CSS, Stimulus' `data-controller` attribute is a bridge connecting HTML to JavaScript.

Aside from controllers, the three other major Stimulus concepts are:

* _actions_, which connect controller methods to DOM events using `data-action` attributes
* _targets_, which locate elements of significance within a controller
* _values_, which read, write, and observe data attributes on the controller's element

Stimulus' use of data attributes helps separate content from behavior in the same way CSS separates content from presentation. Further, Stimulus' conventions naturally encourage you to group related code by name.

In turn, Stimulus helps you build small, reusable controllers, giving you just enough structure to keep your code from devolving into "JavaScript soup."

A powerful consequence of using data attributes this way is that you can read a fragment of Stimulus markup and see exactly where and how the interactivity happens.

Are you a solo programmer? Six months from now, a glance at your HTML template is all you'll need to remember how that front-end feature works.

Working with another developer, or a whole team? Readable markup communicates intent, and Stimulus' attributes let your coworkers know which elements have JavaScript behavior attached and what they do.

Perplexed by modern JavaScript? Don't fret. Stimulus is a straightforward extension to the HTML and CSS you already know.

## About This Book

This handbook will guide you through Stimulus' core concepts by demonstrating how to write several fully functional controllers. Each chapter builds on the one before it; from start to finish, you'll learn how to:

* print a greeting addressed to the name in a text field
* copy text from a text field to the system clipboard when a button is clicked
* navigate through a slide show with multiple slides
* fetch HTML from the server into an element on the page automatically
* set up Stimulus in your own application

Once you've completed the exercises here, you may find the [reference documentation](../reference/controllers) helpful for understanding technical details about the Stimulus API.

Let's get started!
