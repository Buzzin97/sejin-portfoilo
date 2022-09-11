"use strict";
const navbar = document.querySelector('#navbar');
const home = document.querySelector('#home');
const homeSize = home.getBoundingClientRect().height
const navbarHight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navsize ${navbarHight}`);
  if(window.scrollY > homeSize) {
    navbar.classList.add('navbar--dark')
  } else {
    navbar.classList.remove('navbar--dark')
  }
})