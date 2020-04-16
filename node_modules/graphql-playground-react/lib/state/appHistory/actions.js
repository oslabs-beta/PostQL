"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var redux_actions_1 = require("redux-actions");

exports.selectAppHistoryItem = redux_actions_1.createActions({
  SELECT_APP_HISTORY_ITEM: function SELECT_APP_HISTORY_ITEM(item) {
    return {
      item: item
    };
  }
}).selectAppHistoryItem;