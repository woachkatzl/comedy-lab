// PAGE ELEMENTS
const menuBtn = document.querySelector("#header-menu-btn");
const nav = document.querySelector("#header-nav");
const menuPop = document.querySelector("#header-menu-bg");
const headerMenu = document.querySelector("#header-menu");

const pageLinks = document.querySelectorAll('a[href^="#"]');

const stickySocialBtn = document.querySelector(".sticky-social__btn");
const stickyShareIcon = document.querySelector(".sticky-social__img");
const stickyShareWord = document.querySelector(".sticky-social__text");
const stickyLinksContainer = document.querySelector("#sticky-links");
const stickyArrow = document.querySelector("#sticky-arrow");
const stickyDrop = document.querySelector("#sticky-drop");

// FUNCTIONS
const menuOnClick = () => {
    // Switching between these two classes for header menu container for positioning of its content
    headerMenu.classList.toggle("header__menu-absolute");
    headerMenu.classList.toggle("header__menu");

    menuBtn.classList.toggle("change");
    nav.classList.toggle("change");
    menuPop.classList.toggle("change-bg");
    menuUnhover();
};

const menuHover = () => {
    menuPop.classList.add("hover-bg");
};

const menuUnhover = () => {
    menuPop.classList.remove("hover-bg");
};

const stickyHover = () => {
    stickyShareIcon.setAttribute("src", "assets/icons/share-icon-dark.svg");
    stickyShareWord.setAttribute("src", "assets/icons/share-dark.svg");
    stickyArrow.classList.add("sticky-social__arrow");
}

const stickyUnhover = () => {
    if (!stickyLinksContainer.classList.contains("sticky-social__list--visible")) {
        stickyShareIcon.setAttribute("src", "assets/icons/share-icon.svg");
        stickyShareWord.setAttribute("src", "assets/icons/share.svg");
        stickyArrow.classList.remove("sticky-social__arrow");
    }
}

const stickyClick = () => {
    stickyArrow.classList.toggle("sticky-social__arrow-fade");
    stickySocialBtn.classList.toggle("sticky-social__btn--on");

    stickyLinksContainer.classList.toggle("sticky-social__list--visible");
    stickyLinksContainer.classList.toggle("sticky-social__list");

    stickyDrop.classList.toggle("sticky-social__drop");
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
});

stickySocialBtn.addEventListener("mouseover", stickyHover);
stickySocialBtn.addEventListener("mouseout", stickyUnhover);
stickySocialBtn.addEventListener("click", stickyClick);