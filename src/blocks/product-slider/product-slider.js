import Swiper from 'swiper/bundle'

export default function productSlider() {
  const wrapper = document.querySelector('.product-slider')
  if (wrapper) {
    const articleSlider = new Swiper(wrapper, {
      watchSlidesProgress: true,
      slidesPerView: 1.2,
      spaceBetween: 20,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      },
      navigation: {
        nextEl: '.product-slider .ui-swiper-buttons .swiper-button-next',
        prevEl: '.product-slider .ui-swiper-buttons .swiper-button-prev'
      }
    })
  }
}
