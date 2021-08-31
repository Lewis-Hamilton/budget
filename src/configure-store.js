import { createStore } from "redux";
import { countReducer } from "./components/reducer";

export const store = createStore(countReducer);
