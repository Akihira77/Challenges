const btnShare = document.querySelector(".share");
const rowBot = document.querySelector(".rowbottom");
const shareTo = document.querySelector(".share-to-link");

$(document).ready(function () {
  $(btnShare).click(function (e) {
    e.preventDefault();
    $(rowBot).toggleClass("invisible");

    $(shareTo).toggleClass("invisible");

    if (!shareTo.classList.contains("invisible")) {
      $(this).css("background-color", "hsl(217, 19%, 35%)");
      $(".share svg path").attr("fill", "#fff");
      // $(btnShare).css("top", "13px");
    } else {
      $(this).css("background-color", "hsl(210, 46%, 95%)");
      $(".share svg path").attr("fill", "#6E8098");
      // $(btnShare).css("top", "0px");
    }
  });
});
