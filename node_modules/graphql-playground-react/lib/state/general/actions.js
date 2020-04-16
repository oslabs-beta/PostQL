"use strict";

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var redux_actions_1 = require("redux-actions");

exports.setSettingsString = (_a = redux_actions_1.createActions({
  SET_SETTINGS_STRING: function SET_SETTINGS_STRING(settingsString) {
    return {
      settingsString: settingsString
    };
  },
  SET_CONFIG_STRING: function SET_CONFIG_STRING(configString) {
    return {
      configString: configString
    };
  },
  OPEN_HISTORY: function OPEN_HISTORY() {
    return {};
  },
  CLOSE_HISTORY: function CLOSE_HISTORY() {
    return {};
  }
}), _a.setSettingsString), exports.setConfigString = _a.setConfigString, exports.openHistory = _a.openHistory, exports.closeHistory = _a.closeHistory;