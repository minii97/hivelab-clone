$(document).ready(function () {
  $('.main').fullpage({
    responsiveWidth: 1200,
    sectionSelector: '.section',
    onLeave: function (index, nextIndex, direction) {
      if (index == 1 && direction == 'down') {
        gnb.classList.add('dark')
        pageNavNum.classList.add('dark')
        footerCopy.classList.add('dark')
        downloadBtn.classList.add('gray')
        pageNavNowNum.innerHTML = '02'
      } else if (index == 2 && direction == 'up') {
        gnb.classList.remove('dark')
        pageNavNum.classList.remove('dark')
        footerCopy.classList.remove('dark')
        downloadBtn.classList.remove('gray')
        pageNavNowNum.innerHTML = '01'
      } else if (index == 2 && direction == 'down') {
        pageNavNowNum.innerHTML = '03'
      } else if (index == 3 && direction == 'down') {
        gnb.classList.remove('dark')
        pageNavNum.classList.remove('dark')
        footerCopy.classList.remove('dark')
        downloadBtn.classList.remove('gray')
        downloadBtn.classList.add('white')
        pageNavNowNum.innerHTML = '04'
      } else if (index == 3 && direction == 'up') {
        pageNavNowNum.innerHTML = '02'
      } else if (index == 4 && direction == 'up') {
        gnb.classList.add('dark')
        pageNavNum.classList.add('dark')
        footerCopy.classList.add('dark')
        downloadBtn.classList.add('gray')
        downloadBtn.classList.remove('white')
        pageNavNowNum.innerHTML = '03'
      }
    },
  })
})

prevBtn.addEventListener('click', () => {})

pageNavBtnContainer.addEventListener('click', (e) => {
  clickedBtn = e.target.parentNode

  if (clickedBtn == prevBtn) {
    $.fn.fullpage.moveSectionUp()
  } else if (clickedBtn == nextBtn) {
    $.fn.fullpage.moveSectionDown()
  }
})

// 1>2 2
// 2>1 1
// 2>3 2
// 3>4 4
// 4>3 3
