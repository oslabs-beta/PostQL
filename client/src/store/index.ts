import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { urlReducer } from "./url/reducers";
import { loginReducer } from "./login/reducers";
import { registerReducer } from "./register/reducers";
import { authReducer } from "./auth/reducers";
import { analReducer } from "./analytics/reducers";
import { queryReducer } from "./query/reducers";
import { graphReducer } from "./instance/reducers"
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  url: urlReducer,
  log: loginReducer,
  reg: registerReducer,
  authent: authReducer,
  analy: analReducer,
  query: queryReducer,
  graph: graphReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
//   const middlewares = [thunkMiddleware];
//   const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer, applyMiddleware(thunk)
    // composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
