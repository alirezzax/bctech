// import Swiper
import Swiper from 'swiper/swiper-bundle'

// responsive header navbar
const toggleBtn = document.querySelector('.navbar-toggle-btn')
const navbar = document.querySelector('.site-header__navbar')

toggleBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('close')
    navbar.classList.toggle('open')
})

//  Initialize Swiper
const swiper = new Swiper('.reviews', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button[data-type="next"]',
    prevEl: '.reviews__button[data-type="prev"]',
  },
})
