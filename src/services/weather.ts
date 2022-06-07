import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://api.weatherapi.com/v1/current.json?key=7d53709d1846499bb24131910220706&q=",
  }),
  endpoints: (builder) => ({
    getWeatherByParam: builder.query({
      query: (param) => param,
    }),
  }),
});

export const { useGetWeatherByParamQuery } = weatherApi;
