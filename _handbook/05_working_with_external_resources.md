---
slug: /working-with-external-resources
prefix: 5
---

# Working With External Resources

In this chapter we'll learn how to populate parts of a page asynchronously by loading and inserting remote fragments of HTML. We use this technique in Basecamp to keep our initial page loads fast, and to keep our views free of user-specific content so they can be cached most effectively.

Start by adding the controller's markup to `public/index.html`:

```html
<div data-controller="content-loader"
     data-content-loader-url="/messages.html"></div>
```

Then add a new `public/messages.html` file with a snippet of HTML. In a real application you'd load dynamically generated HTML from your server, but for demonstration purposes we'll use static content:

```html
<ol>
  <li>New Message: Stimulus Launch Party</li>
  <li>Overdue: Finish Stimulus 1.0</li>
</ol>
```

And now we'll start putting our controller together:

```js
// src/controllers/content_loader_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.load()
  }

  load() {
    fetch(this.data.get("url"))
      .then(response => response.text())
      .then(html => {
        this.element.innerHTML = html
      })
  }
}
```

When the element appears, Stimulus calls our `connect()` method and we kick off a [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) request to the URL specified in the element's data attributes. When the response comes back with HTML, we populate the element with it.

Open your browser's Network inspector tab and reload the page. You'll see an initial request for `index.html` and then our controller's request to `messages.html`.

# Using a Timer to Refresh

Let's expand our controller's functionality with an optional timer for refreshing the content. We'll specify the refresh interval with a data attribute:

```html
<div data-controller="content-loader"
     data-content-loader-url="/messages.html"
     data-content-loader-refresh-interval="5000"></div>
```

And update our controller to check for that attribute and start a `setInterval` timer when present:

```js
  connect() {
    this.load()

    if (this.data.has("refreshInterval")) {
      this.startRefreshing()
    }
  }

  startRefreshing() {
    setInterval(() => {
      this.load()
    }, this.data.get("refreshInterval"))
  }
}
```

Reload the page again. You'll see a new request being issued every 5 seconds in the Network inspector.

# Managing the Whole Lifecycle

Our `setInterval` timer starts on `connect()`, but there's nothing to stop it from running. If we navigate using Turbolinks or remove the element by some other means, our timer will keep ticking and continue making network requests. Let's fix that by keeping a reference to the timer and canceling it on `disconnect()`:

```js
  disconnect() {
    this.stopRefreshing()
  }

  startRefreshing() {
    this.refreshTimer = setInterval(() => {
      this.load()
    }, this.data.get("refreshInterval"))
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }
}
```

Great! We're ensuring that our timer will always be stopped now. Let's take a look at our final controller:

```js
// src/controllers/content_loader_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.load()

    if (this.data.has("refreshInterval")) {
      this.startRefreshing()
    }
  }

  disconnect() {
    this.stopRefreshing()
  }

  load() {
    fetch(this.data.get("url"))
      .then(response => response.text())
      .then(html => {
        this.element.innerHTML = html
      })
  }

  startRefreshing() {
    this.refreshTimer = setInterval(() => {
      this.load()
    }, this.data.get("refreshInterval"))
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }
}
```
