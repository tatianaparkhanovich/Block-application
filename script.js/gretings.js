//Месяц день недели число
const data = document.querySelector(".date");

let months = [
  "Januar",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September ",
  "October",
  "November ",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let d = new Date();
let n = d.getDay();
let c = d.getMonth();
const today = new Date();
data.innerHTML = `${days[n]}, ${months[c]} ${today.getDate()}`;

//Приветствие
let time = new Date();
let hour = time.getHours();
const greeting = document.querySelector(".greeting");
const times = hour;
if (times >= 6 && times < 12) {
  greeting.textContent = "Good morning";
} else if (times >= 12 && times < 18) {
  greeting.textContent = " Good day";
} else if (times >= 18 && times < 24) {
  greeting.textContent = "Good evening";
} else if (times >= 0 && times < 6) {
  greeting.textContent = "Good night";
}

const input = document.querySelector(".name");
input.addEventListener("change", () => {
  localStorage.setItem("name", input.value);
});
input.value = localStorage.getItem("name");
