import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelsLike: 26.47,
    humidity: 21,
    temp: 26.47,
    tempMax: 26.47,
    tempMin: 26.47,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }

  return (
    <>
      <div>
        <h1>Weather App by Sanket</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} />
      </div>
    </>
  );
}
