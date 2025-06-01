async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "7d9a3e738e553c65b99475ed8bd2f68c"; // Replace with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherInfo").innerHTML = "City not found.";
      return;
    }

const weatherInfo = `
  <div class="weather-card city-card">
    <span class="emoji">🏙️</span>
    <p>City: ${data.name}</p>
  </div>
  <div class="weather-card">
    <span class="emoji">🌡️</span>
    <p>Temperature: ${data.main.temp} °C</p>
  </div>
  <div class="weather-card">
    <span class="emoji">🌥️</span>
    <p>Weather: ${data.weather[0].main}</p>
  </div>
  <div class="weather-card">
    <span class="emoji">💧</span>
    <p>Humidity: ${data.main.humidity}%</p>
  </div>
  <div class="weather-card">
  <center>
    <span class="emoji">💨</span>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    </center>
  </div>
`;


    document.getElementById("weatherInfo").innerHTML = weatherInfo;
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weatherInfo").innerHTML = "Something went wrong.";
  }
}
