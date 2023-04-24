import $ from 'jquery'
import IMask from 'imask'
import 'parsleyjs'
import 'parsleyjs/dist/i18n/ru'

export default function uiInput() {
  inputMask()
  validation()
}

function inputMask() {
  for (const input of document.querySelectorAll('[data-mask=tel]')) {
    IMask(input, {
      mask: '+{7} (000) 000-00-00'
    })
  }
  const telInput = document.querySelector('input[name="ORDER_PROP_3"]')
  if (telInput) {
    IMask(telInput, {
      mask: '+{7} (000) 000-00-00'
    })
  }
}

function validation() {
  $('[data-js-form]').parsley()
}
