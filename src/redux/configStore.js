import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { CourseReducer } from "./reducers/CourseReducer/CourseReducer";
import { HomeReducer } from "./reducers/HomeReducer/HomeReducer";

const rootReducer = combineReducers({
  HomeReducer,
  CourseReducer: CourseReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// applyMiddleware(reduxThunk)
