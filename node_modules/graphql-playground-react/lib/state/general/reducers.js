"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var immutable_1 = require("immutable");

var redux_actions_1 = require("redux-actions");

var GeneralState =
/** @class */
function (_super) {
  __extends(GeneralState, _super);

  function GeneralState() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return GeneralState;
}(immutable_1.Record({
  historyOpen: false,
  fixedEndpoint: false,
  endpoint: '',
  configString: '',
  envVars: {}
}));

exports.GeneralState = GeneralState;
exports["default"] = redux_actions_1.handleActions({
  OPEN_HISTORY: function OPEN_HISTORY(state) {
    return state.set('historyOpen', true);
  },
  CLOSE_HISTORY: function CLOSE_HISTORY(state) {
    return state.set('historyOpen', false);
  },
  SET_ENDPOINT_DISABLED: function SET_ENDPOINT_DISABLED(state, _a) {
    var value = _a.payload.value;
    return state.set('endpointDisabled', value);
  },
  SET_CONFIG_STRING: function SET_CONFIG_STRING(state, _a) {
    var configString = _a.payload.configString;
    return state.set('configString', configString);
  }
}, new GeneralState());