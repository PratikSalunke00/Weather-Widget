import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    city: "Delhi",
    feelslike: "25°C",
    temperature: "27°C",
    temperatureMin: "20°C",
    temperatureMax: "30°C",
    humidity: "60%",
    windspeed: "15 km/h",
    description: "Partly cloudy",
  });

  let updateWeatherData = (newData) => {
    setWeatherData(newData);
  };

  return (
    <div className="WeatherApp">
      <h2>Weather App</h2>
      <SearchBox updateWeatherData={updateWeatherData} />
      <InfoBox info={weatherData} />
    </div>
  );
}

export default WeatherApp;
