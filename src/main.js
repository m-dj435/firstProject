"use strict";
function isDark() {
  return localStorage.getItem("dark-mode");
}
function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById(
      "app"
    ).innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}
counter();

//day/night

let nightDayBtn = document.querySelector(".daynight");
let photo = document.querySelector(".photo");

nightDayBtn.addEventListener("click", function (event) {
  if (isDark()) {
    localStorage.removeItem("dark-mode");
    nightDayBtn.value = "night";
  } else {
    localStorage.setItem("dark-mode", "set");
    nightDayBtn.value = "day";
  }
  document.querySelector(":root").classList.toggle("dark");
});
