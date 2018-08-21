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
    return this.matches.map(([start, end]) => {
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
    const iterator = this.createTextNodeIterator()
    while (iterator.nextNode()) nodes.push(iterator.currentNode)
    return nodes
  }

  get matches() {
    const matches = []
    let match, position
    while (match = this.findNextMatch(position)) matches.push(match), position = match[0]
    return matches
  }

  createTextNodeIterator() {
    return document.createTreeWalker(this.contentElement, NodeFilter.SHOW_TEXT)
  }

  findNextMatch(fromPosition = -1) {
    const position = this.content.indexOf(this.value, fromPosition + 1)
    return position == -1 ? null : [position, position + this.value.length]
  }

  get contentElement() {
    return this.formattedCodeElement.querySelector("pre")
  }

  get content() {
    return this.contentElement.textContent
  }

  get value() {
    return this.data.get("value")
  }

  get className() {
    const suffix = this.data.get("class")
    return "callout" + (suffix ? "--" + suffix : "")
  }

  get formattedCodeElement() {
    return this.element.nextElementSibling
  }
}
