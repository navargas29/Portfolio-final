const menuBar = document.querySelector("#menu-bar");
const menu = document.querySelector("#menu");

menuBar.addEventListener("click", function() {
    menu.classList.toggle("menu-toggle")
})
