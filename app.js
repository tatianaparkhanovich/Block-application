

//Аудиоплеер
const playList = [
  {
    title: "Anivar - Nothing to hide ",
    src: "./music.mp3/Anivar - Nothing to hide.mp3",
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
const playNexts = document.querySelector(".play-next ");
const audio = document.querySelector("audio");
const myPlayList = document.querySelector(".play-list");
let isPlay = false;
let playNum = 1;

function playAudio(title) {
  audio.src = `./music.mp3/${title}.mp3`;
  audio.play();
}
play.addEventListener("click", () => {
  let isPlay = player.classList.contains("pause");
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
  console.log(play.addEventListener);
  if (!isPlay) {
    playAudio("Anivar - Nothing to hide");
    play.classList.remove("pause");
    playListActive(playNum - 1);
  } else {
    play.classList.add("pause");
  }
  play.classList.toggle("pause");
});

playNexts.addEventListener("click", () => {
  isPlay = true;
  playNext(playNum);
  playListActive(playNum - 1);
});

playPrevs.addEventListener("click", () => {
  isPlay = true;
  playPrev(playNum);
  playListActive(playNum - 1);
});
