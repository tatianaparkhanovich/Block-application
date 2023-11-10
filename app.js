//Часы
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("digitalClock").innerText =
    hour + ":" + min + ":" + sec;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

function updateTime(update) {
  if (update < 10) {
    return "0" + update;
  } else {
    return update;
  }
}
currentTime();

// Погодный витжет
const weather = document.querySelector(".weather");
const renderCurrentCard = (
  src,
  temper,
  weatherPrecipitation,
  speed,
  humidity
) => {
  weather.insertAdjacentHTML(
    "beforeend",
    `<div class="picture">
     <input type="text" class="city"placeholder="Minsk"  />
      <img
        class="current-picture"
        src="${src}"
        alt=""
      />
     <div class="weather-error"></div>
      <div class="description-container">
        <span class="temperature">${temper}</span>
        <span class="weather-description">${weatherPrecipitation}</span>
      </div>
      <div class="wind">Wind speed : ${speed}  m/s</div>
      <div class="humidity">Humidity : ${humidity} %</div>
    </div>`
  );
};
fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=c059564471597abd5ab4976660a429b6&units=metric"
)
  .then((response) => response.json())
  .then((obj) => {
    const weatherForecast = obj;
    const img = `https://openweathermap.org/img/wn/${weatherForecast.list[0].weather[0].icon}@2x.png`;
    const temperature = Math.round(weatherForecast.list[0].main.temp) + " ° С";
    const precipitation = weatherForecast.list[0].weather[0].main;
    const windSpeed = Math.round(weatherForecast.list[0].wind.speed);
    const humidity = Math.round(weatherForecast.list[0].main.humidity);
    renderCurrentCard(img, temperature, precipitation, windSpeed, humidity);
  });

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

//цытаты
const changeQuote = document.querySelector(".change-quote");
const quote = document.querySelector(".quote");
var arrQuote = [
  "«Our  life  is  what  our  thoughts  make  it », M. Aurelius",
  "«Success is not the key to happiness. Happiness is the key to success»",
  "«Learning is a treasure that will follow its owner everywhere» , Chinese Proverb",
  "«We do not remember days, we remember moments» , Cesare Pavese",
  "«Build your own dreams, or someone else will hire you to build theirs» ,Farrah Gray",
  "«If  you  love  something, set  it  free;  if  it  comes  back,  it’s  yours.  If  it  doesn’t  it  never  was» , Richard Bach",
  "«Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself» ,Rumi",
];
changeQuote.addEventListener("click", (e) => {
  const random = Math.floor(Math.random() * arrQuote.length);
  quote.innerHTML = arrQuote[random];
});

//Аудиоплеер
const playList = [
  {
    title: "Oneil feat. Aize - I Can't Stop (Yudzhin Radio Remix) ",
    src: "./music.mp3/Oneil feat. Aize - I Can't Stop (Yudzhin Radio Remix).mp3",
  },
  {
    title: "Anivar - On My Mind",
    src: "./music.mp3/Anivar - On My Mind.mp3",
  },
  {
    title: "Aize - Flowers",
    src: "./music.mp3/Aize - Flowers.mp3",
  },
  {
    title: "NK - Mama Alma",
    src: "./music.mp3/NK - Mama Alma.mp3",
  },
];
const player = document.querySelector(".player");
const playerControls = document.querySelector(".player-controls");
const play = document.querySelector(".play");
const playPrevs = document.querySelector(".play-prev");
console.log(playPrevs);
const playNexts = document.querySelector(".play-next ");
console.log(playNexts);
const audio = document.querySelector("audio");
const myPlayList = document.querySelector(".play-list");
let isPlay = false;
let playNum = 1;

function playAudio(title) {
  audio.src = `./music.mp3/${title}.mp3`;
  player.classList.add("plays");
  audio.play();
}
function pauseAudio() {
  player.remove("plays");
  audio.pause();
}
play.addEventListener("click", () => {
  let isPlay = player.classList.contains("plays");
  if (isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
});

const renderPlayListName = (name) => {
  myPlayList.insertAdjacentHTML(
    "beforeend",
    `<li class="play-item">${name.title}</li>
    `
  );
};

const playListActive = (num) => {
  li.forEach((item) => {
    item.classList.remove("item-active");
  });
  li[num].classList.add("item-active");
};
const playNext = (num) => {
  if (num === playList.length) {
    playNum = 1;
  } else {
    playNum = num + 1;
  }
  playAudio(playList[playNum - 1].title);
};

const playPrev = (num) => {
  if (num === 1) {
    playNum = playList.length;
  } else {
    playNum = num - 1;
  }
  playAudio(playList[playNum - 1].title);
};

playList.forEach((item) => {
  renderPlayListName(item);
});
const li = document.querySelectorAll(".play-item");
play.addEventListener("click", () => {
  if (!isPlay) {
    playAudio(playList[playNum - 1].title);
    play.classList.remove("pause");
    playListActive(playNum - 1);
  } else {
    playAudio(playList[playNum - 1].title);
    play.classList.add("pause");
  }
  play.classList.toggle("pause");
});
playNexts.addEventListener("click", () => {
  console.log(playNexts.addEventListener);
  isPlay = true;
  playNext(playNum);
  playListActive(playNum - 1);
});

playPrevs.addEventListener("click", () => {
  console.log(playPrevs.addEventListener);
  isPlay = true;
  playPrev(playNum);
  playListActive(playNum - 1);
});
