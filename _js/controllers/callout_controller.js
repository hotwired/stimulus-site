import { Controller } from "stimulus"

export default class extends Controller {
  initialize() {
    for (const range of this.calloutRanges) {
      const content = range.toString()
      const element = this.createCalloutElement(content)
      range.deleteContents()
      range.insertNode(element)
    }
  }

  connect() {
    this.element.parentElement.removeChild(this.element)
  }

  get calloutRanges() {
    return this.textRanges.map(([start, end]) => {
      return this.createCalloutRange(start, end)
    })
  }

  createCalloutElement(textContent) {
    const element = document.createElement("span")
    element.textContent = textContent
    element.className = this.className
    return element
  }

  createCalloutRange(start, end) {
    const range = document.createRange()
    let startPosition = 0

    for (const node of this.textNodes) {
      const endPosition = startPosition + node.textContent.length

      if (startPosition <= start && start <= endPosition) {
        range.setStart(node, start - startPosition)
      }

      if (startPosition <= end && end <= endPosition) {
        range.setEnd(node, end - startPosition)
      }

      startPosition = endPosition
    }

    return range
  }

  get textNodes() {
    const nodes = []
    const walker = document.createTreeWalker(this.preElement, NodeFilter.SHOW_TEXT)

    let node
    while (node = walker.nextNode()) {
      nodes.push(node)
    }

    return nodes
  }

  get textRanges() {
    let position = -1
    const ranges = []

    while ((position = this.content.indexOf(this.value, position + 1)) != -1) {
      ranges.push([position, position + this.value.length])
    }

    return ranges
  }

  get content() {
    return this.preElement.textContent
  }

  get value() {
    return this.data.get("value")
  }

  get className() {
    const suffix = this.data.get("class")
    return "callout" + (suffix ? "--" + suffix : "")
  }

  get preElement() {
    return this.formattedCodeElement.querySelector("pre")
  }

  get formattedCodeElement() {
    return this.element.nextElementSibling
  }
}
