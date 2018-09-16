//Blink
const intro = document.querySelector('.intro');
const title = document.querySelector('.intro__title');
const subtitle = document.querySelector('.intro__subtitle');
const shade = document.querySelector('.intro__shade');
const description = document.querySelector('.intro__description');

function addClass(n) {
  intro.classList.add(`intro--${n}`);
  title.classList.add(`intro__title--${n}`);
  subtitle.classList.add(`intro__subtitle--${n}`);
  shade.classList.add(`intro__shade--${n}`);
  description.classList.add(`intro__description--${n}`);
}

function removeClass(n) {
  intro.classList.remove(`intro--${n}`);
  title.classList.remove(`intro__title--${n}`);
  subtitle.classList.remove(`intro__subtitle--${n}`);
  shade.classList.remove(`intro__shade--${n}`);
  description.classList.remove(`intro__description--${n}`);
}

let n = 1;

function timer(n) {
  addClass(n);
  setTimeout(function() {
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
const container = document.querySelector('.container');
const prevBtn = document.querySelector('.btn__slider--prev');
const nextBtn = document.querySelector('.btn__slider--next');
const slides = document.querySelectorAll('.slide-item');

prevBtn.addEventListener('click', function() {
  moveLeft();
});
nextBtn.addEventListener('click', function() {
  moveRight();
});

window.addEventListener('resize', function() {
  resizeHandler();
});

function moveLeft() {
  showSlides((slideIndex -= 1));
}

function moveRight() {
  showSlides((slideIndex += 1));
}

let slideIndex = 2;

function showSlides(n) {
  let i;
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
  for (let i = 0; i < slides.length; i++) {
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
const submitBtn = document.querySelector('.discount__form-button');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popupBtnClose = document.querySelector('.popup__button-close');

submitBtn.addEventListener('click', function() {
  showPopup(event);
});
popupBtnClose.addEventListener('click', function() {
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
