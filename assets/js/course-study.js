"use strict";

const cityCardOne = document.getElementById("city-card-1");
const cityCardTwo = document.getElementById("city-card-2");
const cityCardThree = document.getElementById("city-card-3");

const cityContentOne = document.getElementById("city-content-1");
const cityContentTwo = document.getElementById("city-content-2");
const cityContentThree = document.getElementById("city-content-3");

cityCardOne.addEventListener("click", function () {
  cityCardOne.classList.add("city-card-selected");
  cityCardTwo.classList.remove("city-card-selected");
  cityCardThree.classList.remove("city-card-selected");

  cityContentOne.classList.remove("d-none");
  cityContentTwo.classList.add("d-none");
  cityContentThree.classList.add("d-none");
});
cityCardTwo.addEventListener("click", function () {
  cityCardTwo.classList.add("city-card-selected");
  cityCardOne.classList.remove("city-card-selected");
  cityCardThree.classList.remove("city-card-selected");

  cityContentTwo.classList.remove("d-none");
  cityContentOne.classList.add("d-none");
  cityContentThree.classList.add("d-none");
});
cityCardThree.addEventListener("click", function () {
  cityCardThree.classList.add("city-card-selected");
  cityCardOne.classList.remove("city-card-selected");
  cityCardTwo.classList.remove("city-card-selected");

  cityContentThree.classList.remove("d-none");
  cityContentOne.classList.add("d-none");
  cityContentTwo.classList.add("d-none");
});
