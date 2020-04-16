"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var enzyme_1 = require("enzyme");

var EnzymeAdapter = require("enzyme-adapter-react-16");

var jsdom_1 = require("jsdom");

enzyme_1.configure({
  adapter: new EnzymeAdapter()
}); // TODO: Fix/document this hack
// https://github.com/jsdom/jsdom#intervening-before-parsing

var jsdom = new jsdom_1.JSDOM('<!doctype html><html><body></body></html>', {
  beforeParse: function beforeParse(window) {
    window.focus = jest.fn();
  }
});
var window = jsdom.window;

function copyProps(src, target) {
  var props = Object.getOwnPropertyNames(src).filter(function (prop) {
    return typeof target[prop] === 'undefined';
  }).reduce(function (result, prop) {
    var _a;

    return __assign(__assign({}, result), (_a = {}, _a[prop] = Object.getOwnPropertyDescriptor(src, prop), _a));
  }, {});
  Object.defineProperties(target, props);
}

;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);

global.document.createRange = function () {
  return {
    setEnd: function setEnd() {},
    setStart: function setStart() {},
    getBoundingClientRect: function getBoundingClientRect() {
      return {
        right: 0
      };
    },
    getClientRects: function getClientRects() {
      return {
        length: 0,
        left: 0,
        right: 0
      };
    }
  };
};