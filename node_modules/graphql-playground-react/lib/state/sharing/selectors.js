"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reselect_1 = require("reselect");

var reducers_1 = require("../workspace/reducers");

exports.getSharingState = reselect_1.createSelector([reducers_1.getSelectedWorkspace], function (state) {
  return state.sharing;
});

var makeSharingSelector = function makeSharingSelector(key) {
  return reselect_1.createSelector([exports.getSharingState], function (state) {
    return state.get(key);
  });
};

exports.getSharingHistory = makeSharingSelector('history');
exports.getSharingHeaders = makeSharingSelector('headers');
exports.getSharingAllTabs = makeSharingSelector('allTabs');
exports.getShareUrl = makeSharingSelector('shareUrl');