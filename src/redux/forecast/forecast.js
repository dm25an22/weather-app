import Api from "../../api";
import { getGeoPosition } from "../../utils/geoposition";
import camelcaseKeys  from "camelcase-keys"

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
  fetchForecast(onSuccess, onError) {
    return async (dispatch, getState) => {
      try {
        const {coords} = await getGeoPosition();
        const cityName = await Api.getCityName(coords.latitude, coords.longitude);
        const forecast = await Api.fetchForecastData(coords.latitude, coords.longitude);

        forecast.cityName = cityName[0].name;
        dispatch(ActionCreator.fetchForecast(camelcaseKeys(forecast, {deep: true})));
        onSuccess();
      } catch (error) {
        onError();
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