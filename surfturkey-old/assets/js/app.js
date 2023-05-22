// NAV MENU

let menuBtn = document.querySelector('.navbar-menu__btn');
let navMenu = document.querySelector('.navbar-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');

    if(navMenu.dataset.viewport === 'closed') {
        navMenu.dataset.viewport = 'open';
    } else {
        navMenu.dataset.viewport = 'closed';
    }
});