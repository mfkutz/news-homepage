const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navbar = document.getElementById("navbar");

openMenu.addEventListener("click", () =>{
    navbar.classList.add("active");
})


closeMenu.addEventListener("click", ()=>{
    navbar.classList.remove("active");
})