"use strict";

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var redux_actions_1 = require("redux-actions");

exports.toggleHistoryItemStarring = (_a = redux_actions_1.createActions({
  TOGGLE_HISTORY_ITEM_STARRING: function TOGGLE_HISTORY_ITEM_STARRING(sessionId) {
    return {
      sessionId: sessionId
    };
  },
  ADD_HISTORY_ITEM: function ADD_HISTORY_ITEM(session) {
    return {
      session: session
    };
  }
}), _a.toggleHistoryItemStarring), exports.addHistoryItem = _a.addHistoryItem;