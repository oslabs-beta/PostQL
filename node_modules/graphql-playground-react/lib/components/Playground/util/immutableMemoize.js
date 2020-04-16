"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var immutable_1 = require("immutable");

function immutableMemoize(fn) {
  var lastValue;
  return function (arg) {
    var newValue = fn(arg);

    if (!immutable_1.is(lastValue, newValue)) {
      lastValue = newValue;
    }

    return lastValue;
  };
}

exports.immutableMemoize = immutableMemoize;