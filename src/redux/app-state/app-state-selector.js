import { NameSpace } from "../name-space";

export function getSelectedDay(state) {
  return state[NameSpace.APP_STATE].selectedDay;
}