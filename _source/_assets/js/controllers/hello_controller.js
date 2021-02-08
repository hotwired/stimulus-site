// hello_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return [ "name", "output" ]
  }
  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}
