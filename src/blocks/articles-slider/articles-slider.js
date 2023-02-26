import Swiper from 'swiper/bundle'

export default function articlesSlider() {
  const wrapper = document.querySelector('.articles-slider')
  if (wrapper) {
    const articleSlider = new Swiper(wrapper, {
      slidesPerView: 1.2,
      spaceBetween: 20,
      breakpoints: {
        767: {
          slidesPerView: 2
        },
        1440: {
          slidesPerView: 3
        }
      },
      pagination: {
        el: '.articles-slider .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: wrapper.parentElement.querySelector('.ui-swiper-buttons .swiper-button-next'),
        prevEl: wrapper.parentElement.querySelector('.ui-swiper-buttons .swiper-button-prev')
      }
    })
  }
}
