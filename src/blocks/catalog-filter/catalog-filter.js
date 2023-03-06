export default function catalogFilter() {
  const catalogFilterElement = document.querySelector('.catalog-filter')
  if (catalogFilterElement) {
    catalogFilterElement.querySelector('.catalog-filter__bottom .ui-button').addEventListener('click', function () {
      const uiRange = catalogFilterElement.querySelector('.ui-range')
      if (uiRange) {
        uiRange.querySelector('.ui-range__body').noUiSlider.set(uiRange.dataset.start.split(','))
      }

      const uiSelect = catalogFilterElement.querySelector('.ui-select select')
      if (uiSelect) {
        uiSelect.tomselect.setValue('default')
      }
    })
  }
}
