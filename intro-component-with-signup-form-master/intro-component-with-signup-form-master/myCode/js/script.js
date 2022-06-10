let input = document.querySelectorAll("form input");
let par = document.querySelectorAll("form p");
let iconError = document.querySelectorAll(".icon-error");
const btn = document.querySelector(".bio button");

$(document).ready(function () {
  const rClass = (el, i) => {
    $(el).removeClass("ring-Red");
    $(par[i]).addClass("hidden");
    $(par[i]).addClass("-mt-5");
    $(iconError[i]).addClass("hidden");
  };

  const aClass = (el, i) => {
    $(el).addClass("ring-Red");
    $(par[i]).removeClass("hidden");
    $(par[i]).removeClass("-mt-5");
    $(iconError[i]).removeClass("hidden");
    $(par[i]).css("padding-bottom", "10px");
  };

  const editHeight = () => {
    $("form").removeClass("h-[420px]");
    $(btn).css("margin-top", "20px");
    $("form").css("padding-bottom", "32px");
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    $(btn).css("opacity", 0.7);
    input.forEach((el, i) => {
      // if error
      if ((el.value === "" && $(el).attr("type") != "email") || (el.value !== "abc@gmail.com" && $(el).attr("type") == "email")) {
        editHeight();
        aClass(el, i);
        $(el).removeAttr("placeholder");
        if ($(el).attr("type") == "email") {
          $(el).css("color", "#ff7a7a");
        }
      }

      // if no error
      else {
        if ($(el).attr("type") == "email") {
          $(el).css("color", "#000");
        }
        rClass(el, i);
      }
    });
  });
});
