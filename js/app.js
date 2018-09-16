'use strict';

//Blink
var intro = document.querySelector('.intro');
var title = document.querySelector('.intro__title');
var subtitle = document.querySelector('.intro__subtitle');
var shade = document.querySelector('.intro__shade');
var description = document.querySelector('.intro__description');

function addClass(n) {
  intro.classList.add('intro--' + n);
  title.classList.add('intro__title--' + n);
  subtitle.classList.add('intro__subtitle--' + n);
  shade.classList.add('intro__shade--' + n);
  description.classList.add('intro__description--' + n);
}

function removeClass(n) {
  intro.classList.remove('intro--' + n);
  title.classList.remove('intro__title--' + n);
  subtitle.classList.remove('intro__subtitle--' + n);
  shade.classList.remove('intro__shade--' + n);
  description.classList.remove('intro__description--' + n);
}

var n = 1;

function timer(n) {
  addClass(n);
  setTimeout(function () {
    removeClass(n);
    n = n + 1;
    if (n > 3) {
      n = 1;
    }
    timer(n);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', timer(n));

// Slider
var container = document.querySelector('.container');
var prevBtn = document.querySelector('.btn__slider--prev');
var nextBtn = document.querySelector('.btn__slider--next');
var slides = document.querySelectorAll('.slide-item');

prevBtn.addEventListener('click', function () {
  moveLeft();
});
nextBtn.addEventListener('click', function () {
  moveRight();
});

window.addEventListener('resize', function () {
  resizeHandler();
});

function moveLeft() {
  showSlides(slideIndex -= 1);
}

function moveRight() {
  showSlides(slideIndex += 1);
}

var slideIndex = 2;

function showSlides(n) {
  var i = void 0;
  if (n > slides.length) {
    slideIndex = 2;
  }
  if (n < 2) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 2].style.display = 'block';
}

function showAll() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'block';
  }
}

function resizeHandler() {
  if (window.innerWidth < 1140) {
    showSlides(slideIndex);
  } else {
    showAll();
  }
}

document.addEventListener('DOMContentLoaded', resizeHandler());

// popup
var submitBtn = document.querySelector('.discount__form-button');
var overlay = document.querySelector('.overlay');
var popup = document.querySelector('.popup');
var popupBtnClose = document.querySelector('.popup__button-close');

submitBtn.addEventListener('click', function () {
  showPopup(event);
});
popupBtnClose.addEventListener('click', function () {
  closePopup(event);
});

function showPopup(event) {
  event.preventDefault();
  overlay.classList.add('overlay-show');
  popup.classList.add('popup-show');
}

function closePopup(event) {
  event.preventDefault();
  overlay.classList.remove('overlay-show');
  popup.classList.remove('popup-show');
}
//# sourceMappingURL=app.js.map
