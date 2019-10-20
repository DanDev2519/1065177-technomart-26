// Оживление окна с обратной - Напишите нам
var writeLink=document.querySelector(".write-us");

var writePopup=document.querySelector(".write-us-popup");
var writeClose=writePopup.querySelector(".btn-close");

var writeForm=writePopup.querySelector("form");
var writeName=writePopup.querySelector("[name=name]");
var writeEmail=writePopup.querySelector("[name=e-mail]");
var writeLetter=writePopup.querySelector("[name=letter]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("e-mail");
} catch (err) {
  isStorageSupport = false;
}

writeLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");

  if (storageName) {
    writeName.value = storageName;
    writeEmail.focus();
    if (storageEmail) {
      writeEmail.value = storageEmail;
      writeLetter.focus();
    }
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
  if (!writeName.value || !writeEmail.value || !writeLetter.value) {
    evt.preventDefault();
    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeName.value);
      localStorage.setItem("e-mail", writeEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writePopup.classList.contains("modal-show")) {
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
  }
});
