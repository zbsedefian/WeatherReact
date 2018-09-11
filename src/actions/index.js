import axios from "axios";

const API_KEY = "902f986f73917215ef5478937654385a";
const ROOT_URL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
