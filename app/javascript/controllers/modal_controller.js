import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  hideModal(event) {
    if (!event.detail.success) return
    
    const modal = FlowbiteInstances.getInstance("Modal", "default-modal")
      modal?.hide()
    }
  }