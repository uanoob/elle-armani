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
