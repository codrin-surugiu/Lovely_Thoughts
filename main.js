"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModalBtn = document.querySelectorAll(".open-modal");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", showModal);
}

overlay.addEventListener("click", closeModal);
//
