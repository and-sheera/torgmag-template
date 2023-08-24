export default function catalog() {
  for (const catalogElement of document.querySelectorAll('.catalog')) {
    for (const catalogItem of catalogElement.querySelectorAll('.catalog__item')) {
      catalogItem.addEventListener('click', function (event) {
        if (window.innerWidth <= 767) {
          event.preventDefault()
          const index = [...this.parentNode.children].indexOf(this)
          const inner = catalogElement.querySelectorAll('.catalog__inner')[index]
          if (inner) inner.classList.add('active')
        }
      })

      catalogItem.addEventListener('mouseenter', function () {
        if (window.innerWidth > 767) {
          const hoverItem = catalogElement.querySelector('.catalog__item.hover')
          if (hoverItem) hoverItem.classList.remove('hover')
          this.classList.add('hover')
          const index = [...this.parentNode.children].indexOf(this)
          const inner = catalogElement.querySelectorAll('.catalog__inner')[index]
          const activeInner = catalogElement.querySelector('.catalog__inner.active')
          if (activeInner && inner !== activeInner) activeInner.classList.remove('active')
          if (inner) inner.classList.add('active')

          let top
          const catalogTop = catalogElement.getBoundingClientRect().top
          const headerHeight = document.querySelector('.header__bot').offsetHeight
          if (catalogTop > 0) {
            top = catalogTop > headerHeight ? 0 : (headerHeight - catalogTop) + 20
          } else {
            top = headerHeight + Math.abs(catalogTop) + 20
          }
          catalogElement.style.setProperty('--inner-top', `${top}px`)
        }
      })
    }
    for (const catalogBack of catalogElement.querySelectorAll('.catalog__back .ui-button')) {
      catalogBack.addEventListener('click', function () {
        this.closest('.catalog__inner').classList.remove('active')
      })
    }

    const body = catalogElement.querySelector('.catalog__body')
    const shadow = catalogElement.querySelector('.catalog__shadow')

    body.addEventListener('mouseenter', function () {
      shadow.classList.add('active')
    })
    body.addEventListener('mouseleave', function () {
      shadow.classList.remove('active')
      const activeInner = catalogElement.querySelector('.catalog__inner.active')
      if (activeInner) activeInner.classList.remove('active')

      const hoverItem = catalogElement.querySelector('.catalog__item.hover')
      if (hoverItem) hoverItem.classList.remove('hover')
    })
  }
}
