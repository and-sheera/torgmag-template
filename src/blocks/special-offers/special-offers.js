import Swiper from 'swiper/bundle'

export default function specialOffers() {
  const offersSlider = new Swiper('.special-offers', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 90,
    navigation: {
      nextEl: '.special-offers .ui-swiper-buttons .swiper-button-next',
      prevEl: '.special-offers .ui-swiper-buttons .swiper-button-prev'
    },
    pagination: {
      el: '.special-offers .ui-swiper-bullets .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })

  for (const timer of document.querySelectorAll('.special-offers__timer')) {
    const stringDate = timer.dataset.endDate.split(' ').join('T') + ':00'
    if (stringDate) {
      const date = new Date(stringDate)

      if (date.valueOf() - Date.now() > 0) {
        updateTime(stringDate, timer)
        const intervalID = setInterval(() => {
          if (date.valueOf() - Date.now() < 0) {
            clearInterval(intervalID)
          } else {
            updateTime(stringDate, timer)
          }
        }, 1000)
      }
    }
  }
}

function updateTime(stringDate, timer) {
  const nums = timer.querySelectorAll('.special-offers__timer-num')
  const date = new Date(stringDate)

  const hours = nums[0]
  const min = nums[1]
  const sec = nums[2]

  const diff = date.valueOf() - Date.now()

  const diffInHours = Math.trunc(diff / 1000 / 60 / 60)
  hours.textContent = diffInHours
  const diffInMin = Math.trunc(diff / 1000 / 60) - diffInHours * 60
  min.textContent = diffInMin
  const diffInSec = Math.trunc(diff / 1000) - (diffInHours * 60 * 60) - diffInMin * 60
  sec.textContent = diffInSec
}
