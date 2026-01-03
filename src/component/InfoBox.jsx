import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import.meta.env;
import "./InfoBox.css";
import { AcUnit, Thunderstorm, WbSunny } from "@mui/icons-material";

function InfoBox({ info }) {
  const API_INIT_URL = "https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const API_HOT_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop";
  const API_COLD_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8";
  const API_RAINY_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1200&auto=format&fit=crop";

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
