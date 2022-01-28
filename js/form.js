"use strict";
(function () {
  var URL = "form.php";

  var upload = function (data, onSuccess, form) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
      onSuccess(form);
    });

    xhr.open("POST", URL);
    xhr.send(data);
  };

  var forms = document.querySelectorAll(".callback-form");
  var submitButtons = document.querySelectorAll(".callback-form__submit");

  var onSuccess = function (form) {
    form.classList.remove("callback-form--loading");

    if (form.classList.contains("modal__form")) {
      modal.close();
    }

    success.open();
  };

  var addFormSubmitHandler = function (form, submitButton) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      submitButton.disabled = true;
      form.classList.add("callback-form--loading");
      upload(new FormData(form), onSuccess, form);
    });
  };

  for (var i = 0; i < forms.length; i++) {
    addFormSubmitHandler(forms[i], submitButtons[i]);
  }
})();
