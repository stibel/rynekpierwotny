import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetWeatherByParamQuery } from "../../services/weather";

interface CityPageProps {}

// eslint-disable-next-line no-empty-pattern
export const CityPage = ({}: CityPageProps) => {
  const { city } = useParams();
  const { data, isLoading, error } = useGetWeatherByParamQuery(city);

  useEffect(() => console.log(data), [data]);
  return (
    <div>
      <h1>City Page</h1>
    </div>
  );
};
