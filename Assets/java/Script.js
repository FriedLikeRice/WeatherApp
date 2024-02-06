$(document).ready(function() {
    const apiKey = '182ed435c38003c8da10e0a1ce93ba78';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
    const city = 'New York';
    const units = 'imperial'; 
  
    const requestUrl = `${apiUrl}?q=${city}&units=${units}&appid=${apiKey}`;
  
    // Make API request
    $.get(requestUrl, function(data) {
      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
  
      // Display weather information
      $('#weather-info').html(weatherInfo);
    });
  });