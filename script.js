import * as mySlider from "./slide.js";
// flash sale slide
const items = document.querySelectorAll(".item");
let currentItem = 0;
const maxItem = items.length;
console.log(maxItem);
console.log(items);
const gotoItem = function (slide) {
  items.forEach((el, i) => {
    el.style.transform = `translateX(${-100 * slide}%)`;
  });
};
// gotoItem(0);
const nextSlide = function () {
  if (currentItem === maxItem - 5) {
    currentItem = 0;
  } else {
    currentItem++;
  }
  gotoItem(currentItem);
};
const btnNextSlide = document.querySelector(".item__btn--right");
let saleSlide = setInterval(nextSlide, 3500);
btnNextSlide.addEventListener("click", nextSlide);

// click active nav item
const navListItem = document.querySelector(".nav-list-item");
const navItems = document.querySelectorAll(".nav-item");
navListItem.addEventListener("click", (e) => {
  const clicked = e.target.closest(".nav-item");
  navItems.forEach((el) => el.classList.remove("active"));
  clicked.classList.add("active");
});
const topNav = document.querySelector(".top-navigation");
const backToTop = document.querySelector(".btn-on-top");
const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;
window.addEventListener("scroll", function () {
  if (window.scrollY >= headerHeight) {
    backToTop.classList.remove("d-none");
  } else {
    backToTop.classList.add("d-none");
  }
});

backToTop.addEventListener("click", function (e) {
  topNav.scrollIntoView({ behavior: "smooth" });
});
