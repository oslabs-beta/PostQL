"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reselect_1 = require("reselect");

var reducers_1 = require("./reducers");

var reducers_2 = require("../workspace/reducers");

exports.getSessionDocsState = reselect_1.createSelector([reducers_2.getSelectedWorkspace], function (state) {
  var sessionId = state.sessions.selectedSessionId;
  return state.docs.get(sessionId) || new reducers_1.DocsSession();
});
exports.getSessionDocs = reselect_1.createSelector([exports.getSessionDocsState], function (state) {
  return state.toJS();
});
exports.getDocsOpen = reselect_1.createSelector([exports.getSessionDocsState], function (state) {
  return state.get('docsOpen');
});