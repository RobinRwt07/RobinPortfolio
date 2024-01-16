let openMenu= document.querySelector("#open-menu");
let closeMenu= document.querySelector("#close-menu");
let navBar= document.querySelector("#nav-bar");

// toggle the menu bar
openMenu.addEventListener("click",()=>{
    closeMenu.classList.toggle("hidden");
    openMenu.classList.add("hidden");
    navBar.classList.replace("hidden","flex");
});

closeMenu.addEventListener("click",()=>{
    console.log("hi");
    openMenu.classList.toggle("hidden");
    closeMenu.classList.add("hidden");
    navBar.classList.replace("flex","hidden");
});