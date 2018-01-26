import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent = `Hello, ${this.name}!`
  }

  get name() {
    return this.nameTarget.value
  }
}
