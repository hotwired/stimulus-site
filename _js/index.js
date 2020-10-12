import Turbolinks from "turbolinks"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

Turbolinks.start()

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

// Are we in an <iframe>?
if (window.top !== window) {
  // 🎶 Never Gonna Give You Up 🎶
  location.replace("https://www.youtube.com/embed/dQw4w9WgXcQ")
}
