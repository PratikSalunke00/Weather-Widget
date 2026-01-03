import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { use, useState } from "react";
import.meta.env;

function SearchBox() {
  let [city, setCity] = useState("");

  const API_URL = VITE_API_URL;
  const API_KEY = VITE_API_KEY;

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    let result = {
      temperature: jsonResponse.main.temp,
      temperatureMin: jsonResponse.main.temp_min,
      temperatureMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      windSpeed: jsonResponse.wind.speed,
      description: jsonResponse.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for city:", city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <div className="SearchBox">
      <h3>Search for a Weather Location</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
      </form>

      <br />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </div>
  );
}

export default SearchBox;
