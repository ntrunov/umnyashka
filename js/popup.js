"use strict";

(function () {
  var Popup = function (popupNode, modifier, elementsToOpen, elementsToClose) {
    this.popupNode = popupNode;
    this.modifier = modifier;
    this.elementsToOpen = elementsToOpen;
    this.elementsToClose = elementsToClose;
    this.addListenersToOpen();
    this.addListenersToClose();
    this.addEscPressHandler();
    this.overlayClickHandler();
  };

  Popup.prototype.addListenersToOpen = function () {
    for (var i = 0; i < this.elementsToOpen.length; i++) {
      this.addOpenHandler(this.elementsToOpen[i]);
    }
  };

  Popup.prototype.addOpenHandler = function (element) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      this.open();
    });
  };

  Popup.prototype.open = function () {
    this.popupNode.classList.add(this.modifier);
    this.overlay.classList.add("overlay--show");
  };

  Popup.prototype.addListenersToClose = function () {
    for (var i = 0; i < this.elementsToClose.length; i++) {
      this.addCloseHandler(this.elementsToClose[i]);
    }
  };

  Popup.prototype.addCloseHandler = function (element) {
    element.addEventListener("click", () => {
      this.close();
    });
  };

  Popup.prototype.close = function () {
    this.popupNode.classList.remove(this.modifier);
    this.overlay.classList.remove("overlay--show");
  };

  Popup.prototype.ESC_KEYCODE = 27;

  Popup.prototype.addEscPressHandler = function () {
    document.addEventListener("keydown", (e) => {
      if (event.keyCode === this.ESC_KEYCODE) {
        this.close();
      }
    });
  };

  Popup.prototype.overlay = document.querySelector(".overlay");

  Popup.prototype.overlayClickHandler = function () {
    this.overlay.addEventListener("click", () => {
      this.close();
    })
  };

  var modalNode = document.querySelector(".modal");
  var modalOpenButtons = document.querySelectorAll(".button--modal");
  var modalCloseButtons = modalNode.querySelectorAll(".modal__close");
  window.modal = new Popup(modalNode, "modal--show", modalOpenButtons, modalCloseButtons);

  var successNotification = document.querySelector(".notification--success");
  var successCross = successNotification.querySelector(".notification__close");
  var successAcceptButton = successNotification.querySelector(".notification__confirm");
  var successCloseButtons = [];
  successCloseButtons.push(successCross);
  successCloseButtons.push(successAcceptButton);
  window.success = new Popup(successNotification, "notification--show", [], successCloseButtons);

  var errorNotification = document.querySelector(".notification--error");
  var errorCross = errorNotification.querySelector(".notification__close");
  var errorAcceptButton = errorNotification.querySelector(".notification__confirm");
  var errorCloseButtons = [];
  errorCloseButtons.push(errorCross);
  errorCloseButtons.push(errorAcceptButton);
  window.error = new Popup(errorNotification, "notification--show", [], errorCloseButtons);
})();
