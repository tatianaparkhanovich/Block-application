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
