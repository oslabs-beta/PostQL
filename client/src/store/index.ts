import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { urlReducer } from "./url/reducers";
import { loginReducer } from "./login/reducers";
import { registerReducer } from "./register/reducers";

const rootReducer = combineReducers({
  url: urlReducer,
  log: loginReducer,
  reg: registerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
//   const middlewares = [thunkMiddleware];
//   const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    // composeWithDevTools(middleWareEnhancer)
  );

  return store;
}