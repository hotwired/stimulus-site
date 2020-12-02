import { Controller } from "stimulus"

export default class extends Controller {
  static values = { selector: String }

  initialize() {
    this.anchorElements.forEach(installAnchorLink)
  }

  get anchorElements() {
    const elements = this.element.querySelectorAll(this.selectorValue)
    return [].slice.call(elements)
  }
}

function installAnchorLink(element) {
  const html = `<a href="#${element.id}" class="anchor__link" aria-hidden="true">﹟</a>`
  element.insertAdjacentHTML("afterbegin", html)
  element.classList.add("anchor")
}
