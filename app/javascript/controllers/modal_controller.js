import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container", "backdrop"]

  open() {
    this.containerTarget.classList.remove("hidden")
    this.backdropTarget.classList.remove("hidden")
  }

  close() {
    this.containerTarget.classList.add("hidden")
    this.backdropTarget.classList.add("hidden")
  }
}