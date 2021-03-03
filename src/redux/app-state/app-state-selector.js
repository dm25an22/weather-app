import { NameSpace } from "../name-space";
import { createSelector } from "reselect";
import { getDailyForecast } from "../forecast/forecast-selector";

export function getSelectedDay(state) {
  return state[NameSpace.APP_STATE].selectedDay;
}

export const getDayInfoBySelectedDay = createSelector(
  getSelectedDay,
  getDailyForecast,
  (selectedDay, daily) => daily.find(it => new Date(it.dt * 1000).getDate() === selectedDay.getDate())
);