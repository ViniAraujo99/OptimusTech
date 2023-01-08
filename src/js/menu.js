const btnMenu = document.querySelector(".menu__btn");
const navbar = document.querySelector(".header__nav");
const menuImg = document.querySelector(".fa-bars");

btnMenu.addEventListener('click', () => {
        navbar.classList.toggle("header__nav-active");
        menuImg.classList.toggle("fa-arrow-left");
    }
)