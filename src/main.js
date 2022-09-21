"use strict";
let nightDayBtn = document.querySelector(".daynight");
let photo = document.querySelector(".photo");
const isDarkMode = localStorage.getItem("dark-mode");
const isDarkClass = document.querySelector(":root").classList.contains("dark");

if (isDarkMode && !isDarkClass) {
  document.querySelector(":root").classList.add("dark");
  nightDayBtn.value = "day";
}

function isDark() {
  return localStorage.getItem("dark-mode");
}

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

(function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById(
      "app"
    ).innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
})();

//menu
const menu1 = document.querySelector(".menu1");
const menuChildren = menu1.children;

let ChilmenuChildren = document.querySelectorAll("ul li ul li");
//console.log(ChilmenuChildren);
for (let i = 0; i < menuChildren.length; i++) {
  menuChildren[i].addEventListener("mouseover", function () {
    console.log(this.firstElementChild);
    if (this.firstElementChild != null) {
      this.firstElementChild.style.display = "block";
      nightDayBtn.style.display = "block";
    }
  });
  menuChildren[i].addEventListener("mouseout", function () {
    //console.log(this.firstElementChild.children);
    if (this.firstElementChild) {
      this.firstElementChild.style.display = "none";
      nightDayBtn.style.display = "block";
    }
  });
}
const usesInPage = document.querySelector(".usesInPage");
const closeBtn = document.querySelector(".close");
const aboutMe = document.querySelector(".aboutMe");
const xBtn = document.querySelector(".close1");
const contact = document.querySelector(".contact-box");
const btnContact = document.querySelector(".sendBtn");
const closeBtn3 = document.querySelector(".close3");
const errorMessage = document.querySelector(".error-message");
const inpName = document.querySelectorAll(".field");

menuChildren[0].addEventListener("click", function (event) {
  aboutMe.style.display = "block";
});
xBtn.addEventListener("click", function (event) {
  aboutMe.style.display = "none";
});

menuChildren[2].addEventListener("click", function (event) {
  usesInPage.style.display = "block";
});
closeBtn.addEventListener("click", function (event) {
  usesInPage.style.display = "none";
});
menuChildren[3].addEventListener("click", function (event) {
  contact.style.display = "block";
});
closeBtn3.addEventListener("click", function (event) {
  contact.style.display = "none";
  errorMessage.textContent = "";
  inpName[0].placeholder = "Your Name";
  inpName[1].placeholder = "Your email";
  inpName[2].placeholder = "Message";
});

btnContact.addEventListener("click", function (e) {
  e.preventDefault();
  if (inpName[1].value.indexOf("@") === -1) {
    errorMessage.textContent += "EMAIL: is not correct! ";
  }
  if (inpName[0].value.length < 3) {
    errorMessage.textContent += " NAME: Your name is to short! ";
  }
  if (inpName[2].value.length < 3) {
    errorMessage.textContent += " MESSAGE: Please write sth! ";
  }
  alert("if You completed correctly, I will answer A$AP");
});
