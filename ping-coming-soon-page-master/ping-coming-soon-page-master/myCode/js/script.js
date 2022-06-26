const email = document.getElementById("email");

$(document).ready(function () {
  function validateEmail(email) {}

  $(".notify").click(function (e) {
    e.preventDefault();
    if ($(email).val() === "abc@gmail.com") {
      alert("Welcome!");
    } else {
      $(email).removeClass("ring-[#c2d3ff]");
      $(email).removeClass("focus:outline-slate-300");
      $(this).removeClass("-mt-3");
      if (window.innerWidth < 768) {
        $(this).css("margin-top", "16px");
      }
      $(".error-txt").removeClass("invisible");
    }
  });
});
