const navBurgerBtn = document.body.querySelector(".nav__mobile__burger-menu");
const navMobileItems = document.body.querySelector(".nav__mobile__items");
const perKilometers = document.body.querySelector(".per__box__kilometers__input");
const perFuel = document.body.querySelector(".per__box__fuel__input");
const perPrice = document.body.querySelector(".per__box__price__input");
const perResultAverage = document.body.querySelector(".per__box__result");
const perResultAverageFuel = document.body.querySelector(".per__box__result__price");
const perCount = document.body.querySelector(".per__box__button");

// funtion for burger menu which shows menu items / links
const burgerButtonHandler = () => {
    navMobileItems.classList.toggle("nav__mobile__items--active");
}

// listener react to user click and uses funtion above
navBurgerBtn.addEventListener("click", burgerButtonHandler);


const alertStyle = () => {
    perResultAverage.style.color = "red";
}



const countPerHundredKm = () => {
    let userKilometers = perKilometers.value;
    let userFuel = perFuel.value;
    let userPrice = perPrice.value;
    let perUserResultAverage = (userFuel/ userKilometers) *100;
    perUserResultAverage = perUserResultAverage.toFixed(2);
    let perUserResultAverageFuel = (userPrice * perUserResultAverage);
    perUserResultAverageFuel = perUserResultAverageFuel.toFixed(2);

    if (userFuel !=0 && userKilometers !=0 && userPrice !=0)
    {

        perResultAverage.innerHTML = `Average = ${perUserResultAverage}`;
        perResultAverageFuel.innerHTML = `100km cost = ${perUserResultAverageFuel}`
        perResultAverage.style.color = "white";
    }
    else if (userFuel !=0 && userKilometers !=0) {
        perResultAverage.innerHTML = `Average = ${perUserResultAverage}`;
        perResultAverage.style.color = "white";
    }
    else if (userFuel <=0){
        perResultAverage.innerHTML = "Fill amount of fuel, please";
        alertStyle();
    }
    else if (userKilometers<=0){
        perResultAverage.innerHTML = "Fill kilometers traveled, please";
        alertStyle();
    }

}





perCount.addEventListener("click", countPerHundredKm);
