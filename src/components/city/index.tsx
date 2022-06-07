import { useEffect, useState } from "react";
import { useGetWeatherByParamQuery } from "../../services/weather";
import { City } from "../../types/city";
import { Weather } from "../../types/weather";
import Clock from "react-live-clock";

interface CityProps {
  name: string;
}

export const CityTile = ({ name }: CityProps) => {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const { data, isLoading } = useGetWeatherByParamQuery(name);
  useEffect(() => {
    if (data) {
      setCity(data.location);
      setWeather(data.current);
    }
  }, [data]);
  return (
    <div
      style={{
        width: "40vh",
        height: "40vh",
      }}
    >
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: weather?.is_day
              ? "linear-gradient(#ffd700, #fffaf0)"
              : "linear-gradient(#191970, #483d8b)",
            borderRadius: 5,
          }}
        >
          <div
            style={{
              fontSize: "3rem",
            }}
          >
            {city?.name}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <div>{weather?.condition?.text}</div>
            <img src={weather?.condition?.icon} alt={"icon"} />
          </div>
          <div>
            {weather?.temp_c}&#176;C feels like {weather?.feelslike_c}&#176;C
          </div>
          <Clock
            format={"HH:mm:ss"}
            interval={1000}
            ticking
            timezone={city?.tz_id}
          />
        </div>
      )}
    </div>
  );
};
