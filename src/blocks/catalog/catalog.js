export default function catalog() {
  for (const catalogElement of document.querySelectorAll('.catalog')) {
    for (const catalogItem of catalogElement.querySelectorAll('.catalog__item')) {
      catalogItem.addEventListener('click', function (event) {
        if (window.innerWidth < 768) {
          event.preventDefault()
          this.closest('.catalog__group').classList.add('active')
        }
      })
    }
    for (const catalogBack of catalogElement.querySelectorAll('.catalog__back .ui-button')) {
      catalogBack.addEventListener('click', function () {
        this.closest('.catalog__group').classList.remove('active')
      })
    }

    const list = catalogElement.querySelector('.catalog__list')
    const shadow = catalogElement.querySelector('.catalog__shadow')

    list.addEventListener('mouseenter', function () {
      shadow.classList.add('active')
    })
    list.addEventListener('mouseleave', function () {
      shadow.classList.remove('active')
    })
  }
}
