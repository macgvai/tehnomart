let modalCartBtn = document.querySelectorAll('.item-buy-btn');
let modalCart = document.querySelector('.add-to-cart');
let modalCartClose = modalCart.querySelector('.modal-close');



for (let i = 0; i < modalCartBtn.length; i++) {
  modalCartBtn[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCart.classList.add('modal-show');
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("modal-show")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-show");
    }
  }
});

modalCartClose.addEventListener('click', function () {
  modalCart.classList.remove('modal-show');
});
