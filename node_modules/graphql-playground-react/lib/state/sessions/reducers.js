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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var immutable_1 = require("immutable");

var redux_actions_1 = require("redux-actions");

var actions_1 = require("./actions");

var selectors_1 = require("./selectors");

var constants_1 = require("../../constants");

var cuid = require("cuid");

var fetchingSagas_1 = require("./fetchingSagas");

var react_sortable_hoc_1 = require("react-sortable-hoc"); // tslint:disable


var Session =
/** @class */
function (_super) {
  __extends(Session, _super);

  function Session() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Session.prototype.toJSON = function () {
    var obj = this.toObject();
    var override = {
      queryRunning: false,
      subscriptionActive: false,
      responseExtensions: {}
    }; // dont serialize very big responses as the localStorage size is limited

    if (obj.responses && obj.responses.size > 0 && (obj.responses.size > 20 || obj.responses.get(0).date.length > 2000)) {
      override.responses = immutable_1.List();
    }

    return immutable_1.merge(obj, override);
  };

  return Session;
}(immutable_1.Record(constants_1.getDefaultSession('')));

exports.Session = Session;

var ResponseRecord =
/** @class */
function (_super) {
  __extends(ResponseRecord, _super);

  function ResponseRecord() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ResponseRecord;
}(immutable_1.Record({
  resultID: '',
  date: '',
  time: new Date(),
  isSchemaError: false
}));

exports.ResponseRecord = ResponseRecord;

function makeSession(endpoint) {
  if (endpoint === void 0) {
    endpoint = '';
  }

  return new Session({
    endpoint: endpoint
  }).set('id', cuid());
}

function sessionFromTab(tab) {
  return new Session(__assign(__assign({}, tab), {
    headers: tab.headers ? JSON.stringify(tab.headers, null, 2) : '',
    responses: tab.responses && tab.responses.length > 0 ? immutable_1.List(tab.responses.map(function (r) {
      return new ResponseRecord({
        date: r
      });
    })) : immutable_1.List()
  })).set('id', cuid());
}

exports.sessionFromTab = sessionFromTab;

var SessionState =
/** @class */
function (_super) {
  __extends(SessionState, _super);

  function SessionState() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return SessionState;
}(immutable_1.Record({
  sessions: immutable_1.OrderedMap({}),
  selectedSessionId: '',
  sessionCount: 0,
  headers: ''
}));

exports.SessionState = SessionState;

function makeSessionState(endpoint) {
  var _a;

  var session = new Session({
    endpoint: endpoint || ''
  });
  return new SessionState({
    sessions: immutable_1.OrderedMap((_a = {}, _a[session.id] = session, _a)),
    selectedSessionId: session.id,
    sessionCount: 1
  });
}

