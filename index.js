const menuBtn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const menuPath = document.getElementById("menuPath")

let open = false

function setMenuState(state) {
   open = state
   mobileMenu.classList.toggle("open", open)
   menuBtn.setAttribute("aria-expanded", open ? "true" : "false")
   menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu")

   if (open) {
      menuPath.setAttribute("d", "M6 6l12 12M18 6L6 18")
   } else {
      menuPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16")
   }
}

menuBtn.addEventListener("click", () => {
   setMenuState(!open)
})

mobileMenu.querySelectorAll("a").forEach((link) => {
   link.addEventListener("click", () => setMenuState(false))
})
