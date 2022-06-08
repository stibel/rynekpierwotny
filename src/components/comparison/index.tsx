import { useEffect } from "react";
import Clock from "react-live-clock";
import { SpinnerCircular } from "spinners-react";
import { useAppSelector } from "../../redux/hooks";
import {
  selectCity,
  selectCityToCompare,
} from "../../redux/slices/comparison-slice";
import { useGetWeatherByParamQuery } from "../../services/weather";
import { getRoundedAbs } from "../../utils/round";
import { NoResults } from "../no-results";

interface ComparisonProps {}

// eslint-disable-next-line no-empty-pattern
export const Comparison = ({}: ComparisonProps) => {
  const city = useAppSelector(selectCity);
  const cityToCompare = useAppSelector(selectCityToCompare);
  const { data, isLoading, error } = useGetWeatherByParamQuery(cityToCompare);

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
      {isLoading ? (
        <SpinnerCircular size={100} />
      ) : data && city && !error ? (
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
            <span>
              It is {getRoundedAbs(city.current.temp_c - data.current?.temp_c)}
              &#176;C
              {city.current.temp_c - data.current?.temp_c > 0
                ? " colder"
                : " warmer"}
            </span>
            <span>
              It feels{" "}
              {getRoundedAbs(
                city.current.feelslike_c - data.current?.feelslike_c
              )}
              &#176;C
              {city.current.feelslike_c - data.current?.feelslike_c > 0
                ? " colder"
                : " warmer"}
            </span>
            <span>
              Wind is{" "}
              {getRoundedAbs(city.current.wind_kph - data.current?.wind_kph)}
              km/h
              {city.current.wind_kph - data.current?.wind_kph > 0
                ? " slower"
                : " faster"}
            </span>
            <span>
              It is {Math.abs(city.current.humidity - data.current?.humidity)}%{" "}
              {city.current.humidity - data.current?.humidity
                ? " more"
                : " less"}{" "}
              humid
            </span>
          </div>
          <Clock
            format={"HH:mm:ss"}
            interval={1000}
            ticking
            timezone={data.location?.tz_id}
          />
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
};
