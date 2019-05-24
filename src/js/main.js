const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.page-nav');
menuIcon.addEventListener('click', () => {

  nav.classList.toggle('opened');
})