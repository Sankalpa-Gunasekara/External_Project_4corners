"use strict";

const navBar = document.getElementById("navbar-wrapper");

window.addEventListener("scroll", function () {
  let scroll = this.scrollY;
  if (scroll > 200) {
    navBar.classList.add("nav-wrapper");
  } else {
    navBar.classList.remove("nav-wrapper");
  }
});
