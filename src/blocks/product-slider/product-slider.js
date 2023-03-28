import Swiper from 'swiper/bundle'

export default function productSlider() {
  for (const wrapper of document.querySelectorAll('.product-slider')) {
    const isSizeXs = wrapper.classList.contains('product-slider--xs')
    const articleSlider = new Swiper(wrapper, {
      watchSlidesProgress: true,
      slidesPerView: 1.2,
      spaceBetween: 20,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: isSizeXs ? 15 : 30
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: isSizeXs ? 15 : 40
        }
      },
      navigation: {
        nextEl: wrapper.querySelector('.product-slider .ui-swiper-buttons .swiper-button-next'),
        prevEl: wrapper.querySelector('.product-slider .ui-swiper-buttons .swiper-button-prev')
      }
    })
  }
}
