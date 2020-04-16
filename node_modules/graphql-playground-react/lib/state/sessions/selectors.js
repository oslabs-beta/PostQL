"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reselect_1 = require("reselect");

var reducers_1 = require("../workspace/reducers");

function getSelectedWorkspaceId(state) {
  return state.get('selectedWorkspace');
}

function getSelectedWorkspace(state) {
  return state.getIn(['workspaces', getSelectedWorkspaceId(state)]) || reducers_1.makeWorkspace('');
}

exports.getSessionsState = reselect_1.createSelector([getSelectedWorkspace], function (workspace) {
  return workspace.get('sessions');
});
exports.getSelectedSession = reselect_1.createSelector([exports.getSessionsState], function (state) {
  var id = exports.getSelectedSessionId(state);
  var session = state.getIn(['sessions', id]);
  return session;
});

exports.getSelectedSessionId = function (state) {
  return state.selectedSessionId && state.selectedSessionId !== '' ? state.selectedSessionId : state.sessions.first().id;
};

exports.getSelectedSessionIdFromRoot = reselect_1.createSelector([exports.getSelectedSession], function (state) {
  return state.get('id');
});

var makeSessionSelector = function makeSessionSelector(prop) {
  return reselect_1.createSelector([exports.getSelectedSession], function (session) {
    return session.get(prop);
  });
};

exports.getScrollTop = makeSessionSelector('scrollTop');
exports.getEndpoint = makeSessionSelector('endpoint');
exports.getQuery = makeSessionSelector('query');
exports.getFile = makeSessionSelector('file');
exports.getVariables = makeSessionSelector('variables');
exports.getResponses = makeSessionSelector('responses');
exports.getOperationName = makeSessionSelector('operationName');
exports.getQueryRunning = makeSessionSelector('queryRunning');
exports.getSubscriptionActive = makeSessionSelector('subscriptionActive');
exports.getOperations = makeSessionSelector('operations');
exports.getVariableToType = makeSessionSelector('variableToType');
exports.getQueryTypes = makeSessionSelector('queryTypes');
exports.getDate = makeSessionSelector('date');
exports.getHasMutation = makeSessionSelector('hasMutation');
exports.getHasSubscription = makeSessionSelector('hasSubscription');
exports.getHasQuery = makeSessionSelector('hasQuery');
exports.getIsFile = makeSessionSelector('isFile');
exports.getStarred = makeSessionSelector('starred');
exports.getName = makeSessionSelector('name');
exports.getFilePath = makeSessionSelector('filePath');
exports.getSelectedUserToken = makeSessionSelector('selectedUserToken');
exports.getHeaders = makeSessionSelector('headers');
exports.getHasChanged = makeSessionSelector('hasChanged');
exports.getAbsolutePath = makeSessionSelector('absolutePath');
exports.getIsSettingsTab = makeSessionSelector('isSettingsTab');
exports.getIsConfigTab = makeSessionSelector('isConfigTab');
exports.getCurrentQueryStartTime = makeSessionSelector('currentQueryStartTime');
exports.getCurrentQueryEndTime = makeSessionSelector('currentQueryEndTime');
exports.getIsReloadingSchema = makeSessionSelector('isReloadingSchema');
exports.getIsPollingSchema = reselect_1.createSelector([exports.getEndpoint, getSettings], function (endpoint, settings) {
  var json = JSON.parse(settings);

  try {
    var isPolling = json['schema.polling.enable'] && endpoint.match("/" + json['schema.polling.endpointFilter']) && true;
    return isPolling;
  } catch (e) {
    return false;
  }
});
exports.getResponseExtensions = makeSessionSelector('responseExtensions');
exports.getQueryVariablesActive = makeSessionSelector('queryVariablesActive');
exports.getEndpointUnreachable = makeSessionSelector('endpointUnreachable');
exports.getEditorFlex = makeSessionSelector('editorFlex');
exports.getVariableEditorOpen = makeSessionSelector('variableEditorOpen');
exports.getVariableEditorHeight = makeSessionSelector('variableEditorHeight');
exports.getResponseTracingOpen = makeSessionSelector('responseTracingOpen');
exports.getResponseTracingHeight = makeSessionSelector('responseTracingHeight');
exports.getDocExplorerWidth = makeSessionSelector('docExplorerWidth');
exports.getNextQueryStartTime = makeSessionSelector('nextQueryStartTime');
exports.getTracingSupported = makeSessionSelector('tracingSupported');

function getSettings(state) {
  return state.getIn(['settingsString']);
}

exports.getTabWidth = reselect_1.createSelector([getSettings], function (settings) {
  try {
    var json = JSON.parse(settings);
    return json['prettier.tabWidth'] || 2;
  } catch (e) {//
  }

  return 2;
});
exports.getUseTabs = reselect_1.createSelector([getSettings], function (settings) {
  try {
    var json = JSON.parse(settings);
    return json['prettier.useTabs'] || false;
  } catch (e) {//
  }

  return false;
});
exports.getHeadersCount = reselect_1.createSelector([exports.getHeaders], function (headers) {
  try {
    var json = JSON.parse(headers);
    return Object.keys(json).length;
  } catch (e) {//
  }

  return 0;
});
exports.getParsedHeaders = reselect_1.createSelector([exports.getSelectedSession], getParsedHeadersFromSession);

function getParsedHeadersFromSession(headers) {
  try {
    var json = JSON.parse(headers);
    return json;
  } catch (e) {//
  }

  return {};
}

exports.getParsedHeadersFromSession = getParsedHeadersFromSession;
exports.getParsedVariables = reselect_1.createSelector([exports.getSelectedSession], getParsedVariablesFromSession);

function getParsedVariablesFromSession(session) {
  var variables = session.variables;

  try {
    var json = JSON.parse(variables);
    return json;
  } catch (e) {//
  }

  return {};
}

exports.getParsedVariablesFromSession = getParsedVariablesFromSession;
exports.getTracing = reselect_1.createSelector([exports.getResponseExtensions], function (extensions) {
  return extensions && extensions.tracing;
});
exports.getSessionsArray = reselect_1.createSelector([exports.getSessionsState], function (state) {
  var array = state.get('sessions').toArray().map(function (arr) {
    return arr[1];
  });
  return array;
});