const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.page-nav');
menuIcon.addEventListener('click', () => {

  nav.classList.toggle('opened');
})


const desktop = window.matchMedia("(min-width: 1024px)");
const checkMedia = (e) => {
  if (e.matches) {
    nav.classList.remove('opened');
  }
}
desktop.addListener(checkMedia);

// LIGHT GALLERY

$('#aniimated-thumbnials').lightGallery({
  thumbnail: false,
  fullScreen: false,
  download: false,
});