exports.makeSessionState = makeSessionState;
var reducer = redux_actions_1.handleActions((_a = {}, _a[redux_actions_1.combineActions(actions_1.editQuery, actions_1.editVariables, actions_1.editHeaders, actions_1.editEndpoint, actions_1.setEditorFlex, actions_1.openQueryVariables, actions_1.closeQueryVariables, actions_1.setVariableEditorHeight, actions_1.setResponseTracingHeight, actions_1.setTracingSupported, actions_1.setVariableToType, actions_1.setOperations, actions_1.setOperationName, actions_1.setSubscriptionActive, actions_1.startQuery, actions_1.setQueryTypes, actions_1.editName, actions_1.setResponseExtensions, actions_1.setCurrentQueryStartTime, actions_1.setCurrentQueryEndTime)] = function (state, _a) {
  var payload = _a.payload;
  var keys = Object.keys(payload);
  var keyName = keys.length === 1 ? keys[0] : keys[1];
  var path = ['sessions', selectors_1.getSelectedSessionId(state), keyName];
  return state.setIn(path, payload[keyName]);
}, _a.START_QUERY = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'queryRunning'], true).setIn(['sessions', selectors_1.getSelectedSessionId(state), 'responseExtensions'], undefined);
}, _a.CLOSE_TRACING = function (state, _a) {
  var responseTracingHeight = _a.payload.responseTracingHeight;
  return state.mergeDeepIn(['sessions', selectors_1.getSelectedSessionId(state)], immutable_1.Map({
    responseTracingHeight: responseTracingHeight,
    responseTracingOpen: false
  }));
}, _a.TOGGLE_TRACING = function (state) {
  var path = ['sessions', selectors_1.getSelectedSessionId(state), 'responseTracingOpen'];
  return state.setIn(path, !state.getIn(path));
}, _a.OPEN_TRACING = function (state, _a) {
  var responseTracingHeight = _a.payload.responseTracingHeight;
  return state.mergeDeepIn(['sessions', selectors_1.getSelectedSessionId(state)], immutable_1.Map({
    responseTracingHeight: responseTracingHeight,
    responseTracingOpen: true
  }));
}, _a.CLOSE_VARIABLES = function (state, _a) {
  var variableEditorHeight = _a.payload.variableEditorHeight;
  return state.mergeDeepIn(['sessions', selectors_1.getSelectedSessionId(state)], immutable_1.Map({
    variableEditorHeight: variableEditorHeight,
    variableEditorOpen: false
  }));
}, _a.OPEN_VARIABLES = function (state, _a) {
  var variableEditorHeight = _a.payload.variableEditorHeight;
  return state.mergeDeepIn(['sessions', selectors_1.getSelectedSessionId(state)], immutable_1.Map({
    variableEditorHeight: variableEditorHeight,
    variableEditorOpen: true
  }));
}, _a.TOGGLE_VARIABLES = function (state) {
  var path = ['sessions', selectors_1.getSelectedSessionId(state), 'variableEditorOpen'];
  return state.setIn(path, !state.getIn(path));
}, _a.ADD_RESPONSE = function (state, _a) {
  var _b = _a.payload,
      response = _b.response,
      sessionId = _b.sessionId;
  return state.updateIn(['sessions', sessionId, 'responses'], function (responses) {
    return responses.push(response);
  });
}, _a.SET_RESPONSE = function (state, _a) {
  var _b = _a.payload,
      response = _b.response,
      sessionId = _b.sessionId;
  return state.setIn(['sessions', sessionId, 'responses'], immutable_1.List([response]));
}, _a.CLEAR_RESPONSES = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'responses'], immutable_1.List());
}, _a.FETCH_SCHEMA = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'isReloadingSchema'], true);
}, _a.REFETCH_SCHEMA = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'isReloadingSchema'], true);
}, _a.STOP_QUERY = function (state, _a) {
  var sessionId = _a.payload.sessionId;
  return state.mergeIn(['sessions', sessionId], {
    queryRunning: false,
    subscriptionActive: false
  });
}, _a.SET_SCROLL_TOP = function (state, _a) {
  var _b = _a.payload,
      sessionId = _b.sessionId,
      scrollTop = _b.scrollTop;

  if (state.sessions.get(sessionId)) {
    return state.setIn(['sessions', sessionId, 'scrollTop'], scrollTop);
  }

  return state;
}, _a.SCHEMA_FETCHING_SUCCESS = function (state, _a) {
  var payload = _a.payload;
  var newSessions = state.get('sessions').map(function (session) {
    if (session.endpoint === payload.endpoint) {
      // if there was an error, clear it away
      var data = {
        tracingSupported: payload.tracingSupported,
        isReloadingSchema: false,
        endpointUnreachable: false
      };
      var response = session.responses ? session.responses.first() : null;

      if (response && session.responses.size === 1 && // @ts-ignore
      response.isSchemaError) {
        data.responses = immutable_1.List([]);
      }

      return session.merge(immutable_1.Map(data));
    }

    return session;
  });
  return state.set('sessions', newSessions);
}, _a.SET_ENDPOINT_UNREACHABLE = function (state, _a) {
  var payload = _a.payload;
  var newSessions = state.get('sessions').map(function (session, sessionId) {
    if (session.get('endpoint') === payload.endpoint) {
      return session.merge(immutable_1.Map({
        endpointUnreachable: true
      }));
    }

    return session;
  });
  return state.set('sessions', newSessions);
}, _a.SCHEMA_FETCHING_ERROR = function (state, _a) {
  var payload = _a.payload;
  var newSessions = state.get('sessions').map(function (session, sessionId) {
    if (session.get('endpoint') === payload.endpoint) {
      var responses = session.responses; // Only override the responses if there is one or zero and that one is a schemaError
      // Don't override user's responses!

      if (responses.size <= 1) {
        var response = session.responses ? session.responses.first() : null;

        if (!response || response.isSchemaError) {
          response = new ResponseRecord({
            resultID: cuid(),
            isSchemaError: true,
            date: JSON.stringify(fetchingSagas_1.formatError(payload.error, true), null, 2),
            time: new Date()
          });
        }

        responses = immutable_1.List([response]);
      }

      return session.merge(immutable_1.Map({
        isReloadingSchema: false,
        endpointUnreachable: true,
        responses: responses
      }));
    }

    return session;
  });
  return state.set('sessions', newSessions);
}, _a.SET_SELECTED_SESSION_ID = function (state, _a) {
  var sessionId = _a.payload.sessionId;
  return state.set('selectedSessionId', sessionId);
}, _a.OPEN_SETTINGS_TAB = function (state) {
  var newState = state;
  var settingsTab = state.sessions.find(function (value) {
    return value.get('isSettingsTab', false);
  });

  if (!settingsTab) {
    settingsTab = makeSession().merge({
      isSettingsTab: true,
      isFile: true,
      name: 'Settings',
      changed: false
    });
    newState = newState.setIn(['sessions', settingsTab.id], settingsTab);
  }

  return newState.set('selectedSessionId', settingsTab.id);
}, _a.OPEN_CONFIG_TAB = function (state) {
  var newState = state;
  var configTab = state.sessions.find(function (value) {
    return value.get('isConfigTab', false);
  });

  if (!configTab) {
    configTab = makeSession().merge({
      isConfigTab: true,
      isFile: true,
      name: 'GraphQL Config',
      changed: false
    });
    newState = newState.setIn(['sessions', configTab.id], configTab);
  }

  return newState.set('selectedSessionId', configTab.id);
}, _a.NEW_FILE_TAB = function (state, _a) {
  var _b = _a.payload,
      fileName = _b.fileName,
      filePath = _b.filePath,
      file = _b.file;
  var newState = state;
  var fileTab = state.sessions.find(function (value) {
    return value.get('name', '') === fileName;
  });

  if (!fileTab) {
    fileTab = makeSession().merge({
      isFile: true,
      name: fileName,
      changed: false,
      file: file,
      filePath: filePath
    });
    newState = newState.setIn(['sessions', fileTab.id], fileTab);
  }

  return newState.set('selectedSessionId', fileTab.id).set('sessionCount', newState.sessions.size);
}, _a.NEW_SESSION = function (state, _a) {
  var _b = _a.payload,
      reuseHeaders = _b.reuseHeaders,
      endpoint = _b.endpoint;
  var currentSession = state.sessions.first();
  var newSession = {
    query: '',
    isReloadingSchema: currentSession.isReloadingSchema,
    endpointUnreachable: currentSession.endpointUnreachable
  };

  if (currentSession.endpointUnreachable) {
    newSession.responses = currentSession.responses;
  }

  var session = makeSession(endpoint || currentSession.endpoint).merge(newSession);

  if (reuseHeaders) {
    var selectedSessionId = selectors_1.getSelectedSessionId(state);
    var currentSession_1 = state.sessions.get(selectedSessionId);
    session = session.set('headers', currentSession_1.headers);
  } else {
    session = session.set('headers', state.headers);
  }

  return state.setIn(['sessions', session.id], session).set('selectedSessionId', session.id).set('sessionCount', state.sessions.size + 1);
}, // inject headers is used for graphql config
// it makes sure, that there definitely is a tab open with the correct header
_a.INJECT_HEADERS = function (state, _a) {
  var _b = _a.payload,
      headers = _b.headers,
      endpoint = _b.endpoint; // if there are no headers to inject, there's nothing to do

  if (!headers || headers === '' || Object.keys(headers).length === 0) {
    return state;
  }

  var headersString = typeof headers === 'string' ? headers : JSON.stringify(headers, null, 2);
  var selectedSessionId = selectors_1.getSelectedSessionId(state);
  var newState = state.set('headers', headersString);
  var currentSession = state.sessions.get(selectedSessionId);

  if (currentSession.headers === headersString) {
    return newState;
  }

  if (currentSession.query === constants_1.defaultQuery) {
    return newState.setIn(['sessions', selectedSessionId, 'headers'], headersString);
  }

  var session = makeSession(endpoint).set('headers', headersString);
  return newState.setIn(['sessions', session.id], session).set('selectedSessionId', session.id).set('sessionCount', state.sessions.size + 1);
}, _a.DUPLICATE_SESSION = function (state, _a) {
  var session = _a.payload.session;
  var newSession = session.set('id', cuid());
  return state.setIn(['sessions', newSession.id], newSession).set('selectedSessionId', newSession.id).set('sessionCount', state.sessions.size + 1);
}, _a.NEW_SESSION_FROM_QUERY = function (state, _a) {
  var query = _a.payload.query;
  var session = makeSession().set('query', query);
  return state.setIn(['sessions', session.id], session).set('sessionCount', state.sessions.size + 1);
}, _a.CLOSE_SELECTED_TAB = function (state) {
  var selectedSessionId = selectors_1.getSelectedSessionId(state);
  return closeTab(state, selectedSessionId).set('sessionCount', state.sessions.size - 1);
}, _a.SELECT_NEXT_TAB = function (state) {
  var selectedSessionId = selectors_1.getSelectedSessionId(state);
  var count = state.sessions.size;
  var keys = state.sessions.keySeq();
  var index = keys.indexOf(selectedSessionId);

  if (index + 1 < count) {
    return state.set('selectedSessionId', keys.get(index + 1));
  }

  return state.set('selectedSessionId', keys.get(0));
}, _a.SELECT_PREV_TAB = function (state) {
  var selectedSessionId = selectors_1.getSelectedSessionId(state);
  var count = state.sessions.size;
  var keys = state.sessions.keySeq();
  var index = keys.indexOf(selectedSessionId);

  if (index - 1 >= 0) {
    return state.set('selectedSessionId', keys.get(index - 1));
  }

  return state.set('selectedSessionId', keys.get(count - 1));
}, _a.SELECT_TAB_INDEX = function (state, _a) {
  var index = _a.payload.index;
  var keys = state.sessions.keySeq();
  return state.set('selectedSessionId', keys.get(index));
}, _a.SELECT_TAB = function (state, _a) {
  var sessionId = _a.payload.sessionId;
  return state.set('selectedSessionId', sessionId);
}, _a.CLOSE_TAB = function (state, _a) {
  var sessionId = _a.payload.sessionId;
  return closeTab(state, sessionId).set('sessionCount', state.sessions.size - 1);
}, _a.REORDER_TABS = function (state, _a) {
  var _b = _a.payload,
      src = _b.src,
      dest = _b.dest;
  var seq = state.sessions.toIndexedSeq();
  var indexes = [];

  for (var i = 0; i < seq.size; i++) {
    indexes.push(i);
  }

  var newIndexes = react_sortable_hoc_1.arrayMove(indexes, src, dest);
  var newSessions = immutable_1.OrderedMap();

  for (var i = 0; i < seq.size; i++) {
    var ndx = newIndexes[i];
    var val = seq.get(ndx);
    newSessions = newSessions.set(val.id, val);
  }

  return state.set('sessions', newSessions);
}, _a.EDIT_SETTINGS = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'changed'], true);
}, _a.SAVE_SETTINGS = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'changed'], false);
}, _a.EDIT_CONFIG = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'changed'], true);
}, _a.SAVE_CONFIG = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'changed'], false);
}, _a.EDIT_FILE = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'changed'], true);
}, _a.SAVE_FILE = function (state) {
  return state.setIn(['sessions', selectors_1.getSelectedSessionId(state), 'changed'], false);
}, _a), makeSessionState('')); // add a self-healing wrapper to clean up broken states

