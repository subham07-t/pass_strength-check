const input = document.querySelector("input");
const indicator = document.querySelector(".indicator");
const text = document.querySelector(".text");
const showHide_btn = document.querySelector("#showHideBtn");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /[!,@,#,$,%,^,,&,*,?,_,~,-,(,)]/;

function trigger() {
  if (input.value != "") {
    if (
      (input.value.length <= 3 && input.value.match(regExpWeak)) ||
      (input.value.length <= 3 && input.value.match(regExpMedium)) ||
      (input.value.length <= 3 && input.value.match(regExpStrong))
    ) {
      no = 1;
    }
    if (
      (input.value.length >= 6 &&
        input.value.match(regExpWeak) &&
        input.value.match(regExpMedium)) ||
      (input.value.length >= 6 &&
        input.value.match(regExpMedium) &&
        input.value.match(regExpStrong)) ||
      (input.value.length >= 6 &&
        input.value.match(regExpStrong) &&
        input.value.match(regExpWeak))
    ) {
      no = 2;
    }
    if (
      input.value.length >= 8 &&
      input.value.match(regExpWeak) &&
      input.value.match(regExpMedium) &&
      input.value.match(regExpStrong)
    ) {
      no = 3;
    }

    if (no == 1) {
      indicator.style.display = "flex";
      weak.style.display = "block";
      medium.style.display = "none";
      strong.style.display = "none";
      text.style.display = "block";
      text.textContent = "Your Password is too weak";
      text.classList.add("text-weak");
    }
    if (no == 2) {
      medium.style.display = "block";
      text.textContent = "Your Password is medium";
      text.classList.remove("text-weak");
      text.classList.add("text-medium");
    } else {
      medium.style.display = "none";
      text.classList.remove("text-medium");
      text.classList.add("text-weak");
    }
    if (no == 3) {
      medium.style.display = "block";
      strong.style.display = "block";
      text.textContent = "Your Password is strong";
      text.classList.remove("text-medium");
      text.classList.remove("text-weak");
      text.classList.add("text-strong");
    } else {
      strong.style.display = "none";
      text.classList.remove("text-strong");
    }
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
    text.classList.remove("text-weak");
    text.classList.remove("text-medium");
    text.classList.remove("text-strong");
  }
}

function showHideBtn() {
  if (input.type === "password") {
    input.type = "text";
    showHide_btn.classList.add("fa-eye");
    showHide_btn.classList.remove("fa-eye-slash");
  } else {
    input.type = "password";
    showHide_btn.classList.remove("fa-eye");
    showHide_btn.classList.add("fa-eye-slash");
  }
}
