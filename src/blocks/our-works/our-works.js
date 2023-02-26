import Swiper from 'swiper/bundle'

export default function ourWorks() {
  const wrapper = document.querySelector('.our-works')
  if (wrapper) {
    const worksSlider = new Swiper(wrapper, {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        767: {
          slidesPerView: 2
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      },
      pagination: {
        el: '.our-works .ui-swiper-bullets .swiper-pagination',
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
