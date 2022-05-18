console.log(window.innerWidth);

const question = document.querySelectorAll(".question p");
const answer = document.querySelectorAll(".answer");
const arrowIcon = document.querySelectorAll(".arrowIcon");
const li = document.querySelectorAll("li");

const r = document.querySelector(":root");
let rs = getComputedStyle(r);

const inactive = (e, i) => {
  li[i].classList.add("inactive");
  e.style.transform = "rotate(0deg)";
  question[i].style.color = rs.getPropertyValue("--dark-grayish-blue");
  question[i].style.fontWeight = "normal";
  answer[i].classList.remove("fadeIn");
  answer[i].classList.add("fadeOut");
};

const active = (e, i) => {
  li[i].classList.remove("inactive");
  e.style.transform = "rotate(180deg)";
  question[i].style.color = rs.getPropertyValue("--very-dark-desaturated-blue");
  question[i].style.fontWeight = "bold";
  answer[i].classList.add("fadeIn");
  answer[i].classList.remove("fadeOut");
};

arrowIcon.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let l = 0; l < li.length; l++) {
      if (li[l].classList.contains("active") && l !== i) {
        inactive(arrowIcon[l], l);
        li[l].classList.remove("active");
      }
    }
    li[i].classList.toggle("active");

    // e.style.transform = answer[i].classList.contains("active") === false ? "rotate(180deg)" : "rotate(0deg)";

    if (li[i].classList.contains("active")) {
      let height = parseInt(answer[i].offsetHeight) + parseInt(li[i].offsetHeight + 8);
      document.documentElement.style.setProperty("--heightUp", height + "px");
      active(e, i);
    } else {
      li[i].classList.add("inactive");
      inactive(e, i);
    }
  });
});
