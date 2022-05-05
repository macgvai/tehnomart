let modalFeedback = document.querySelector('.modal-feedback');
let modalFeedbackShow = document.querySelector('.btn-delivery-contacts');
let modalFeedbackClose = modalFeedback.querySelector('.modal-close');
let modalFeedbackName = modalFeedback.querySelector('.feedback-name');
let modalFeedbackEmail = modalFeedback.querySelector('.feedback-mail');
let modalFeedbackText = modalFeedback.querySelector('.feedback-textarea');
let modalFeedbackForm = modalFeedback.querySelector('.feedback-form');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

modalFeedbackShow.addEventListener('click', function() {
  modalFeedback.classList.add('modal-show');
  if (storage || storageEmail) {
    modalFeedbackName.value = storage;
    modalFeedbackEmail.value = storageEmail;
    modalFeedbackText.focus();
  } else {
    modalFeedbackName.focus();
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
      modalMap.classList.remove("modal-show");
    }
  }
});

modalFeedbackClose.addEventListener('click', function() {
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove("modal-error");
});

modalFeedbackForm.addEventListener('submit', function (evt) {
  if (!modalFeedbackName.value || !modalFeedbackEmail.value || !modalFeedbackText.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
    } else {
    if (isStorageSupport) {
      localStorage.setItem("name", modalFeedbackName.value);
      localStorage.setItem("email", modalFeedbackEmail.value);    }
  }
});



let modalMap = document.querySelector('.modal-map');
let modalMapShow = document.querySelector('.link-map');
let modalMapClose = modalMap.querySelector('.modal-close');

modalMapShow.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

modalMapClose.addEventListener('click', function () {
  modalMap.classList.remove('modal-show');
});



// var link = document.querySelector(".btn_popup");
// var popup = document.querySelector(".modul");
// var close = popup.querySelector(".modul_close");
// var yourname = popup.querySelector("[name=yourname]");
// var form = popup.querySelector("form");
// var email = popup.querySelector("[name=email]");
// var mapOpen = document.querySelector(".js_open_map");
// var mapPopup = document.querySelector(".modul_map");
// var mapClose = mapPopup.querySelector(".modul_close");

// link.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.add("modul_close_show");
// yourname.focus();
// });
// close.addEventListener("click", function(event){
// event.preventDefault();
// popup.classList.remove("modul_close_show");
// });
// form.addEventListener("submit", function(event){
// if (!yourname.value || !email.value){
// event.preventDefault();
// console.log("Нужно ввести логин и пароль");
// }
// });


// mapOpen.addEventListener("click", function(event){
// event.preventDefault();
// mapPopup.classList.add("modul_close_show");
// });
// mapClose.addEventListener("click", function (event){
// event.preventDefault();
// mapPopup.classList.remove("modul_close_show");
// });
