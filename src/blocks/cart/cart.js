export default function cart() {
  document.addEventListener('click', (event) => {
    const cartButton = event.target.closest('.cart__button')
    if (cartButton) {
      cartButton.closest('.cart').querySelector('.cart__main').classList.add('active')
      document.documentElement.style.overflow = 'hidden'
    }

    const cartClose = event.target.closest('.cart__close')
    if (cartClose) {
      document.documentElement.style.overflow = ''
      cartClose.closest('.cart').querySelector('.cart__main').classList.remove('active')
    }
  })
}
