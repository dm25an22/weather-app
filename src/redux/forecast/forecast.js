import { getGeoPosition } from "../../utils/geoposition";

const initialState = {
  forecast: null,
};

const ActionType = {
  FETCH_SUCCESS_FORECAST: "FETCH_SUCCESS_FORECAST"
};

export const ActionCreator = {
  fetchForecast(forecast) {
    return {
      type: ActionType.FETCH_SUCCESS_FORECAST,
      payload: forecast,
    }
  }
};


export const Operation = {
  fetchForecast() {
    return async (dispatch) => {
      try {
        const {coords} = await getGeoPosition();
        const forecast = await Api.fetchForecastData(coords.latitude, coords.longitude);
        dispatch(ActionCreator.fetchForecast(forecast));
      } catch (error) {
        
      }
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {

    case ActionType.FETCH_SUCCESS_FORECAST:
      return {...state, forecast: action.payload};

    default:
      return state;
  }
};