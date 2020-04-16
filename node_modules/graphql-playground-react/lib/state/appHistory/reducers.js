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

var redux_actions_1 = require("redux-actions"); // tslint:disable


var AppHistory =
/** @class */
function (_super) {
  __extends(AppHistory, _super);

  function AppHistory() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AppHistory;
}(immutable_1.Record({
  items: immutable_1.OrderedMap()
}));

exports.AppHistory = AppHistory;

var AppHistoryItem =
/** @class */
function (_super) {
  __extends(AppHistoryItem, _super);

  function AppHistoryItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AppHistoryItem;
}(immutable_1.Record({
  type: 'local',
  configString: undefined,
  configPath: undefined,
  endpoint: undefined,
  folderName: undefined,
  env: undefined,
  platformToken: undefined,
  lastOpened: new Date(),
  config: undefined
}));

exports.AppHistoryItem = AppHistoryItem;
exports["default"] = redux_actions_1.handleActions({
  SELECT_APP_HISTORY_ITEM: function SELECT_APP_HISTORY_ITEM(state, _a) {
    var payload = _a.payload;
    return state.setIn(['items', payload.item.path], payload.item);
  }
}, new AppHistory());

exports.getAppHistory = function (state) {
  return state.appHistory;
};