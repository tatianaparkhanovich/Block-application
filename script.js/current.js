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
