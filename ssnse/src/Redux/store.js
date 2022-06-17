import { isLoginReducer } from "./reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  isLogin: isLoginReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
