import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    const output = `Hello, ${this.name}!`
    this.outputTarget.textContent = output
  }

  get name() {
    return this.nameTarget.value
  }
}
