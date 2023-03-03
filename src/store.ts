import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(logger))
);

