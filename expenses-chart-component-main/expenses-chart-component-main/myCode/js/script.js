const day = document.querySelectorAll(".graf");
let dayHeight = [1240, 53.26, 60, 100, 70, 40, 31.07];
let maxHeight = 0;
dayHeight.forEach((height) => {
  if (height > maxHeight) {
    maxHeight = height;
  }
});

day.forEach((e, i) => {
  e.style.height = dayHeight[i] + "px";
  if (e.style.height == maxHeight + "px") {
    e.style.backgroundColor = "#76b5bc";
  }
  e.addEventListener("mouseenter", () => {
    e.style.opacity = "0.7";
    e.setAttribute("data-before", `$${dayHeight[i]}`);
    e.classList.add("active");
  });
  e.addEventListener("mouseleave", () => {
    e.style.opacity = "1";
    e.classList.remove("active");
  });
});
