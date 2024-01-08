// VIDEO FIX MOBILE
if (video = document.getElementById('vid')) {
    video.autoplay = true;
    video.load();
}

// MOBILE MENU OPENING AND CLOSING
const menu = document.querySelector('.mobile-menu');
const buttonOpen = document.querySelector('.mobile-menu-toggle');
const buttonClose = document.querySelector('.mobile-menu-close');

function toggleMobileMenu(event) {
    event.preventDefault();
    menu.classList.toggle('mobile-menu-open');
}

buttonOpen.addEventListener('click', toggleMobileMenu);
buttonClose.addEventListener('click', toggleMobileMenu);

// GDPR OPENING AND CLOSING

const gdpr = document.querySelector('.gdpr-tab');
const gdprOpen = document.querySelector('.gdpr-tab-open');
const gdprClose = document.querySelector('.gdpr-tab-close');

function toggleGdprTab(event) {
    event.preventDefault();
    gdpr.classList.toggle('gdpr-open');
}

gdprOpen.addEventListener('click', toggleGdprTab);
gdprClose.addEventListener('click', toggleGdprTab);

// SCROLL Animation
const banner = document.getElementById('banner');
const drinkShow = document.getElementById('drink-show');
const eshop = document.getElementById('e-shop');
const footer = document.getElementById('footer');


function scrollToNextSection() {
  if (window.scrollY >= banner.offsetTop && window.scrollY < drinkShow.offsetTop) {
    window.scrollTo({
      top: drinkShow.offsetTop,
      behavior: 'smooth'
    });
  } else if (window.scrollY >= drinkShow.offsetTop && window.scrollY < eshop.offsetTop) {
    window.scrollTo({
      top: eshop.offsetTop,
      behavior: 'smooth'
    });
  }
}

window.addEventListener('scroll', scrollToNextSection);


// RESERVATION DATE PRESET FOR TOMOROW
document.getElementById('res-date').valueAsDate = new Date(Date.now() + ( 3600 * 1000 * 24));

// RESERVATION BLOCKDATE (DATE MIN)
var today = new Date();
var yyyy = today.getFullYear();
var mm = today.getMonth() + 1;
var dd = today.getDate() + 1;

if(mm < 10) mm = '0' + mm;
if(dd < 10) dd = '0' + dd;

var blockdate = yyyy + '-' + mm + '-' + dd;
document.getElementById('res-date').setAttribute("min", blockdate);

