import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import.meta.env;
import "./InfoBox.css";
import { AcUnit, Thunderstorm, WbSunny } from "@mui/icons-material";

function InfoBox({ info }) {
  const API_INIT_URL = import.meta.env.VITE_INIT_URL;
  const API_HOT_URL = import.meta.env.VITE_HOT_URL;
  const API_COLD_URL = import.meta.env.VITE_COLD_URL;
  const API_RAINY_URL = import.meta.env.VITE_RAINY_URL;
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 70
                ? API_RAINY_URL
                : info.temperature > 25
                ? API_HOT_URL
                : info.temperature < 15
                ? API_COLD_URL
                : API_INIT_URL
            }
            title="green iguna" 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
              info.humidity > 70
                ? <Thunderstorm />
                : info.temperature > 25
                ? <WbSunny />
                : <AcUnit />
            }
              
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temperature}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temperature = {info.temperatureMin}&deg;C</p>
              <p>Max Temperature = {info.temperatureMax}&deg;C</p>
              <p>Wind Speed = {info.windSpeed} m/s</p>
              <p>
                The weather can be described as <i>{info.description}</i> and
                feels like {info.feelslike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
