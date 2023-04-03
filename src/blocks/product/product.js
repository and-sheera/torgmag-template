export default function product() {
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
      const img = buyButton.closest('.product').querySelector('img')
      const cartButton = document.querySelector('.header__cart .cart__button')
      if (img) {
        productAnimation(img, cartButton)
      }
    }

    const favButton = event.target.closest('.product__favorite')
    if (favButton) {
      favButton.classList.toggle('active')
      if (favButton.classList.contains('active')) {
        const img = favButton.closest('.product').querySelector('img')
        const favoriteButton = document.querySelector('.header__favorites .favorites__button')
        if (img) {
          productAnimation(img, favoriteButton)
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
}

function productAnimation(img, target) {
  const animImg = document.createElement('img')
  animImg.className = 'product__img-anim'
  animImg.src = img.src
  animImg.style.top = `${img.getBoundingClientRect().top}px`
  animImg.style.left = `${img.getBoundingClientRect().left}px`
  animImg.style.width = `${img.offsetWidth}px`
  animImg.style.height = `${img.offsetHeight}px`
  document.body.append(animImg)
  setTimeout(() => {
    animImg.classList.add('translate')
    animImg.style.top = `${target.getBoundingClientRect().top + target.offsetHeight / 2}px`
    animImg.style.left = `${target.getBoundingClientRect().left + target.offsetWidth / 2}px`
    setTimeout(() => {
      animImg.remove()
    }, 550)
  }, 300)
}
