import { Controller } from "stimulus"

export default class extends Controller {
  initialize() {
    this.anchorElements.forEach(installAnchorLink)
  }

  get anchorElements() {
    const selector = this.data.get("selector")
    const elements = this.element.querySelectorAll(selector)
    return [].slice.call(elements)
  }
}

function installAnchorLink(element) {
  const html = `<a href="#${element.id}" class="anchor__link" aria-hidden="true">﹟</a>`
  element.insertAdjacentHTML("afterbegin", html)
  element.classList.add("anchor")
}
