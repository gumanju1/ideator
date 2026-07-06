import "@hotwired/turbo-rails"
import "./controllers"

import { initFlowbite } from "flowbite"

document.addEventListener("turbo:load", () => {
  initFlowbite()
})
