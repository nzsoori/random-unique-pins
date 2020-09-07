export enum actionTypes {
  GET_PINS_ERROR = "@@pin/GET_PINS_ERROR",
  GET_PINS = "@@pin/GET_PINS",
  SAVE_PIN_ERROR = "@@pin/SAVE_PINS_ERROR",
  SAVE_PIN = "@@pin/SAVE_PINS",
  DELETE_PIN = "@@pin/DELETE_PIN",
}
export interface Pin {
  name: string;
  pins: number[];
}
export interface pinState {
  readonly data: Pin;
  readonly errors?: string;
}

export default actionTypes;
