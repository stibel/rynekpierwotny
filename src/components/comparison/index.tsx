import { useEffect } from "react";
import { ImCross } from "react-icons/im";
import Clock from "react-live-clock";
import { SpinnerCircular } from "spinners-react";
import { useAppSelector } from "../../redux/hooks";
import {
  selectCity,
  selectCityToCompare
} from "../../redux/slices/comparison-slice";
import { useGetWeatherByParamQuery } from "../../services/weather";

interface ComparisonProps {}

// eslint-disable-next-line no-empty-pattern
export const Comparison = ({}: ComparisonProps) => {
  const city = useAppSelector(selectCity);
  const cityToCompare = useAppSelector(selectCityToCompare);
  const { data, isLoading, error } = useGetWeatherByParamQuery(cityToCompare);
  useEffect(
    () => console.log(city, cityToCompare, data),
    [city, cityToCompare, data]
  );

  return (
    <div
      style={{
        width: "30vw",
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && <SpinnerCircular size={100} />}
      {error && (
        <div
          style={{ display: "flex", flexFlow: "column", textAlign: "center" }}
        >
          <ImCross size={250} />
          <h1>No results</h1>
        </div>
      )}
      {data && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: data.current?.is_day ? "#000" : "#fff",
            backgroundImage: data.current?.is_day
              ? "linear-gradient(#ffd700, #fffaf0)"
              : "linear-gradient(#191970, #483d8b)", //change tile display color based on daytime
            borderRadius: 5,
          }}
        >
          <div
            style={{
              fontSize: "3rem",
            }}
          >
            {data.location?.name}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <span>{data.current?.condition?.text}</span>
            <img src={data.current?.condition?.icon} alt={"icon"} />
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "auto auto",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
              columnGap: "10%",
            }}
          >
            <span>{data.current?.temp_c}&#176;C</span>
            <span>Feels like {data.current?.feelslike_c}&#176;C</span>
            <span>Wind {data.current?.wind_kph}km/h</span>
            <span>Humidity {data.current?.humidity}% </span>
          </div>
          <Clock
            format={"HH:mm:ss"}
            interval={1000}
            ticking
            timezone={data.location?.tz_id}
          />
        </div>
      )}
    </div>
  );
};
