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

// 누르면 스크롤되는 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({behavior:'smooth'})
}