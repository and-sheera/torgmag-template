import noUiSlider from 'nouislider'
import wNumb from 'wnumb'
import IMask from 'imask'

export default function uiRange() {
  const rangeBlocks = document.querySelectorAll(('.ui-range'))
  if (rangeBlocks) {
    for (const rangeBlock of rangeBlocks) {
      const rangeBody = rangeBlock.querySelector('.ui-range__body')
      const inputs = [...rangeBlock.querySelectorAll('.ui-range__input')]
      const inputHiddenValues = [...rangeBlock.querySelectorAll('.ui-range__input-val')]
      const startValue = rangeBlock.dataset.start.split(',')
      const connectValue = startValue.length === 1 ? 'lower' : true
      const stepMin = Number(rangeBlock.dataset.min)
      const stepMax = Number(rangeBlock.dataset.max)

      noUiSlider.create(rangeBody, {
        start: startValue,
        connect: connectValue,
        step: 1,
        range: {
          min: stepMin,
          max: stepMax
        },
        format: wNumb(
          {
            decimals: 0,
            thousand: ' '
          }
        )
      })

      rangeBody.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle]
        inputHiddenValues[handle].textContent = values[handle]
      })

      for (const [index, input] of inputs.entries()) {
        IMask(input, {
          mask: Number,
          scale: 0,
          signed: false,
          thousandsSeparator: ' '
        })

        input.addEventListener('input', function () {
          inputHiddenValues[index].textContent = this.value === '' ? '0' : this.value
        })

        input.addEventListener('change', function () {
          const data = index === 0 ? [+(this.value).replace(/\s/g, ''), undefined] : [undefined, +(this.value).replace(/\s/g, '')]
          rangeBody.noUiSlider.set(data)
        })
      }
    }
  }
}
