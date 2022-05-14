let arrColor = ["--bright-orange", "--dark-cyan", "--very-dark-cyan"];
const btnLearn = document.querySelectorAll(".btn-learn a");
const r = document.querySelector(":root");

btnLearn.forEach((e, i) => {
  e.addEventListener("click", () => {
    let rs = getComputedStyle(r);
    let btnField = document.querySelectorAll(".btn-learn")[i];
    btnField.style.backgroundColor = rs.getPropertyValue(arrColor[i]);
    e.style.color = "lightgray";
    btnField.style.border = "2px solid lightgray";
  });
});
