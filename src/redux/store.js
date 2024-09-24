import { thunk } from "redux-thunk";
import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const store = configureStore(
  {
    reducer: rootReducer,
  },
  compose(applyMiddleware(thunk))
);
