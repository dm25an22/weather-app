import { NameSpace } from "../name-space";

export function getForecast(state) {
  return state[NameSpace.FORECAST].forecast;
}