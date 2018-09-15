const intro = document.querySelector('.intro');
const subtitle = document.querySelector('.intro__subtitle');

function changeColors() {
  intro.classList.toggle('intro--white');
  subtitle.classList.toggle('intro__subtitle--white');
}

function timer() {
  setInterval(changeColors, 5000);
}

document.addEventListener('DOMContentLoaded', timer());

// Slider
const container = document.querySelector('.container');
const prevBtn = document.querySelector('.btn__slider--prev');
const nextBtn = document.querySelector('.btn__slider--next');
const slides = document.querySelectorAll('.slide-item');
let slideIndex = 2;

prevBtn.addEventListener('click', function() {
  moveLeft();
});
nextBtn.addEventListener('click', function() {
  moveRight();
});

function moveLeft() {
  showSlides((slideIndex -= 1));
}

function moveRight() {
  showSlides((slideIndex += 1));
}
// console.log(container.clientWidth );
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

showSlides(slideIndex);

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