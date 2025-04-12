import React, { useState } from 'react';
import './Weather.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '5c6b4244e151f8b23fa55d68f135abcb';

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  const handleReset = () => {
    setCity('');
    setWeatherData(null);
    setError('');
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
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      <button onClick={handleReset}>Clear</button>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>🌡 Temp: {weatherData.main.temp} °C</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>☁️ Condition: {weatherData.weather[0].description}</p>

          <div className="map-container">
            <MapContainer
              center={[weatherData.coord.lat, weatherData.coord.lon]}
              zoom={10}
              scrollWheelZoom={false}
              style={{ height: "300px", width: "100%", marginTop: "20px", borderRadius: "8px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              />
              <Marker position={[weatherData.coord.lat, weatherData.coord.lon]} icon={customIcon}>
                <Popup>
                  {weatherData.name}<br />{weatherData.weather[0].description}
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
