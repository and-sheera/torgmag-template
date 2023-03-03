import Swiper from 'swiper/bundle'

export default function footer() {
  const offecesSlider = new Swiper('.footer__offices-wrapp', {
    slidesPerView: 1.3,
    spaceBetween: 15,
    breakpoints: {
      767: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      1440: {
        slidesPerView: 3.5,
        spaceBetween: 25
      }
    },
    navigation: {
      nextEl: '.footer__offices-wrapp .ui-swiper-buttons .swiper-button-next',
      prevEl: '.footer__offices-wrapp .ui-swiper-buttons .swiper-button-prev'
    }
  })

  const toTopButton = document.querySelector('.footer__to-top')
  toTopButton.addEventListener('click', function () {
    window.scrollTo(0, 0)
  })
}
