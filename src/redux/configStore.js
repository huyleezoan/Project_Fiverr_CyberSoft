import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { HomeReducer } from "./reducers/HomeReducer/HomeReducer";

const rootReducer = combineReducers({
  HomeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
