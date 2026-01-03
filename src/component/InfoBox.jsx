import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import.meta.env;
import "./InfoBox.css";

function InfoBox() {
  const API_INIT_URL = import.meta.env.VITE_INIT_URL;

  let info = {
    city: "Delhi",
    feelslike: "25°C",
    temperature: "27°C",
    temperatureMin: "20°C",
    temperatureMax: "30°C",
    humidity: "60%",
    windspeed: "15 km/h",
    description: "Partly cloudy",
  };

  return (
    <div className="InfoBox">
      <h1>Weather Information - {info.description}</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={API_INIT_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperature = {info.temperature}</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temperature = {info.temperatureMin}</p>
            <p>Max Temperature = {info.temperatureMax}</p>
            <p>Wind Speed = {info.windspeed}</p>
            <p>The weather can be described as <i>{info.description}</i> and feels like {info.feelslike}</p>
          </Typography>
        </CardContent>

      </Card>
    </div>
  );
}

export default InfoBox;
