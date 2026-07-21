const inputBox = document.querySelector(".input-box");
const serachBtn = document.getElementById("serachBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
  const api_key = "ac5282a885d6c13797fdd9b5089cb063";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  const weather_data = await fetch(url).then(response => response.json());

  
  console.log(weather_data);


}
serachBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
