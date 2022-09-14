import myJson from "./data.json" assert { type: "json" };

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const dataTitles = myJson.map((item) => item.title.toLowerCase());
const dailyTime = myJson.map((item) => item.timeframes.daily);
const weeklyTime = myJson.map((item) => item.timeframes.weekly);
const monthlyTime = myJson.map((item) => item.timeframes.monthly);
const more = document.querySelectorAll(".more");

more.forEach((item, index) => {
  const arr = ["Work", "Play", "Study", "Exercise", "Social", "Self Care"];
  item.addEventListener("click", () => {
    console.log("yes did click " + arr[index]);
  });
});

dataTitles.forEach((item, index) => {
  if (dailyTime[index].current === 1) {
    document.querySelector(`.${item} .daily .current`).textContent = dailyTime[index].current + "hr";
    document.querySelector(`.${item} .daily .previous`).textContent = "Previous - " + dailyTime[index].previous + "hrs";
  } else {
    document.querySelector(`.${item} .daily .current`).textContent = dailyTime[index].current + "hrs";
    document.querySelector(`.${item} .daily .previous`).textContent = "Previous - " + dailyTime[index].previous + "hrs";
  }

  document.querySelector(`.${item} .weekly .current`).textContent = weeklyTime[index].current + "hrs";
  document.querySelector(`.${item} .weekly .previous`).textContent = "Previous - " + weeklyTime[index].previous + "hrs";

  document.querySelector(`.${item} .monthly .current`).textContent = monthlyTime[index].current + "hrs";
  document.querySelector(`.${item} .monthly .previous`).textContent = "Previous - " + monthlyTime[index].previous + "hrs";
});

const setDisplay = (items_show, display, items_hide_1, items_hide_2) => {
  items_show.forEach((item) => {
    item.style.display = display;
    if (display == "block") {
      document.querySelectorAll(".previous").forEach((e) => {
        e.style.marginTop = "20px";
      });
    }
  });
  items_hide_1.forEach((item) => {
    item.style.display = "none";
  });
  items_hide_2.forEach((item) => {
    item.style.display = "none";
  });
};

const setTextColor = (items_active, items_inactive_1, items_inactive_2) => {
  items_active.classList.add("text-white");
  items_inactive_1.classList.remove("text-white");
  items_inactive_2.classList.remove("text-white");
};

daily.addEventListener("click", () => {
  const size = window.innerWidth;
  setTextColor(daily, weekly, monthly);

  setDisplay(document.querySelectorAll(".daily"), size > 500 ? "block" : "flex", document.querySelectorAll(".weekly"), document.querySelectorAll(".monthly"));
});

weekly.addEventListener("click", () => {
  const size = window.innerWidth;
  setTextColor(weekly, daily, monthly);

  setDisplay(document.querySelectorAll(".weekly"), size > 500 ? "block" : "flex", document.querySelectorAll(".daily"), document.querySelectorAll(".monthly"));
});

monthly.addEventListener("click", () => {
  const size = window.innerWidth;
  setTextColor(monthly, weekly, daily);

  setDisplay(document.querySelectorAll(".monthly"), size > 500 ? "block" : "flex", document.querySelectorAll(".weekly"), document.querySelectorAll(".daily"));
});
