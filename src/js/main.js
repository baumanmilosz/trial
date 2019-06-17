const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.page-nav');
menuIcon.addEventListener('click', () => {
  nav.classList.toggle('opened');
})

const subNavItem = document.querySelectorAll('.nav-list-item');

// DROPDOWN ELEMENTS IN MAIN NAV-LIST
subNavItem.forEach(el => {
  el.addEventListener('click', () => {
    const children = [...el.children];
    children.forEach(child => {
      if(child.classList.contains('sub-list')) {
        document.querySelector('.sub-list').classList.toggle('opened');
      }
    })
  })
})
//

// DROPDOWN ELEMENTS IN SUB-NAV-LIST
const subListItems = document.querySelectorAll('.sub-list-item');
subListItems.forEach(el => {
  el.addEventListener('click', () => {
    const subList = [...el.children];

    subList.forEach(el => {
      if(el.classList.contains('sub-list-2')) {
        el.classList.toggle('opened');
      }
    })
})
})
//

const desktop = window.matchMedia("(min-width: 1024px)");
const checkMedia = (e) => {
  if (e.matches) {
    nav.classList.remove('opened');
    document.querySelectorAll('.sub-list').forEach(el => el.style.display = 'none');
  }
}
desktop.addListener(checkMedia);

// SLIDER
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
});


// LIGHT GALLERY

$('#aniimated-thumbnials').lightGallery({
  thumbnail: false,
  fullScreen: false,
  download: false,
});
