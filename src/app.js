const openSubMenuBtn = document.querySelector(".open__subMenu__btn")

const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const subMenu= document.querySelector(".subMenu")
const navBtn= document.querySelector(".nav__btn")
const navMenu= document.querySelector(".nav__menu")
const closeBtn= document.querySelector(".close__menu")
const overlay= document.querySelector(".overlay")
const opencart= document.querySelector(".open__cart")
const closecart= document.querySelector(".close__cart")
const cartmenu=document.querySelector(".cart__menu")

opencart.addEventListener("click", ()=>{
    cartmenu.classList.remove("-left-72")
    cartmenu.classList.add("left-0")
    overlay.classList.remove("hidden")
    
    
})
closecart.addEventListener("click", ()=>{
    cartmenu.classList.remove("left-0")
    cartmenu.classList.add("-left-72")
    overlay.classList.add("hidden")
    
})


closeBtn.addEventListener("click", ()=>{
    navMenu.classList.remove("right-0")
    navMenu.classList.add("-right-72")
    overlay.classList.add("hidden")
})
overlay.addEventListener("click", ()=>{
    navMenu.classList.remove("right-0")
    navMenu.classList.add("-right-72")
    cartmenu.classList.remove("left-0")
    cartmenu.classList.add("-left-72")
    overlay.classList.add("hidden")
})

navBtn.addEventListener("click", ()=>{

    navMenu.classList.remove("-right-72")
    navMenu.classList.add("right-0")
    overlay.classList.remove("hidden")
})

toggleThemeBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        if (localStorage.theme === "dark"){
                    document.documentElement.classList.remove("dark");
                    localStorage.theme = "light";
                } else {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("theme" , "dark");
                }
    })
})

openSubMenuBtn.addEventListener("click", ()=>{
    subMenu.classList.toggle("submenu__open")
})


// toggleThemeBtn.addEventListener("click" , () => {
//     if (localStorage.theme === "dark"){
//         document.documentElement.classList.remove("dark");
//         localStorage.theme = "light";
//     } else {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme" , "dark");
//     }
// })