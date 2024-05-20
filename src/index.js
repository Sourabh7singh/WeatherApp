import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WeatherData from './Components/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WeatherData>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </WeatherData>
);
