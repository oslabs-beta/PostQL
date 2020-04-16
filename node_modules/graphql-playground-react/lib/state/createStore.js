"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var redux_1 = require("redux");

var redux_saga_1 = require("redux-saga");

var rootSaga_1 = require("./rootSaga");

var reducers_1 = require("./workspace/reducers");

var selectors_1 = require("./sessions/selectors");

var localStorage_1 = require("./localStorage");

var sagaMiddleware = redux_saga_1["default"]();
var functions = [redux_1.applyMiddleware(sagaMiddleware)];
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
var initialState = localStorage_1.deserializeState();

exports["default"] = function () {
  var store = redux_1.createStore(reducers_1["default"], initialState, composeEnhancers.apply(null, functions));
  store.subscribe(localStorage_1.serializeState(store));
  window.s = store;

  window.session = function () {
    return selectors_1.getSelectedSession(store.getState());
  };

  sagaMiddleware.run(rootSaga_1["default"]);
  return store;
};