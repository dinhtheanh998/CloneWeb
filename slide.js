"use strict";
export const slides = document.querySelectorAll(".slide");
export let currentSlide = 0;
export const maxSlide = slides.length;
export const btnNextSlide = document.querySelector(".slider__btn--right");
export const btnPrevSlide = document.querySelector(".slider__btn--left");
export const goToSlide = function (slide) {
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);
export const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 2500);
};

export const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 2500);
};
let autoSlide = setInterval(nextSlide, 2500);
btnNextSlide.addEventListener("click", nextSlide);
btnPrevSlide.addEventListener("click", prevSlide);
