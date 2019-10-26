//Проверка поддержки хранилища
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("e-mail");
} catch (err) {
  isStorageSupport = false;
}

// Оживление окна с обратной - Напишите нам
var writeLink=document.querySelector(".write-us");

if (writeLink) {
  var writePopup=document.querySelector(".write-us-popup");
  var writeClose=writePopup.querySelector(".btn-close");

  var writeForm=writePopup.querySelector("form");
  var writeName=writePopup.querySelector("[name=name]");
  var writeEmail=writePopup.querySelector("[name=e-mail]");
  var writeLetter=writePopup.querySelector("[name=letter]");

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
}

// Оживление окна с картой
var mapLink = document.querySelector(".image-map-link");

if (mapLink) {
  var mapPopup = document.querySelector(".map-popup");
  var mapClose = mapPopup.querySelector(".btn-close");

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

// Оживление окна с сообщением о добавлении в корзину
var cartLink = document.querySelectorAll(".btn-buy");

var cartPopup = document.querySelector(".cart-popup");
var cartClose = cartPopup.querySelector(".btn-close");
var cartContinue= cartPopup.querySelector(".btn-continue");

for (var i = 0; i<cartLink.length; i++) {
  cartLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
}

cartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

cartContinue.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
});
