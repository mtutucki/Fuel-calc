const navBurgerBtn = document.body.querySelector(".nav__mobile__burger-menu");
const navMobileItems = document.body.querySelector(".nav__mobile__items");

const burgerButtonHandler = () => {
    navMobileItems.classList.toggle("nav__mobile__items--active");
}

navBurgerBtn.addEventListener("click", burgerButtonHandler);