"use strict";

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var last = null; // tslint:disable

function log() {
  var messages = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    messages[_i] = arguments[_i];
  }

  if (messages.length === 0) {
    last = null;
  }

  if (last) {
    console.log.apply(console, __spreadArrays(messages, [performance.now() - last + "ms"]));
  } else {
    console.log.apply(console, messages);
  }

  last = performance.now();
}

exports.log = log;