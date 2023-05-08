"use strict";

const cityCardOne = document.getElementById("city-card-1");
const cityCardTwo = document.getElementById("city-card-2");
const cityCardThree = document.getElementById("city-card-3");

cityCardOne.addEventListener("click", function () {
  cityCardOne.classList.add("city-card-selected");
  cityCardTwo.classList.remove("city-card-selected");
  cityCardThree.classList.remove("city-card-selected");
});
cityCardTwo.addEventListener("click", function () {
  cityCardTwo.classList.add("city-card-selected");
  cityCardOne.classList.remove("city-card-selected");
  cityCardThree.classList.remove("city-card-selected");
});
cityCardThree.addEventListener("click", function () {
  cityCardThree.classList.add("city-card-selected");
  cityCardOne.classList.remove("city-card-selected");
  cityCardTwo.classList.remove("city-card-selected");
});
