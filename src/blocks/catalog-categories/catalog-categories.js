export default function catalogCategories() {
  for (const catalogCategoriesElement of document.querySelectorAll('.catalog-categories')) {
    const moreButton = catalogCategoriesElement.querySelector('.catalog-categories__more .ui-button')
    if (moreButton) {
      moreButton.addEventListener('click', function () {
        catalogCategoriesElement.classList.remove('catalog-categories--short')
      })
    }
  }
}
