import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { use, useState } from "react";


function SearchBox({ updateWeatherData }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);


  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temperature: jsonResponse.main.temp,
        temperatureMin: jsonResponse.main.temp_min,
        temperatureMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        windSpeed: jsonResponse.wind.speed,
        description: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("Searching for city:", city);
      setCity("");
      let newData = await getWeatherInfo();
      updateWeatherData(newData);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
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

      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Search
      </Button>

      {error && <p style={{ color: "red" }}>Error to fetching data. Please try again.</p>}
    </div>
  );
}

export default SearchBox;
