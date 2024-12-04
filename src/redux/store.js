import { applyMiddleware, legacy_createStore } from "redux";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
export const Store = legacy_createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
