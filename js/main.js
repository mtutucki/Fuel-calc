const navBurgerBtn = document.body.querySelector(".nav__burger-menu");
const navMobileItems = document.body.querySelector(".nav--mobile__items");

const burgerButtonHandler = () => {
    navMobileItems.classList.toggle("nav--mobile__items--active");
}

navBurgerBtn.addEventListener("click", burgerButtonHandler);