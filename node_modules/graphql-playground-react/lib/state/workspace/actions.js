"use strict";

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var redux_actions_1 = require("redux-actions");

exports.selectWorkspace = (_a = redux_actions_1.createActions({
  SELECT_WORKSPACE: function SELECT_WORKSPACE(workspace) {
    return {
      workspace: workspace
    };
  },
  INIT_STATE: function INIT_STATE(workspaceId, endpoint) {
    return {
      workspaceId: workspaceId,
      endpoint: endpoint
    };
  },
  INJECT_STATE: function INJECT_STATE(state) {
    return {
      state: state
    };
  },
  INJECT_TABS: function INJECT_TABS(tabs) {
    return {
      tabs: tabs
    };
  }
}), _a.selectWorkspace), exports.initState = _a.initState, exports.injectState = _a.injectState, exports.injectTabs = _a.injectTabs;