// open navigation panel

const navBtn = document.getElementById('nav__btn');
const nav = document.getElementById('nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
})