import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import uiRange from '../blocks/_ui/ui-range/ui-range'
import uiSelect from '../blocks/_ui/ui-select/ui-select'
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
import galleryScripts from '../blocks/gallery/gallery'
import sliderInit from '../blocks/slider/slider'
import tabs from '../blocks/tabs/tabs'
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
  // uiDatepicker()
  // uiInput()
  // uiRange()
  // uiSelect()
  // uiTextarea()
  // uiTooltip()
  // sliderInit()
  // galleryScripts()
  // tabs()
})

window.addEventListener('load', () => {
  document.body.classList.remove('transition-disabled')
})
