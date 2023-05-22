const menuBtn = document.querySelector('.navbar__burger');
const menuList = document.querySelector('#menu-list');
const closeBtn = document.querySelector('.navbar__menu__close-btn');

function openNav() {
    menuList.style.width = '250px';
    document.body.style.marginLeft = '250px';
}

function closeNav() {
    menuList.style.width = '0';
    document.body.style.marginLeft = '0';
}