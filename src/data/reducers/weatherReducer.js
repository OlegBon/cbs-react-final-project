import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../openweathermap-config";

const weatherReducer = createSlice({
  name: "weather",
  initialState: {
    data: {},
    town: "Kyiv",
    loading: false,
    error: "",
  },
  reducers: {
    searchWeather: (state, action) => {
      state.data = action.payload;
    },
    setTown: (state, action) => {
      state.town = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchWeather = (city) => async (dispatch) => {
  if (!city.trim()) {
    return;
  }

  dispatch(setLoading(true));
  dispatch(setError(""));

  try {
    const response = await axios.get(url(city));
    dispatch(searchWeather(response.data));
  } catch (err) {
    console.error("Error while fetching weather data:", err);
    dispatch(setError("Unable to find city. Please check your input."));
  } finally {
    dispatch(setLoading(false));
  }
};

export const { searchWeather, setTown, setLoading, setError } =
  weatherReducer.actions;
export default weatherReducer.reducer;
