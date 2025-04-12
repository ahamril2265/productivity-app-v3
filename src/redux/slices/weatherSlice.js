// src/redux/slices/weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  weatherData: null,
  error: ''
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
    setWeatherData(state, action) {
      state.weatherData = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearWeather(state) {
      state.city = '';
      state.weatherData = null;
      state.error = '';
    }
  }
});

export const { setCity, setWeatherData, setError, clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
