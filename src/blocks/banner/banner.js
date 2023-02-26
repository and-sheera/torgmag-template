import Swiper from 'swiper/bundle'

export default function banner() {
  const bannerSlider = new Swiper('.banner', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.banner .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.banner .ui-swiper-buttons .swiper-button-next',
      prevEl: '.banner .ui-swiper-buttons .swiper-button-prev'
    }
  })
}
