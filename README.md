# 하이브랩 클론 코딩

---

HTML + SCSS + JS (fullpage.js)를 활용한 하이브랩 웹사이트 클론 코딩

## 📆 제작기간

2024.07.06 ~ 2024.07.10 (약 4일)

- Markup ✍🏻 & Style 💄 2d
- Script 🔨 2d

## ⚙️ 개발환경

- HTML 5
- SCSS
- Javascript
  - fullpage.js (+ jQuery)

## 🧑🏻‍💻 프로젝트 목표

- 실무와 유사한 초기 개발 환경 설정 (node, .prettierrc, github, favicon)
- 시멘틱한 마크업을 위한 적절한 HTML 요소 및 속성 사용법
- SCSS 작성 문법 및 컴포넌트 단위별 파일 관리
- sprite 이미지를 통한 IS기법 활용
- 기존 사이트에서 구현되지 않던 모바일 / 태블릿 / 데스크탑의 분기별 반응형 스타일 구현
- fullpage.js 라이브러리를 활용한 풀페이지 웹사이트 구현

## 📌 주요 코드

### 1. main

- 마크업 구조

```html
<main class="main">
  <section class="home section"></section>
  <section class="second section"></section>
  <section class="third section"></section>
  <section class="fourth section"></section>
</main>
```

- 스크립트

```javascript
$(document).ready(function () {
  $('.main').fullpage({
    responsiveWidth: 1200,
    sectionSelector: '.section',
    lazyLoading: true,
    onLeave: function (index, nextIndex, direction) {
      if (index == 1 && direction == 'down') {
        gnb.classList.add('dark')
        pageNavNum.classList.add('dark')
        footerCopy.classList.add('dark')
        downloadBtn.classList.add('gray')
        pageNavNowNum.innerHTML = '02'
      }
      //   이하는 생략
      //   fullpage.js 옵션을 활용한 풀페이지 구현
    },
  })
})
```

### 2. header(gnb-nav)

- 마크업 구조

```html
<nav class="gnb-nav">
  <ul class="gnb-nav-list">
    <li class="gnb-nav-item"><a data-num="1" href="#">About</a></li>
    <li class="gnb-nav-item"><a data-num="2" href="#">Service</a></li>
    <li class="gnb-nav-item"><a data-num="3" href="#">Work</a></li>
    <li class="gnb-nav-item"><a data-num="4" href="#">People</a></li>
    <li class="gnb-nav-item"><a data-num="5" href="#">Contact</a></li>
  </ul>

  <div class="line"></div>
</nav>
```

```javascript
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

// 기존 사이트의 스타일에 맞춰 .line 요소의 width가 mouseover된 .gnb-nav-item 요소의
// clientWidth - 12px 된 값을 주고 left 값은 6px + 앞선 item 요소들의 clientWidth값을
// 더해 마치 line 요소가 mouseover된 요소를 따라오는 것 같은 효과를 준다.
```

### 3. scroll-top-btn

- 마크업 구조

```html
<button
  type="button"
  class="scroll-top-btn lg-hidden"
  aria-label="페이지 상단으로"
>
  <span></span>
</button>
<!-- body 태그의 자식 요소로 활용 -->
```

```javascript
const scrollTopBtn = document.querySelector('.scroll-top-btn')

function toggleScrollTopBtn(e) {
  if (e.deltaY > -1) scrollTopBtn.classList.add('is-active')
  else scrollTopBtn.classList.remove('is-active')
}
// "e.deltaY" 값을 이용해 음수 , 양수 판단으로 스크롤이 내려가면 버튼이 나오고 스크롤이 올라가면 버튼이 없어짐

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  scrollTopBtn.classList.remove('is-active')
}

scrollTopBtn.addEventListener('click', scrollToTop)

window.addEventListener('wheel', _.throttle(toggleScrollTopBtn, 300))
// throttle을 활용해 너무 wheel 이벤트의 과도한 콜백함수 실행을 방지하며 성능 이슈 방지
```
