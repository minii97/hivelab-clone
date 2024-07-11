const scrollTopBtn = document.querySelector('.scroll-top-btn')

function toggleScrollTopBtn(e) {
  if (e.deltaY > -1) scrollTopBtn.classList.add('is-active')
  else scrollTopBtn.classList.remove('is-active')
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  scrollTopBtn.classList.remove('is-active')
}

scrollTopBtn.addEventListener('click', scrollToTop)

window.addEventListener('wheel', _.throttle(toggleScrollTopBtn, 300))
