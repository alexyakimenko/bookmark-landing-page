const body = document.querySelector("body");
const header = document.querySelector("#header")
const hamburger = document.querySelector("#hamburger")
const featureTabs = document.querySelectorAll(".features__tabs .tab")
const featureModules = document.querySelectorAll(".features__modules .module")
const accordionItems = document.querySelectorAll(".faq__accordion .item")
const emailBlock = document.querySelector(".contact__form .email__valid")
const emailField = emailBlock.querySelector("input")
const animElems = document.querySelectorAll(".dyn-anim")

hamburger.addEventListener("click", () => {
  if(header.classList.contains("open")) {
    header.classList.remove("open")
    body.classList.remove("noscroll")
  } else {
    body.scrollTo(0,0)
    header.classList.add("open")
    body.classList.add("noscroll")
  }
})

featureTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    featureTabs.forEach(item => item.classList.remove("active"))
    tab.classList.add("active")
    featureModules.forEach(item => item.classList.remove("active"))
    document.querySelector(`#${tab.dataset.moduleid}`).classList.add("active")
  })
})

accordionItems.forEach(item => {
  item.querySelector(".item__headline").addEventListener("click", () => {
    item.classList.toggle("open")
  })
})

emailField.addEventListener("keyup", () => {
  if(!emailField.checkValidity()) {
    if(emailField.value) {
      emailBlock.classList.add("invalid")
    } else {
      emailBlock.classList.remove("invalid")
    }
  } else {
    if(emailBlock.classList.contains("invalid")) {
      emailBlock.classList.remove("invalid")
    }
  }
})
