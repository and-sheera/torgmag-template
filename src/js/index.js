import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import uiRange from '../blocks/_ui/ui-range/ui-range'
import uiSelect from '../blocks/_ui/ui-select/ui-select'
import header from '../blocks/header/header'
import banner from '../blocks/banner/banner'
import specialOffers from '../blocks/special-offers/special-offers'
import ourWorks from '../blocks/our-works/our-works'
import articlesSlider from '../blocks/articles-slider/articles-slider'
import footer from '../blocks/footer/footer'
import catalog from '../blocks/catalog/catalog'
import cart from '../blocks/cart/cart'
import product from '../blocks/product/product'
import catalogList from '../blocks/catalog-list/catalog-list'
import catalogFilter from '../blocks/catalog-filter/catalog-filter'
import productSlider from '../blocks/product-slider/product-slider'
import catalogControl from '../blocks/catalog-control/catalog-control'
import catalogCategories from '../blocks/catalog-categories/catalog-categories'

document.addEventListener('DOMContentLoaded', function () {
  header()
  banner()
  specialOffers()
  ourWorks()
  articlesSlider()
  footer()
  catalog()
  cart()
  product()
  catalogList()
  catalogFilter()
  catalogControl()
  catalogCategories()
  productSlider()
  uiInput()
  uiRange()
  uiSelect()
})

window.addEventListener('load', () => {
  document.body.classList.remove('transition-disabled')
})
