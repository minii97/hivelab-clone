// gnb-nav에 마우스오버하면 .line요소가 width가 각 요소의 client width로 적용
// left값은 앞에 마크업 된 item 요소의 client-width + 6px

const gnbNavList = gnb.querySelector('.gnb-nav-list')
const gnbNavItem = gnbNavList.querySelectorAll('a')
const gnbUtilItem = gnb.querySelectorAll('.gnb-util-item')

const gnbNavLine = gnb.querySelector('.line')

let headerSelect

let gnbNavLineLeftValue = 6
let gnbNavLineWidth

function visibleHeaderSelect(item) {
  item.addEventListener('mouseover', (e) => {
    headerSelect = e.currentTarget.children[1]
    if (headerSelect !== undefined) headerSelect.classList.add('is-active')
    else return false

    item.addEventListener('mouseout', () => {
      headerSelect.classList.remove('is-active')
    })
  })
}

function toggleStateOfGnbLine(e) {
  if (e.target.parentNode.classList.contains('gnb-nav-item')) {
    gnbNavLineWidth = e.target.clientWidth - 12
    gnbNavLine.style.width = `${gnbNavLineWidth}px`
    gnbNavLine.style.opacity = 1

    if (e.target.getAttribute('data-num') == 1) {
      gnbNavLine.style.left = `${gnbNavLineLeftValue}px`
    } else if (e.target.getAttribute('data-num') == 2) {
      gnbNavLine.style.left = `${
        gnbNavLineLeftValue + gnbNavItem[0].clientWidth
      }px`
    } else if (e.target.getAttribute('data-num') == 3) {
      gnbNavLine.style.left = `${
        gnbNavLineLeftValue +
        gnbNavItem[0].clientWidth +
        gnbNavItem[1].clientWidth
      }px`
    } else if (e.target.getAttribute('data-num') == 4) {
      gnbNavLine.style.left = `${
        gnbNavLineLeftValue +
        gnbNavItem[0].clientWidth +
        gnbNavItem[1].clientWidth +
        gnbNavItem[2].clientWidth
      }px`
    } else if (e.target.getAttribute('data-num') == 5) {
      gnbNavLine.style.left = `${
        gnbNavLineLeftValue +
        gnbNavItem[0].clientWidth +
        gnbNavItem[1].clientWidth +
        gnbNavItem[2].clientWidth +
        gnbNavItem[3].clientWidth
      }px`
    }
  }

  e.currentTarget.addEventListener('mouseout', () => {
    gnbNavLineWidth = 0
    gnbNavLine.style.width = `${gnbNavLineWidth}px`
    gnbNavLine.style.opacity = 0
  })
}

gnbNavList.addEventListener('mouseover', (e) => {
  toggleStateOfGnbLine(e)
})

gnbUtilItem.forEach((item) => {
  visibleHeaderSelect(item)
})
