// PAGE ELEMENTS
const menuBtn = document.querySelector("#header-menu-btn");
const nav = document.querySelector("#header-nav");
const menuPop = document.querySelector("#header-menu-bg");
const headerMenu = document.querySelector("#header-menu");

// FUNCTIONS
const menuOnClick = () => {
    // Switching between these two classes for header menu container for positioning of its content
    headerMenu.classList.toggle("header__menu-absolute");
    headerMenu.classList.toggle("header__menu");

    menuBtn.classList.toggle("change");
    nav.classList.toggle("change");
    menuPop.classList.toggle("change-bg");
}

// EVENT LISTENERS
menuBtn.addEventListener("click", menuOnClick);