"use strict";

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var redux_actions_1 = require("redux-actions");

exports.editQuery = (_a = redux_actions_1.createActions({
  // simple property setting
  EDIT_QUERY: function EDIT_QUERY(query) {
    return {
      query: query
    };
  },
  EDIT_HEADERS: simpleAction('headers'),
  EDIT_ENDPOINT: simpleAction('endpoint'),
  EDIT_VARIABLES: simpleAction('variables'),
  SET_OPERATION_NAME: simpleAction('operationName'),
  SET_VARIABLE_TO_TYPE: simpleAction('variableToType'),
  SET_OPERATIONS: simpleAction('operations'),
  SET_EDITOR_FLEX: simpleAction('editorFlex'),
  EDIT_NAME: simpleAction('name'),
  OPEN_QUERY_VARIABLES: function OPEN_QUERY_VARIABLES() {
    return {
      queryVariablesActive: true
    };
  },
  CLOSE_QUERY_VARIABLES: function CLOSE_QUERY_VARIABLES() {
    return {
      queryVariablesActive: false
    };
  },
  SET_VARIABLE_EDITOR_HEIGHT: simpleAction('variableEditorHeight'),
  SET_RESPONSE_TRACING_HEIGHT: simpleAction('responceTracingHeight'),
  SET_TRACING_SUPPORTED: simpleAction('tracingSupported'),
  SET_SUBSCRIPTION_ACTIVE: simpleAction('subscriptionActive'),
  SET_QUERY_TYPES: simpleAction('queryTypes'),
  SET_RESPONSE_EXTENSIONS: simpleAction('responseExtensions'),
  SET_CURRENT_QUERY_START_TIME: simpleAction('currentQueryStartTime'),
  SET_CURRENT_QUERY_END_TIME: simpleAction('currentQueryEndTime'),
  UPDATE_QUERY_FACTS: simpleAction(),
  PRETTIFY_QUERY: simpleAction(),
  INJECT_HEADERS: function INJECT_HEADERS(headers, endpoint) {
    return {
      headers: headers,
      endpoint: endpoint
    };
  },
  // setting multiple props

  /*
    this.setState({
      responseTracingOpen: false,
      responseTracingHeight: hadHeight,
    } as State)
  */
  CLOSE_TRACING: simpleAction('responseTracingHeight'),
  OPEN_TRACING: simpleAction('responseTracingHeight'),
  TOGGLE_TRACING: simpleAction(),
  // setting multiple props

  /*
    this.setState({
      responseTracingOpen: false,
      responseTracingHeight: hadHeight,
    } as State)
  */
  CLOSE_VARIABLES: simpleAction('variableEditorHeight'),
  OPEN_VARIABLES: simpleAction('variableEditorHeight'),
  TOGGLE_VARIABLES: simpleAction(),

  /*
    a littlebit more complex state mutations
  */
  ADD_RESPONSE: function ADD_RESPONSE(workspaceId, sessionId, response) {
    return {
      workspaceId: workspaceId,
      sessionId: sessionId,
      response: response
    };
  },
  SET_RESPONSE: function SET_RESPONSE(workspaceId, sessionId, response) {
    return {
      workspaceId: workspaceId,
      sessionId: sessionId,
      response: response
    };
  },
  CLEAR_RESPONSES: simpleAction(),
  FETCH_SCHEMA: simpleAction(),
  REFETCH_SCHEMA: simpleAction(),
  SET_ENDPOINT_UNREACHABLE: simpleAction('endpoint'),
  SET_SCROLL_TOP: function SET_SCROLL_TOP(sessionId, scrollTop) {
    return {
      sessionId: sessionId,
      scrollTop: scrollTop
    };
  },
  SCHEMA_FETCHING_SUCCESS: function SCHEMA_FETCHING_SUCCESS(endpoint, tracingSupported, isPollingSchema) {
    return {
      endpoint: endpoint,
      tracingSupported: tracingSupported,
      isPollingSchema: isPollingSchema
    };
  },

  /*
        this.setState({
          schema,
          isReloadingSchema: false,
          endpointUnreachable: false,
          + tracingSupported
        })
  */
  SCHEMA_FETCHING_ERROR: function SCHEMA_FETCHING_ERROR(endpoint, error) {
    return {
      endpoint: endpoint,
      error: error
    };
  },

  /*
         this.setState({
        isReloadingSchema: false,
        endpointUnreachable: true,
      })
  */
  RENEW_STACKS: simpleAction(),

  /*
  GraphQLEditor.renewStacks()
  */
  RUN_QUERY: function RUN_QUERY(operationName) {
    return {
      operationName: operationName
    };
  },
  QUERY_SUCCESS: simpleAction(),
  QUERY_ERROR: simpleAction(),
  RUN_QUERY_AT_POSITION: function RUN_QUERY_AT_POSITION(position) {
    return {
      position: position
    };
  },
  START_QUERY: simpleAction('queryRunning', true),
  STOP_QUERY: function STOP_QUERY(sessionId, workspaceId) {
    return {
      workspaceId: workspaceId,
      sessionId: sessionId
    };
  },

  /* GraphQLEditor.handleRunQuery */
  OPEN_SETTINGS_TAB: function OPEN_SETTINGS_TAB() {
    return {};
  },
  OPEN_CONFIG_TAB: function OPEN_CONFIG_TAB() {
    return {};
  },
  NEW_SESSION: function NEW_SESSION(endpoint, reuseHeaders) {
    return {
      endpoint: endpoint,
      reuseHeaders: reuseHeaders
    };
  },
  NEW_SESSION_FROM_QUERY: function NEW_SESSION_FROM_QUERY(query) {
    return {
      query: query
    };
  },
  NEW_FILE_TAB: function NEW_FILE_TAB(fileName, filePath, file) {
    return {
      fileName: fileName,
      filePath: filePath,
      file: file
    };
  },
  DUPLICATE_SESSION: simpleAction('session'),
  CLOSE_SELECTED_TAB: function CLOSE_SELECTED_TAB() {
    return {};
  },
  SELECT_NEXT_TAB: function SELECT_NEXT_TAB() {
    return {};
  },
  SELECT_PREV_TAB: function SELECT_PREV_TAB() {
    return {};
  },
  SELECT_TAB: simpleAction('sessionId'),
  SELECT_TAB_INDEX: simpleAction('index'),
  CLOSE_TAB: simpleAction('sessionId'),
  REORDER_TABS: function REORDER_TABS(src, dest) {
    return {
      src: src,
      dest: dest
    };
  },
  // files, settings, config
  EDIT_SETTINGS: simpleAction(),
  SAVE_SETTINGS: simpleAction(),
  EDIT_CONFIG: simpleAction(),
  SAVE_CONFIG: simpleAction(),
  EDIT_FILE: simpleAction(),
  SAVE_FILE: simpleAction()
}), _a.editQuery), exports.editVariables = _a.editVariables, exports.setOperationName = _a.setOperationName, exports.editHeaders = _a.editHeaders, exports.editEndpoint = _a.editEndpoint, exports.setVariableToType = _a.setVariableToType, exports.setOperations = _a.setOperations, exports.startQuery = _a.startQuery, exports.stopQuery = _a.stopQuery, exports.setEditorFlex = _a.setEditorFlex, exports.openQueryVariables = _a.openQueryVariables, exports.closeQueryVariables = _a.closeQueryVariables, exports.setVariableEditorHeight = _a.setVariableEditorHeight, exports.setResponseTracingHeight = _a.setResponseTracingHeight, exports.setTracingSupported = _a.setTracingSupported, exports.closeTracing = _a.closeTracing, exports.openTracing = _a.openTracing, exports.closeVariables = _a.closeVariables, exports.openVariables = _a.openVariables, exports.addResponse = _a.addResponse, exports.setResponse = _a.setResponse, exports.clearResponses = _a.clearResponses, exports.openSettingsTab = _a.openSettingsTab, exports.schemaFetchingSuccess = _a.schemaFetchingSuccess, exports.schemaFetchingError = _a.schemaFetchingError, exports.setEndpointUnreachable = _a.setEndpointUnreachable, exports.renewStacks = _a.renewStacks, exports.runQuery = _a.runQuery, exports.prettifyQuery = _a.prettifyQuery, exports.fetchSchema = _a.fetchSchema, exports.updateQueryFacts = _a.updateQueryFacts, exports.runQueryAtPosition = _a.runQueryAtPosition, exports.toggleTracing = _a.toggleTracing, exports.toggleVariables = _a.toggleVariables, exports.newSession = _a.newSession, exports.newSessionFromQuery = _a.newSessionFromQuery, exports.newFileTab = _a.newFileTab, exports.closeTab = _a.closeTab, exports.closeSelectedTab = _a.closeSelectedTab, exports.editSettings = _a.editSettings, exports.saveSettings = _a.saveSettings, exports.editConfig = _a.editConfig, exports.saveConfig = _a.saveConfig, exports.editFile = _a.editFile, exports.saveFile = _a.saveFile, exports.selectTab = _a.selectTab, exports.selectTabIndex = _a.selectTabIndex, exports.selectNextTab = _a.selectNextTab, exports.selectPrevTab = _a.selectPrevTab, exports.duplicateSession = _a.duplicateSession, exports.querySuccess = _a.querySuccess, exports.queryError = _a.queryError, exports.setSubscriptionActive = _a.setSubscriptionActive, exports.setQueryTypes = _a.setQueryTypes, exports.injectHeaders = _a.injectHeaders, exports.openConfigTab = _a.openConfigTab, exports.editName = _a.editName, exports.setResponseExtensions = _a.setResponseExtensions, exports.setCurrentQueryStartTime = _a.setCurrentQueryStartTime, exports.setCurrentQueryEndTime = _a.setCurrentQueryEndTime, exports.refetchSchema = _a.refetchSchema, exports.setScrollTop = _a.setScrollTop, exports.reorderTabs = _a.reorderTabs;

function simpleAction(key, defaultValue) {
  return function (value) {
    var _a;

    return _a = {}, _a[key] = value || defaultValue, _a;
  };
}