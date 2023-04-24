import Swiper from 'swiper/bundle'
import { Fancybox } from '@fancyapps/ui'

export default function product() {
  Fancybox.bind('[data-fancybox="product-gallery"]', {
    hideScrollbar: false,
    Toolbar: {
      display: {
        right: ['close']
      }
    }
  })

  document.addEventListener('click', (event) => {
    const plusButton = event.target.closest('[data-quantity-plus]')
    if (plusButton) {
      const input = plusButton.parentElement.querySelector('.product__quantity-input')
      input.value = +input.value + 1
    }

    const minusButton = event.target.closest('[data-quantity-minus]')
    if (minusButton) {
      const input = minusButton.parentElement.querySelector('.product__quantity-input')
      if (input.value !== '1') input.value = +input.value - 1
    }

    const deleteButton = event.target.closest('.product__delete')
    if (deleteButton) {
      const productCard = deleteButton.closest('.product')
      productCard.style.opacity = '0'
      setTimeout(() => {
        productCard.remove()
      }, 300)
    }

    const buyButton = event.target.closest('.product__button')
    if (buyButton) {
      buyButton.classList.add('product__button--bought')
      const img = buyButton.closest('.product').querySelector('img')
      if (img) {
        productAnimation(img, '.header__cart .cart__button')
      }

      if (buyButton.dataset.textEnd && buyButton.lastChild) {
        buyButton.lastChild.textContent = buyButton.dataset.textEnd
      }
    }

    const favButton = event.target.closest('.product__favorite')
    if (favButton) {
      favButton.classList.toggle('active')
      if (favButton.classList.contains('active')) {
        const img = favButton.closest('.product').querySelector('img')
        if (img) {
          productAnimation(img, '.header__favorites .favorites__button')
        }
      }
    }
  })

  document.addEventListener('change', (event) => {
    const input = event.target.closest('.product__quantity-input')
    if (input) {
      input.value = Math.max(1, Number.parseInt(input.value) || 1)
    }
  })

  window.initAllProductSlider = initAllProductSlider
  window.initAllProductSlider()
}

function productAnimation(img, targetSelector) {
  const animImg = document.createElement('img')
  animImg.className = 'product__img-anim'
  animImg.src = img.src
  animImg.style.top = `${img.getBoundingClientRect().top}px`
  animImg.style.left = `${img.getBoundingClientRect().left}px`
  animImg.style.width = `${img.offsetWidth}px`
  animImg.style.height = `${img.offsetHeight}px`
  document.body.append(animImg)
  setTimeout(() => {
    const target = document.querySelector(targetSelector)
    animImg.classList.add('translate')
    animImg.style.top = `${target.getBoundingClientRect().top + target.offsetHeight / 2}px`
    animImg.style.left = `${target.getBoundingClientRect().left + target.offsetWidth / 2}px`
    setTimeout(() => {
      animImg.remove()
    }, 550)
  }, 300)
}

function initAllProductSlider() {
  for (const sliderContainer of document.querySelectorAll('.product__slider')) {
    if (!sliderContainer.classList.contains('swiper-initialized')) {
      const slider = new Swiper(sliderContainer, {
        watchSlidesProgress: true,
        slidesPerView: 1,
        simulateTouch: false,
        pagination: {
          el: sliderContainer.querySelector('.ui-swiper-bullets .swiper-pagination'),
          type: 'bullets'
        }
      })

      const slidersNumber = sliderContainer.querySelectorAll('.product__img').length

      sliderContainer.addEventListener('mousemove', function (event) {
        const width = sliderContainer.offsetWidth
        const sectionWidth = width / slidersNumber
        const localX = event.clientX - sliderContainer.getBoundingClientRect().left
        const nextActiveIndex = Math.trunc(localX / sectionWidth)
        if (nextActiveIndex !== slider.activeIndex) slider.slideTo(nextActiveIndex, 0)
      })

      sliderContainer.addEventListener('mouseout', function () {
        slider.slideTo(0, 0)
      })
    }
  }
}
