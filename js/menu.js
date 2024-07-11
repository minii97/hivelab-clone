// 메뉴 버튼 누르면 overlay,menu가 is-active 클래스 추가
// 클로즈 버튼 누르면 overlay,menu의 is-active 클래스 삭제

const menuBtn = document.querySelector('.menu-btn')

const menu = document.querySelector('.menu')

function toggleMenuState(a) {
  menu.classList.add('is-active')
  menu.style.height = `${window.innerHeight}px`
  document.body.style.overflow = 'hidden'
  closeBtn = document.querySelector('.menu-close-btn')

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-active')
    document.body.style.overflow = 'auto'
  })
}

menuBtn.addEventListener('click', toggleMenuState)
