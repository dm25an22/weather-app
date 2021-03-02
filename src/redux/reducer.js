import { combineReducers } from "redux";
import { NameSpace } from "./name-space";
import {reducer as forecastReducer} from "./forecast/forecast";

export const rootReducer = combineReducers({
  [NameSpace.WHETHER]: forecastReducer,
})