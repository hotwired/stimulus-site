// hello_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    const text = `Hello, ${this.name}!`
    this.outputTarget.textContent = text
  }

  get name() {
    return this.nameTarget.value
  }
}
