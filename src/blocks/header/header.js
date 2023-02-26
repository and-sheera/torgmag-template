/* eslint-disable sonarjs/no-duplicate-string */
import TomSelect from 'tom-select'

export default function header() {
  selects()
  fixedHeader()
  burger()
  search()

  headerDimensions()
  window.addEventListener('load', headerDimensions)
  window.addEventListener('resize', headerDimensions)
}

function selects() {
  for (const select of document.querySelectorAll('.header [data-ts-select]')) {
    const tomSelect = new TomSelect(select, {
      controlInput: undefined,
      onDropdownOpen() {
        const wrapper = select.parentElement.querySelector('.ts-wrapper')
        const list = select.parentElement.querySelector('.ts-dropdown')
        if ((window.innerHeight - wrapper.getBoundingClientRect().top - wrapper.clientHeight) < list.clientHeight) {
          wrapper.classList.add('dropdown-top')
        } else {
          wrapper.classList.remove('dropdown-top')
        }
      },
      onDropdownClose() {
        tomSelect.blur()
      }
    })
  }
}

function fixedHeader() {
  const header = document.querySelector('.header')
  let headerHeight = header.offsetHeight
  window.addEventListener('load', () => { headerHeight = header.offsetHeight })
  document.addEventListener('scroll', () => {
    if (window.innerWidth > 767) {
      let timeoutID
      if (window.scrollY > headerHeight) {
        header.style.height = `${headerHeight}px`
        header.classList.add('header--fixed')
        timeoutID = setTimeout(() => {
          header.classList.add('header--fixed-transform')
        }, 200)
      } else {
        if (timeoutID) timeoutID.clearInterval()
        header.style.height = ''
        header.classList.remove('header--fixed-transform')
        header.classList.remove('header--fixed')
      }
    }
  })
  window.addEventListener('resize', () => {
    header.style.height = ''
    header.classList.remove('header--fixed-transform')
    header.classList.remove('header--fixed')
  })
}

function burger() {
  const header = document.querySelector('.header')
  const burgerButton = header.querySelector('.header__burger-btn')
  burgerButton.addEventListener('click', () => {
    header.classList.toggle('header--burger')
    if (header.classList.contains('header--burger')) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      for (const catalogGroup of header.querySelectorAll('.catalog__group.active')) {
        catalogGroup.classList.remove('active')
      }
    }
  })
}

function search() {
  const searchBlock = document.querySelector('.js-type-res')
  if (searchBlock) {
    const input = searchBlock.querySelector('.header__input')
    const results = searchBlock.querySelector('.header__results')
    input.addEventListener('input', function () {
      if (this.value === '') {
        results.classList.remove('active')
      } else {
        results.classList.add('active')
      }
    })
    input.addEventListener('blur', function () {
      results.classList.remove('active')
    })
    input.addEventListener('focus', function () {
      if (this.value !== '') {
        results.classList.add('active')
      }
    })
  }
}

function headerDimensions() {
  const headerHeight = document.querySelector('.header').offsetHeight
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
}
