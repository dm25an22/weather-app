import { combineReducers } from "redux";
import { NameSpace } from "./name-space";
import {reducer as whetherReducer} from "./whether/whether";

export const rootReducer = combineReducers({
  [NameSpace.WHETHER]: whetherReducer,
})