exports["default"] = function (state, action) {
  var newState = reducer(state, action);

  if (newState.selectedSessionId === '' && state.sessions.size > 0) {
    return newState.set('selectedSessionId', state.sessions.first().id);
  }

  return newState;
};

function closeTab(state, sessionId) {
  var length = state.sessions.size;
  var keys = state.sessions.keySeq();
  var newState = state.removeIn(['sessions', sessionId]);
  var session = state.sessions.get(sessionId); // if there is only one session, delete it and replace it by a new one
  // and keep the endpoint & headers of the last one

  if (length === 1) {
    var newSessionData = {
      query: '',
      headers: session.headers,
      isReloadingSchema: session.isReloadingSchema,
      endpointUnreachable: session.endpointUnreachable
    };

    if (session.endpointUnreachable) {
      newSessionData.responses = session.responses;
    }

    var newSession = makeSession(session.endpoint).merge(newSessionData);
    newState = newState.set('selectedSessionId', newSession.id);
    return newState.setIn(['sessions', newSession.id], newSession);
  }

  var selectedSessionId = selectors_1.getSelectedSessionId(state);
  var sessionIndex = keys.indexOf(sessionId); // if the session to be closed is selected, unselect it

  if (selectedSessionId === sessionId) {
    var leftNeighbour = sessionIndex - 1; // if its the first session on the left, take the right neighbour

    if (leftNeighbour < 0) {
      return newState.set('selectedSessionId', keys.get(1));
    }

    return newState.set('selectedSessionId', keys.get(leftNeighbour));
  } else {
    // otherwise the old selected session still can be selected, only the session has to be removed
    return newState;
  }
}