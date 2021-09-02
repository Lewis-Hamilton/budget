import { combineReducers } from "redux";

import paycheckReducer from "./paycheckReducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  paycheckReducer,
  navReducer,
});

export default rootReducer;
