export default function cart() {
  for (const cartElement of document.querySelectorAll('.cart')) {
    cartElement.querySelector('.cart__button').addEventListener('click', function () {
      cartElement.querySelector('.cart__main').classList.add('active')
      document.documentElement.style.overflow = 'hidden'
    })

    cartElement.querySelector('.cart__close').addEventListener('click', function () {
      document.documentElement.style.overflow = ''
      cartElement.querySelector('.cart__main').classList.remove('active')
    })
  }
}
