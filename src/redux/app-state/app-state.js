const initialState = {
  selectedDay: new Date(),
};

const ActionType = {
  SET_SELECTED_DAY: "SET_SELECTED_DAY",
};

export const ActionCreator = {
  setSelectedDay(day) {
    return {
      type: ActionType.SET_SELECTED_DAY,
      payload: day
    }
  }
};

export function reducer(state = initialState , action) {
  switch (action.type) {

    case ActionType.SET_SELECTED_DAY:
      return {...state, selectedDay: action.payload}

    default:
      return state;
  }
};
