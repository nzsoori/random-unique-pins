import { combineReducers } from "redux";

import { pinReducer } from "./pins";

const rootReducer = combineReducers({
  pins: pinReducer,
});

export default rootReducer;
