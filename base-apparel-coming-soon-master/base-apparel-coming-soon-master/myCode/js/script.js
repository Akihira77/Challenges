let btnLog = document.querySelector(".arrow");
let width = window.innerWidth;
let heroImage = document.querySelector(".img img");

$(document).ready(function () {
  if (width < 600) {
    $("#email").attr("maxlength", "25");
    $(heroImage).attr("src", "images/hero-mobile.jpg");
  }

  btnLog.addEventListener("click", () => {
    let email = $("#email").val();
    if (email === "abc") {
      alert("Success");
      // $(".error").addClass("invisible");
      // $(btnLog).removeClass("active");
    } else {
      // alert("Error");
      $(".error").removeClass("invisible");
      $(".tandaSeru").removeClass("invisible");
      $(btnLog).addClass("active");
      $("#email").css("border", "2px solid hsl(0, 93%, 68%)");
    }
  });
});
