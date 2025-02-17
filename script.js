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

  document.querySelector(".name").innerHTML = data.name;
  document.getElementsByClassName("weather")[0].innerHTML =
    "погода: " + data.weather[0].description;
  document.querySelector(".temp").innerHTML =
    "температура воздуха: " + Math.round(data.main.temp);
  document.querySelector(".temp-feel").innerHTML =
    "ощущается как: " + Math.round(data.main.feels_like);
}
