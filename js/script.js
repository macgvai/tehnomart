let modalFeedback = document.querySelector('.modal-feedback');
let modalFeedbackShow = document.querySelector('.btn-delivery-contacts');
let modalFeedbackClose = modalFeedback.querySelector('.modal-close');
let modalFeedbackName = modalFeedback.querySelector('.feedback-name');
let modalFeedbackEmail = modalFeedback.querySelector('.feedback-mail');
let modalFeedbackForm = modalFeedback.querySelector('.feedback-form');

let modalMap = document.querySelector('.modal-map');
let modalMapShow = document.querySelector('.img-map');
let modalMapClose = modalMap.querySelector('.modal-close');



modalFeedbackShow.addEventListener('click', function() {
  modalFeedback.classList.add('modal-show');
  modalFeedbackName.focus();
});

modalFeedbackClose.addEventListener('click', function() {
  modalFeedback.classList.remove('modal-show');
});

modalFeedbackForm.addEventListener('submit', function (evt) {
  if (!modalFeedbackName.value || !modalFeedbackEmail.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  }

});


modalMapShow.addEventListener('click', function () {
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
