var link = document.querySelector(".button-find-hotel");
var popup = document.querySelector(".main-booking-form");
var arrdate = popup.querySelector("[name=arrival-date]");

 popup.classList.add("hidden-booking-form");

  link.addEventListener("click", function(evt) {
    evt.preventDefault ();
    popup.classList.toggle("hidden-booking-form");
    arrdate.focus();
    console.log("Кликнули по кнопке бронирования");
  });
