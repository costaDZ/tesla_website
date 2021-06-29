import React from 'react';
import { useState } from 'react';
import './app.css';

import { fetchWeather } from './api/fetchWeather';


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});



  const search = async (e) => {

    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery('');

    }
  }



  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="search ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => search(e)}
      />

      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
        </div>
      )}
    </div>
  )
}



export default App;
