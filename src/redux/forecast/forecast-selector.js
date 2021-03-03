import { NameSpace } from "../name-space";

export function getForecast(state) {
  return state[NameSpace.FORECAST].forecast;
}

export function getDailyForecast(state) {
  return state[NameSpace.FORECAST].forecast.daily;
}

export function getCurrentCondition(state) {
  return state[NameSpace.FORECAST].forecast.current.weather[0].main;
}

export function getCurrentSunset(state) {
  return state[NameSpace.FORECAST].forecast.current.sunset;
}

export function getCurrentSunrise(state) {
  return state[NameSpace.FORECAST].forecast.current.sunrise;
}
