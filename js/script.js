const hamburger = document.querySelector(".hamburger");
const nav_ul  = document.querySelector("ul");
const header = document.querySelector("header");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    nav_ul.classList.toggle("active");
    header.classList.toggle("active");
}

const nav_a = document.querySelectorAll("nav ul li a");

nav_a.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    nav_ul.classList.remove("active");
    header.classList.toggle("active");
}