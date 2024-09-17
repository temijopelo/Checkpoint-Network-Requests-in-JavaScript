const API_KEY = "a10f36b9320ef56593eb3913738f0672";

const btn = document.getElementById("getWeather");

btn.addEventListener("click", function () {
  const city = document.getElementById("city").value;
  if (city) {
    getWeatherData(city);
  } else {
    alert("please enter a city name");
  }
});

const getWeatherData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        document.getElementById("location").textContent = data.name;
        document.getElementById("temperature").textContent = data.main.temp;
        document.getElementById("description").textContent =
          data.weather[0].description;
      } else {
        alert("city not found");
      }
    })
    .catch((error) => {
      console.error("error fetching the weather data: ", error);
    });
};
