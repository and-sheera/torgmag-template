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
  })

  document.addEventListener('change', (event) => {
    const input = event.target.closest('.product__quantity-input')
    if (input) {
      input.value = Math.max(1, Number.parseInt(input.value) || 1)
    }
  })
}
