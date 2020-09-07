import { actionTypes, pinState } from "../actions/types";
import { Reducer } from "redux";

export const initialState: pinState = {
  data: {
    name: "",
    pins: [],
  },
  errors: undefined,
};

const reducer: Reducer<pinState> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PINS:
      const { pins } = action;
      return { ...state, pins };
    case actionTypes.GET_PINS_ERROR:
      const { message } = action;
      return { ...state, message };
    case actionTypes.SAVE_PIN: {
      return {
        errors: state.errors,

        data: {
          ...state.data,
          name: state.data.name,
          pins: [...state.data.pins, action.payload],
        },
      };
    }
    case actionTypes.DELETE_PIN: {
      return {
        errors: state.errors,

        data: {
          ...state.data,
          name: state.data.name,
          pins: state.data.pins.filter((pin) => pin !== action.payload.name),
        },
      };
    }
    default:
      return state;
  }
};
export { reducer as pinReducer };
