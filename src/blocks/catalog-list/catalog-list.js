export default function catalogList() {
  const element = document.querySelector('.catalog-list')
  if (element) {
    manageAlignHeads()
    window.addEventListener('resize', function () {
      manageAlignHeads()
    })
  }
}

function manageAlignHeads() {
  const heads = [...document.querySelectorAll('.catalog-list__head')]
  if (window.innerWidth > 1440) {
    alignHeads(3, heads)
  } else if (window.innerWidth > 767) {
    alignHeads(2, heads)
  }
}

function alignHeads(columns, heads) {
  let index = 0
  while (heads[index]) {
    const heights = []
    for (let rowIndex = 0; rowIndex < columns; rowIndex++) {
      if (heads[index + rowIndex]) {
        const head = heads[index + rowIndex]
        head.style.minHeight = ''
        heights.push(head.offsetHeight)
      }
    }
    const maxHeight = Math.max(...heights)
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      if (heads[index + rowIndex]) {
        const head = heads[index + rowIndex]
        head.style.minHeight = `${maxHeight}px`
      }
    }
    index += columns
  }
}
