"use strict";
// navbar 스크롤링에 따라 색 변하기
const navbar = document.querySelector('#navbar');
const navbarHight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHight) {
    navbar.classList.add('navbar--dark')
  } else {
    navbar.classList.remove('navbar--dark')
  }
})

// navbar 메뉴 클릭시 화면 스크롤링
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
  scrollIntoView(link)
})

// handle click me 
const contactBtn = document.querySelector(".home__contact")
contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact')
} )

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY/homeHeight
})

// Show "arrow up" //
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight/2) {
    arrowUp.classList.add('visible')
  } else {
    arrowUp.classList.remove('visible')
  }
})

// Handle click on the "arrow up" button //
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home')
})

// Projects
const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null) {
    return;
  }

  // 버튼 눌르면 그 선택된 창에 색깔을 유지하기
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  // 카테고리 누르면 그에 해당하는 정보만 나오게 해주기 + 애니메이션
  projectContainer.classList.add('anim-out')
  setTimeout(() => {
    projects.forEach((project) => {
      if(filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible')
      } else {
        project.classList.add('invisible')
      }
    })
    projectContainer.classList.remove('anim-out')
  },300)
})



// 누르면 스크롤되는 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({behavior:'smooth'})
}