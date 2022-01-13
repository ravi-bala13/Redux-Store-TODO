import { applyMiddleware, combineReducers, createStore } from "redux";

import { todoReducer } from "./todos/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: todoReducer,
});

// const logger1 = (state) => (next) => (action) => {
//   console.log("Dispatching action", action, next, state);
//   const val = next(action);
//   console.log("exiting logger1");
//   return val;
// };

// const logger2 = (state) => (next) => (action) => {
//   console.log("Dispatching action", action, next, state);
//   const val = next(action);
//   console.log("exiting logger2");
//   return val;
// };

export const store = createStore(
  rootReducer
  // applyMiddleware(logger1, logger2)
);
