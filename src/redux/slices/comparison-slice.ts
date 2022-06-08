import { createSlice } from "@reduxjs/toolkit";
import { City } from "../../types/city";
import { Weather } from "../../types/weather";
import { RootState } from "../store";

interface ComparisonState {
  city: {
    location: City;
    current: Weather;
  } | null;
  cityToCompare: string | null;
}

const initialState: ComparisonState = {
  city: null,
  cityToCompare: null,
};

export const comparisonSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (
      state,
      action: { payload: { location: City; current: Weather } }
    ) => {
      state.city = action.payload;
    },
    setCityToCompare: (state, action: { payload: string }) => {
      state.cityToCompare = action.payload;
    },
  },
});

export const { setCity, setCityToCompare } = comparisonSlice.actions;
export const selectCityToCompare = (state: RootState) =>
  state.comparison.cityToCompare;
export const selectCity = (state: RootState) => state.comparison.city;
export default comparisonSlice.reducer;
