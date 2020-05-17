import React, { useState, useEffect } from "react";

const WeatherComponent = (props) => {
  const [weather, setWeather ] = useState(null);

  useEffect(() => {
    const geocoder = new google.maps.Geocoder();
    const address = `${props.location}`

    geocoder.geocode( { 'address': address}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        let latitude = results[0].geometry.location.lat()
        let longitude = results[0].geometry.location.lng()

        fetch(`/api/v1/weather?lat=${latitude}&lon=${longitude}`)
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`
              error = new Error(errorMessage);
            throw error;
          }
        })
        .then(response => response.json())
        .then(body => setWeather(body))
        .catch(error => console.error(`Error in fetch: ${error.message}`))
      }
    })
  })

  let weatherData = weather ? (<ul>
    <li>Weather:{weather.weather[0].main}</li>
    <li>Description: {weather.weather[0].description}</li>
    <li>Temperature: {((weather.main.temp - 273.15) * 9/5 + 32).toFixed(0)}°F</li>
    <li>Feels like: {((weather.main.feels_like - 273.15) * 9/5 + 32).toFixed(0)}°F</li>
  </ul>) : <></>

  return (
    <div>
      <p className="weather">Current Weather Conditions:</p>
        {weatherData}
    </div>
  )
}

export default WeatherComponent

function loadJS(src) {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
