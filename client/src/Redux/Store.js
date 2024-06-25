// This is store
import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import { thunk } from "redux-thunk";
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({
  BankData: Reducer
});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
