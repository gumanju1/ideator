import "@hotwired/turbo-rails"
import "./controllers"
import "flowbite/dist/flowbite.turbo"

document.addEventListener("turbo:load", () => {
  console.log("Turbo loaded")
})