import "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"
import HelloController from "./controllers/hello_controller"
import CalloutController from "./controllers/callout_controller"

const application = Application.start()
application.register("hello", HelloController)
application.register("callout", CalloutController)
