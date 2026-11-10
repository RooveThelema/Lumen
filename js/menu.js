const menu = document.querySelector(".header__mobilemenu");
const btnOpen = document.querySelector(".btn-burger");
const btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click", function() {
    menu.classList.add("show");
});

btnClose.addEventListener("click", function() {
    menu.classList.remove("show");
});

const menuLinks = menu.querySelectorAll(".mobilemenu__link");
menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("show");
    });
});
