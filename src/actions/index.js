import axios from 'axios';
const API_KEY = 'cfdaa9b51b09b5239ab50c12797419d3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}