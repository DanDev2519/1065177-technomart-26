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
