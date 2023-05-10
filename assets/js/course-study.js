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

const moratuwaFacilities = document.getElementById("facilities-one");
const moratuwaCourses = document.getElementById("courses-one");
const moratuwaOurTeam = document.getElementById("our-team-one");

const moratuwaFacilitiesContent = document.getElementById(
  "facilities-content-one"
);
const moratuwaCoursesContent = document.getElementById("courses-content-one");
const moratuwaOurTeamContent = document.getElementById("our-team-content-one");

moratuwaFacilitiesContent.classList.remove("d-none");
moratuwaCoursesContent.classList.add("d-none");
moratuwaOurTeamContent.classList.add("d-none");

moratuwaFacilities.addEventListener("click", function (event) {
  event.stopPropagation();
  moratuwaFacilitiesContent.classList.remove("d-none");
  moratuwaCoursesContent.classList.add("d-none");
  moratuwaOurTeamContent.classList.add("d-none");
});
moratuwaCourses.addEventListener("click", function (event) {
  event.stopPropagation();
  moratuwaCoursesContent.classList.remove("d-none");
  moratuwaFacilitiesContent.classList.add("d-none");
  moratuwaOurTeamContent.classList.add("d-none");
});
moratuwaOurTeam.addEventListener("click", function (event) {
  event.stopPropagation();
  moratuwaOurTeamContent.classList.remove("d-none");
  moratuwaFacilitiesContent.classList.add("d-none");
  moratuwaCoursesContent.classList.add("d-none");
});

const welisaraFacilities = document.getElementById("facilities-two");
const welisaraCourses = document.getElementById("courses-two");
const welisaraOurTeam = document.getElementById("our-team-two");

const welisaraFacilitiesContent = document.getElementById(
  "facilities-content-two"
);
const welisaraCoursesContent = document.getElementById("courses-content-two");
const welisaraOurTeamContent = document.getElementById("our-team-content-two");

welisaraFacilitiesContent.classList.remove("d-none");
welisaraCoursesContent.classList.add("d-none");
welisaraOurTeamContent.classList.add("d-none");

welisaraFacilities.addEventListener("click", function (event) {
  event.stopPropagation();
  welisaraFacilitiesContent.classList.remove("d-none");
  welisaraCoursesContent.classList.add("d-none");
  welisaraOurTeamContent.classList.add("d-none");
});
welisaraCourses.addEventListener("click", function (event) {
  event.stopPropagation();
  welisaraCoursesContent.classList.remove("d-none");
  welisaraFacilitiesContent.classList.add("d-none");
  welisaraOurTeamContent.classList.add("d-none");
});
welisaraOurTeam.addEventListener("click", function (event) {
  event.stopPropagation();
  welisaraOurTeamContent.classList.remove("d-none");
  welisaraFacilitiesContent.classList.add("d-none");
  welisaraCoursesContent.classList.add("d-none");
});

const peradeniyaFacilities = document.getElementById("facilities-three");
const peradeniyaCourses = document.getElementById("courses-three");
const peradeniyaOurTeam = document.getElementById("our-team-three");

const peradeniyaFacilitiesContent = document.getElementById(
  "facilities-content-three"
);
const peradeniyaCoursesContent = document.getElementById(
  "courses-content-three"
);
const peradeniyaOurTeamContent = document.getElementById(
  "our-team-content-three"
);

peradeniyaFacilitiesContent.classList.remove("d-none");
peradeniyaCoursesContent.classList.add("d-none");
peradeniyaOurTeamContent.classList.add("d-none");

peradeniyaFacilities.addEventListener("click", function (event) {
  event.stopPropagation();
  peradeniyaFacilitiesContent.classList.remove("d-none");
  peradeniyaCoursesContent.classList.add("d-none");
  peradeniyaOurTeamContent.classList.add("d-none");
});
peradeniyaCourses.addEventListener("click", function (event) {
  event.stopPropagation();
  peradeniyaCoursesContent.classList.remove("d-none");
  peradeniyaFacilitiesContent.classList.add("d-none");
  peradeniyaOurTeamContent.classList.add("d-none");
});
peradeniyaOurTeam.addEventListener("click", function (event) {
  event.stopPropagation();
  peradeniyaOurTeamContent.classList.remove("d-none");
  peradeniyaFacilitiesContent.classList.add("d-none");
  peradeniyaCoursesContent.classList.add("d-none");
});
