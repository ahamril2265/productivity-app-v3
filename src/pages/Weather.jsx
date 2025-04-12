import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCity,
  setWeatherData,
  setError,
  clearWeather,
} from '../redux/slices/weatherSlice';
import { useMap } from 'react-leaflet';

import './Weather.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


function RecenterMap({ lat, lon }) {
  const map = useMap();
  map.setView([lat, lon], 10); // Recenters map to new lat/lon with zoom 10
  return null;
}


function Weather() {
  const dispatch = useDispatch();
  const { city, weatherData, error } = useSelector((state) => state.weather);
  const API_KEY = '5c6b4244e151f8b23fa55d68f135abcb'; // Replace with your key

  const fetchWeather = async () => {
    if (!city.trim()) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      dispatch(setWeatherData(data));
      dispatch(setError(''));
    } catch (err) {
      dispatch(setError(err.message));
      dispatch(setWeatherData(null));
    }
  };

  const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="weather-container">
      <h2>🌤️ Weather Checker</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => dispatch(setCity(e.target.value))}
        onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      <button onClick={() => dispatch(clearWeather())}>Clear</button>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h3>
            {weatherData.name}, {weatherData.sys.country}
          </h3>
          <p>🌡 Temp: {weatherData.main.temp} °C</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>☁️ Condition: {weatherData.weather[0].description}</p>

          <div className="map-wrapper">
            <MapContainer
              center={[weatherData.coord.lat, weatherData.coord.lon]}
              zoom={10}
              scrollWheelZoom={false}
              style={{ height: '300px', width: '100%', borderRadius: '8px' }}
            >
              <RecenterMap lat={weatherData.coord.lat} lon={weatherData.coord.lon} />

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker
                position={[weatherData.coord.lat, weatherData.coord.lon]}
                icon={customIcon}
              >
                <Popup>
                  {weatherData.name} - {weatherData.weather[0].main}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
