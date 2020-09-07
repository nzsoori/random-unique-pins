import { actionTypes, Pin, pinState } from "../actions/types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

export const setPins = (pins) => ({
  type: actionTypes.GET_PINS,
  pins,
});

export const setPinsError = () => ({
  type: actionTypes.GET_PINS_ERROR,
  message: true,
});
export const setPin = (pin) => ({
  type: actionTypes.SAVE_PIN,
  pin,
});

export const setPinError = () => ({
  type: actionTypes.SAVE_PIN_ERROR,
  message: true,
});
