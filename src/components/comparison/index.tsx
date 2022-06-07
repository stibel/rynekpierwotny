import { useState } from "react";
import { ImCross } from "react-icons/im";
import Select from "react-select";
import { SpinnerCircular } from "spinners-react";
import { useGetWeatherByParamQuery } from "../../services/weather";
import Clock from "react-live-clock";

interface ComparisonProps {
  cityToCompare: string;
}

export const Comparison = ({ cityToCompare }: ComparisonProps) => {
  const [comparedCity, setComparedCity] = useState<string>("Warsaw");

  const {
    data: cityData,
    isLoading: cityLoading,
    error: cityError,
  } = useGetWeatherByParamQuery(cityToCompare);
  const {
    data: comparedCityData,
    isLoading: comparedCityLoading,
    error: comparedCityError,
  } = useGetWeatherByParamQuery(comparedCity);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "40vh",
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cityLoading && <SpinnerCircular size={100} />}
        {cityError && (
          <div
            style={{ display: "flex", flexFlow: "column", textAlign: "center" }}
          >
            <ImCross size={250} />
            <h1>No results</h1>
          </div>
        )}
        {cityData && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: cityData.current?.is_day ? "#000" : "#fff",
              backgroundImage: cityData.current?.is_day
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
              {cityData.location?.name}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              <span>{cityData.current?.condition?.text}</span>
              <img src={cityData.current?.condition?.icon} alt={"icon"} />
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
              <span>{cityData.current?.temp_c}&#176;C</span>
              <span>Feels like {cityData.current?.feelslike_c}&#176;C</span>
              <span>Wind {cityData.current?.wind_kph}km/h</span>
              <span>Humidity {cityData.current?.humidity}% </span>
            </div>
            <Clock
              format={"HH:mm:ss"}
              interval={1000}
              ticking
              timezone={cityData.location?.tz_id}
            />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <span>in comparison to</span>
        <Select
          defaultValue={{ value: "Warsaw", label: "Warsaw" }}
          options={[
            { value: "Warsaw", label: "Warsaw" },
            { value: "Krakow", label: "Kraków" },
            { value: "Lodz", label: "Łódź" },
            { value: "Wroclaw", label: "Wrocław" },
            { value: "Poznan", label: "Poznań" },
            { value: "Gdansk", label: "Gdańsk" },
            { value: "Szczecin", label: "Szczecin" },
            { value: "Bydgoszcz", label: "Bydgoszcz" },
          ]}
          onChange={(e) => setComparedCity(e?.value as string)}
          isDisabled={!!cityError || !!comparedCityError}
        />
        <span>:</span>
      </div>
      <div
        style={{
          height: "40vh",
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {comparedCityLoading && <SpinnerCircular size={100} />}
        {comparedCityError && (
          <div
            style={{ display: "flex", flexFlow: "column", textAlign: "center" }}
          >
            <ImCross size={250} />
            <h1>No results</h1>
          </div>
        )}
        {comparedCityData && cityData && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: comparedCityData.current?.is_day ? "#000" : "#fff",
              backgroundImage: comparedCityData.current?.is_day
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
              {comparedCityData.location?.name}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              <span>{comparedCityData.current?.condition?.text}</span>
              <img
                src={comparedCityData.current?.condition?.icon}
                alt={"icon"}
              />
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
                It is{" "}
                {Math.abs(
                  Math.floor(
                    (cityData.current?.temp_c -
                      comparedCityData.current?.temp_c) *
                      10
                  ) / 10
                )}
                &#176;C{" "}
                {cityData.current?.temp_c - comparedCityData.current?.temp_c > 0
                  ? "colder"
                  : "hotter"}
              </span>
              <span>
                Feels{" "}
                {Math.abs(
                  Math.floor(
                    (cityData.current?.feelslike_c -
                      comparedCityData.current?.feelslike_c) *
                      10
                  ) / 10
                )}
                &#176;C{" "}
                {cityData.current?.feelslike_c -
                  comparedCityData.current?.feelslike_c >
                0
                  ? "colder"
                  : "hotter"}
              </span>
              <span>
                Wind is{" "}
                {Math.abs(
                  Math.floor(
                    (cityData.current?.wind_kph -
                      comparedCityData.current?.wind_kph) *
                      10
                  ) / 10
                )}{" "}
                km/h
                {cityData.current?.wind_kph -
                  comparedCityData.current?.wind_kph >
                0
                  ? " slower"
                  : " faster"}
              </span>
              <span>
                It is{" "}
                {Math.abs(
                  cityData.current?.humidity -
                    comparedCityData.current?.humidity
                )}
                %{" "}
                {cityData.current?.humidity -
                  comparedCityData.current?.humidity >
                0
                  ? " less "
                  : " more "}
                humid.
              </span>
            </div>
            <Clock
              format={"HH:mm:ss"}
              interval={1000}
              ticking
              timezone={comparedCityData.location?.tz_id}
            />
          </div>
        )}
      </div>
    </div>
  );
};
