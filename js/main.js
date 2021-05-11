// nav variables
const navBurgerBtn = document.body.querySelector(".nav__mobile__burger-menu");
const navMobileItems = document.body.querySelector(".nav__mobile__items");
const navItemLinkPer = document.body.querySelectorAll(".nav__item__per");
const navItemLinkRoute = document.body.querySelectorAll(".nav__item__route ");
// per section variables
const sectionPer = document.body.querySelector(".per");
const sectionRoute = document.body.querySelector(".route")
const perKilometers = document.body.querySelector(".per__box__kilometers__input");
const perFuel = document.body.querySelector(".per__box__fuel__input");
const perPrice = document.body.querySelector(".per__box__price__input");
const perResultAverage = document.body.querySelector(".per__box__result");
const perResultAverageFuel = document.body.querySelector(".per__box__result__price");
const perCount = document.body.querySelector(".per__box__button");
// route variables
const routeKilometers = document.body.querySelector(".route__box__kilometers__input")
const routeFuel = document.body.querySelector(".route__box__fuel__input")
const routeFuelPrice = document.body.querySelector(".route__box__price__input")
const routeResult = document.body.querySelector(".route__box__result")
const routeCount = document.body.querySelector(".route__box__button")
// carousel variables
const carouselIndicators = document.body.querySelectorAll(".carousel-indicator");




// funtion for burger menu which shows menu items / links
const burgerButtonHandler = () => {
    navMobileItems.classList.toggle("nav__mobile__items--active");
}

// listener react to user click and uses funtion above
navBurgerBtn.addEventListener("click", burgerButtonHandler);

// alert style is funtion to alert user didn't fill one of the inputs
const alertStyle = () => {
    perResultAverage.style.color = "red";
}

// counting average fuel consumption
const countPerHundredKm = () => {
    let userKilometers = perKilometers.value;
    let userFuel = perFuel.value;
    let userPrice = perPrice.value;
    let perUserResultAverage = (userFuel / userKilometers) * 100;
    perUserResultAverage = perUserResultAverage.toFixed(2);
    let perUserResultAverageFuel = (userPrice * perUserResultAverage);
    perUserResultAverageFuel = perUserResultAverageFuel.toFixed(2);

    if (userFuel != 0 && userKilometers != 0 && userPrice != 0) {
        perResultAverage.innerHTML = `Average = ${perUserResultAverage}`;
        perResultAverageFuel.innerHTML = `100km cost = ${perUserResultAverageFuel}`;
        perResultAverage.style.color = "white";
    } else if (userFuel != 0 && userKilometers != 0) {
        perResultAverage.innerHTML = `Average = ${perUserResultAverage}`;
        perResultAverage.style.color = "white";
    } else if (userFuel <= 0) {
        perResultAverage.innerHTML = "Fill amount of fuel, please";
        alertStyle();
    } else if (userKilometers <= 0) {
        perResultAverage.innerHTML = "Fill kilometers traveled, please";
        alertStyle();
    }
}

// event listener uses funtion above
perCount.addEventListener("click", countPerHundredKm);

// counting for route plan 
const countRoute = () => {
    let userRouteKilometers = routeKilometers.value;
    let userRouteFuel = routeFuel.value;
    let userRouteFuelPrice = routeFuelPrice.value;
    let routeResultCount = ((userRouteFuel * userRouteKilometers) / 100) * userRouteFuelPrice;
    routeResultCount = routeResultCount.toFixed(2);

    if (userRouteKilometers != 0 && userRouteFuel != 0 && userRouteFuelPrice != 0) {
        routeResult.innerHTML = `Route cost = ${routeResultCount}`;
        routeResult.style.color = "white";
    } else if (userRouteKilometers <= 0) {
        routeResult.innerHTML = "Fill kilometers to drive, please";
        routeResult.style.color = "red";

    } else if (userRouteFuel <= 0) {
        routeResult.innerHTML = "Fill average consumption, please";
        routeResult.style.color = "red";

    } else if (userRouteFuelPrice <= 0) {
        routeResult.innerHTML = "Fill fuel price, please";
        routeResult.style.color = "red";

    }

}

// add event listener which uses function above
routeCount.addEventListener("click", countRoute);

// function set route section visible
const applyRouteSection = () => {
    sectionRoute.style.display = "flex";
    sectionPer.style.display = "none";
}

// function set per section visible
const applyPerSection = () => {
    sectionPer.style.display = "flex";
    sectionRoute.style.display = "none";
}

// function add event listener indicators to change visible
carouselIndicators.forEach((indicator)=>{
    indicator.addEventListener("click", function(){
        if (sectionPer.style.display == "flex"){
            applyRouteSection();
        }
        else {
            applyPerSection();
        }
    })
});

// event listener for per link in navigation. It's for making a per section 
// visible and close mobile menu
navItemLinkPer.forEach((perLink)=>{
    perLink.addEventListener("click", function() {
        applyPerSection();
        navMobileItems.classList.remove("nav__mobile__items--active")
    });
})

// event listener for route link in navigation. It's for making a route section 
// visible and close mobile menu
navItemLinkRoute.forEach((routeLink)=>{
    routeLink.addEventListener("click", function() {
        applyRouteSection();
        navMobileItems.classList.remove("nav__mobile__items--active")
    });
})





