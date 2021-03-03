import { combineReducers } from "redux";
import { NameSpace } from "./name-space";
import {reducer as forecastReducer} from "./forecast/forecast";
import { reducer as appStateReducer } from "./app-state/app-state";

export const rootReducer = combineReducers({
  [NameSpace.FORECAST]: forecastReducer,
  [NameSpace.APP_STATE]: appStateReducer,
})