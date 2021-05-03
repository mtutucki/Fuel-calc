const navBurgerBtn = document.body.querySelector(".nav__mobile__burger-menu");
const navMobileItems = document.body.querySelector(".nav__mobile__items");
const perKilometers = document.body.querySelector(".per__box__kilometers__input");
const perFuel = document.body.querySelector(".per__box__fuel__input");
const perPrice = document.body.querySelector(".per__box__price__input");

// funtion for burger menu which shows menu items / links
const burgerButtonHandler = () => {
    navMobileItems.classList.toggle("nav__mobile__items--active");
}

// listener react to user click and uses funtion above
navBurgerBtn.addEventListener("click", burgerButtonHandler);

const costPerKilometer = () => {
    if (perKilometers.value !=0 && perFuel !=0 && perPrice !=0){
        console.log(perKilometers.value)
    }
}

