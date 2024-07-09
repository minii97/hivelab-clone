// 다운로드 버튼 누르면 introduction이 등장
// 클로즈 버튼 누르면 introduction이 사라짐
// 이는 is-active 클래스의 토글로 이루어진다.

const downloadMenu = document.querySelector('.introduction')
const overlay = document.querySelector('.overlay')

const checkBox = document.querySelectorAll('.introduction-list input')

function toggleDownloadMenuState() {
  downloadMenu.classList.add('is-active')
  overlay.classList.add('is-active')
  document.body.style.overflow = 'hidden'
  closeBtn = document.querySelector('.introduction-close-btn')

  closeBtn.addEventListener('click', () => {
    downloadMenu.classList.remove('is-active')
    overlay.classList.remove('is-active')
    document.body.style.overflow = 'auto'

    checkBox.forEach((data) => {
      data.checked = false
    })
  })
}

downloadBtn.addEventListener('click', toggleDownloadMenuState)
