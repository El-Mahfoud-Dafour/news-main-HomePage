"strict mode";

/********Assigning variables******/
const headerEl = document.querySelector(".header");
const navBtn = document.querySelector(".nav__btn");
/***************Function****** */
function showNav() {
  headerEl.classList.toggle("nav__open");
}
/********event listener******/
navBtn.addEventListener("click", showNav);
