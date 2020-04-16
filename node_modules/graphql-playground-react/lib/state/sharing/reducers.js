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

var SharingState =
/** @class */
function (_super) {
  __extends(SharingState, _super);

  function SharingState() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return SharingState;
}(immutable_1.Record({
  history: false,
  headers: true,
  allTabs: true,
  shareUrl: null
}));

exports.SharingState = SharingState;
exports["default"] = redux_actions_1.handleActions({
  TOGGLE_SHARE_HISTORY: function TOGGLE_SHARE_HISTORY(state) {
    return state.set('history', !state.history);
  },
  TOGGLE_SHARE_HEADERS: function TOGGLE_SHARE_HEADERS(state) {
    return state.set('headers', !state.headers);
  },
  TOGGLE_SHARE_ALL_TABS: function TOGGLE_SHARE_ALL_TABS(state) {
    return state.set('allTabs', !state.allTabs);
  },
  SET_SHARE_URL: function SET_SHARE_URL(state, _a) {
    var shareUrl = _a.payload.shareUrl;
    return state.set('shareUrl', shareUrl);
  }
}, new SharingState());