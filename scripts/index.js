// PAGE ELEMENTS

// burger menu elements
const menuBtn = document.querySelector("#header-menu-btn");
const nav = document.querySelector("#header-nav");
const menuPop = document.querySelector("#header-menu-bg");
const headerMenu = document.querySelector("#header-menu");

// links that start with # and lead to other page sections
const pageLinks = document.querySelectorAll('a[href^="#"]');

// sticky share button elements
const stickySocialBtn = document.querySelector(".sticky-social__btn");
const stickyShareIcon = document.querySelector(".sticky-social__img");
const stickyShareWord = document.querySelector(".sticky-social__text");
const stickyLinksContainer = document.querySelector("#sticky-links");
const stickyArrow = document.querySelector("#sticky-arrow");
const stickyDrop = document.querySelector("#sticky-drop");

// share links
const facebookShareBtn = document.querySelector("#sticky-facebook-share");
const whatsappShareBtn = document.querySelector("#sticky-whatsapp-share");
const twitterShareBtn = document.querySelector("#sticky-twitter-share");
const redditShareBtn = document.querySelector("#sticky-reddit-share");
const emailShareBtn = document.querySelector("#sticky-email-share");

// FUNCTIONS

// burger menu functions
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

// sticky share button functions
const stickyHover = () => {
    stickyShareIcon.setAttribute("src", "assets/icons/share-icon-dark.svg");
    stickyShareWord.setAttribute("src", "assets/icons/share-dark.svg");
    stickyArrow.classList.add("sticky-social__arrow");
};

const stickyUnhover = () => {
    if (!stickyLinksContainer.classList.contains("sticky-social__list--visible")) {
        stickyShareIcon.setAttribute("src", "assets/icons/share-icon.svg");
        stickyShareWord.setAttribute("src", "assets/icons/share.svg");
        stickyArrow.classList.remove("sticky-social__arrow");
    }
};

const stickyClick = () => {
    stickyArrow.classList.toggle("sticky-social__arrow-fade");
    stickySocialBtn.classList.toggle("sticky-social__btn--on");

    stickyLinksContainer.classList.toggle("sticky-social__list--visible");
    stickyLinksContainer.classList.toggle("sticky-social__list");

    stickyDrop.classList.toggle("sticky-social__drop");
};

// share links function
const sharePage = () => {
    const postUrl = encodeURI(document.location.href);
    const shareMsg = encodeURI("Hey, check out this dope Toronto comedy club: ");
    const postHashtags = ["standup", "comedy", "standupcomedy", "torontocomedy"];

    facebookShareBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
    whatsappShareBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${shareMsg} ${postUrl}`);
    twitterShareBtn.setAttribute("href", `https://twitter.com/share?url=${postUrl}&text=${shareMsg}&hashtags=${postHashtags}`);
    redditShareBtn.setAttribute("href", `https://reddit.com/submit?url=${postUrl}&title=${shareMsg}`);
    emailShareBtn.setAttribute("href", `mailto:? &body=${shareMsg} ${postUrl}`);
};

//FUNCTIONS ON PAGE LOAD
sharePage();

// EVENT LISTENERS

// burger menu event listeners
menuBtn.addEventListener("click", menuOnClick);
menuBtn.addEventListener("mouseover", menuHover);
menuBtn.addEventListener("mouseout", menuUnhover);

// navigating page sections through #-links listener 
pageLinks.forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// sticky share button listeners
stickySocialBtn.addEventListener("mouseover", stickyHover);
stickySocialBtn.addEventListener("mouseout", stickyUnhover);
stickySocialBtn.addEventListener("click", stickyClick);