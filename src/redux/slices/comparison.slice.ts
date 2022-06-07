import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../../types/weather";
import { RootState } from "../store";

interface ComparisonState extends Weather {}

const initialState: ComparisonState = {
  temp_c: 0,
  feelslike_c: 0,
  wind_kph: 0,
  humidity: 0,
};

export const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    setComparison: (state, action: PayloadAction<Weather>) => {
      state = action.payload;
    },
  },
});

export const { setComparison } = comparisonSlice.actions;
export const selectComparison = (state: RootState) => state;
export default comparisonSlice.reducer;
