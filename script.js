const apiKey = "fdf7f0f8e946c54b36d201ff70f19477";
btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  event.preventDefault();
  const inputText = document.getElementById("input-text");
  const cityName = inputText.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=${cityName}&appid=${apiKey}`;
  checkWeather(apiUrl);
  console.log(cityName);
});

async function checkWeather(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data, "data");
  let weather;
  document.querySelector(".name").innerHTML = data.name;
  document.getElementsByClassName("weather")[0].innerHTML =
    "погода: " + data.weather[0].description;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  switch (data.weather[0].main) {
    case "Clouds":
      weather =
        '<img src="./weather_icons/icons8-cloud-lightning-100.png" alt="" />';
      break;
    default:
      weather = "lol";
  }
  document.getElementById("weather-img").innerHTML = weather;
}

// Weather condition:
// clear sky
// few clouds
// scattered clouds
// broken clouds
// shower rain
// rain
// thunderstorm
// snow
// mist
