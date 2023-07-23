// PAGE ELEMENTS
const menuBtn = document.querySelector("#header-menu-btn");
const nav = document.querySelector("#header-nav");
const menuPop = document.querySelector("#header-menu-bg");
const headerMenu = document.querySelector("#header-menu");

const pageLinks = document.querySelectorAll('a[href^="#"]');

// FUNCTIONS
const menuOnClick = () => {
    // Switching between these two classes for header menu container for positioning of its content
    headerMenu.classList.toggle("header__menu-absolute");
    headerMenu.classList.toggle("header__menu");

    menuBtn.classList.toggle("change");
    nav.classList.toggle("change");
    menuPop.classList.toggle("change-bg");
    menuUnhover();
}

const menuHover = () => {
    menuPop.classList.add("hover-bg");
}

const menuUnhover = () => {
    menuPop.classList.remove("hover-bg");
}

// EVENT LISTENERS
menuBtn.addEventListener("click", menuOnClick);
menuBtn.addEventListener("mouseover", menuHover);
menuBtn.addEventListener("mouseout", menuUnhover);

pageLinks.forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
})