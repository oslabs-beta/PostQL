"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reselect_1 = require("reselect");

var reducers_1 = require("../workspace/reducers");

exports.getHistory = reselect_1.createSelector([reducers_1.getSelectedWorkspace], function (state) {
  return state.history;
});