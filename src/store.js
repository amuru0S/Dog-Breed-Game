import { createStore } from "redux";
import combineReducers from "./reducers/index.js";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

const store = createStore(combineReducers, enhancer);

export default store;