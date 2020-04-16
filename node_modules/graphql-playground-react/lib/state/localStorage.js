"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lodash_1 = require("lodash");

var deserialize_1 = require("./workspace/deserialize");

function serializeState(store) {
  return lodash_1.debounce(function () {
    var state = store.getState();

    if (!state.stateInjected) {
      localStorage.setItem('graphql-playground', JSON.stringify(state));
    }
  }, 300, {
    trailing: true
  });
}

exports.serializeState = serializeState;

function deserializeState() {
  try {
    // let before = performance.now()
    var state = localStorage.getItem('graphql-playground');

    if (state) {
      // console.log(
      //   `Needed ${performance.now() - before}ms to get ${
      //     state.length
      //   } bytes from localstorage`,
      // )
      // before = performance.now()
      var json = JSON.parse(state); // console.log(`Needed ${performance.now() - before}ms to parse state`)
      // before = performance.now()

      var result = deserialize_1.deserializePersistedState(json); // console.log(
      //   `Needed ${performance.now() - before}ms to deserialize the parsed json`,
      // )

      return result;
    }
  } catch (e) {//
  }

  return undefined;
}

exports.deserializeState = deserializeState;