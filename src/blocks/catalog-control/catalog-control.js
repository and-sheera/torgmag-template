export default function catalogControl() {
  document.addEventListener('click', (event) => {
    const catalogViewButton = event.target.closest('.catalog-control__view-btn:not(.active)')
    const catalogRowsModif = 'catalog-inner--rows'
    const catalogLinesModif = 'catalog-inner--lines'

    if (catalogViewButton) {
      catalogViewButton.closest('.catalog-control__view').querySelector('.catalog-control__view-btn.active').classList.remove('active')
      catalogViewButton.classList.add('active')
      if (catalogViewButton.dataset.view) {
        let catalogModificator = ''
        switch (catalogViewButton.dataset.view) {
        case 'rows': {
          catalogModificator = catalogRowsModif
          break
        }
        case 'lines': {
          catalogModificator = catalogLinesModif
          break
        }
        default: {
          break
        }
        }

        for (const catalogElement of document.querySelectorAll('.catalog-inner')) {
          catalogElement.classList.remove(catalogRowsModif)
          catalogElement.classList.remove(catalogLinesModif)
          catalogElement.classList.add(catalogModificator)
        }
      }
    }
  })
}
