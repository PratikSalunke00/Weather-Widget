import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { use, useState } from "react";

function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for city:", city);
    setCity("");
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
