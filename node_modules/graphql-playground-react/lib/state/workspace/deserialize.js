"use strict";

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

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reducers_1 = require("../docs/reducers");

var reducers_2 = require("../sessions/reducers");

var reducers_3 = require("../sharing/reducers");

var immutable_1 = require("immutable");

var reducers_4 = require("../general/reducers");

var lodash_1 = require("lodash");

var reducers_5 = require("./reducers");

var reducers_6 = require("../appHistory/reducers");

function deserializePersistedState(state) {
  return new reducers_5.RootState({
    workspaces: deserializeWorkspaces(state.workspaces),
    selectedWorkspace: state.selectedWorkspace,
    settingsString: reducers_5.normalizeSettingsString(state.settingsString),
    appHistory: deserializeAppHistory(state.appHistory),
    general: deserializeGeneral(state.general)
  });
}

exports.deserializePersistedState = deserializePersistedState;

function deserializeWorkspaces(workspaces) {
  return immutable_1.Map(lodash_1.mapValues(workspaces, function (workspace, workspaceId) {
    return new reducers_5.Workspace({
      docs: deserializeDocs(workspace.docs),
      sessions: deserializeSessionsState(workspace.sessions),
      sharing: deserializeSharing(workspace.sharing),
      history: deserializeHistory(workspace.history)
    });
  }));
}

function deserializeAppHistory(state) {
  return new reducers_6.AppHistory({
    items: immutable_1.OrderedMap(lodash_1.mapValues(state.items, function (item) {
      return new reducers_6.AppHistoryItem(item);
    }))
  });
}

function deserializeDocs(state) {
  return immutable_1.Map(lodash_1.mapValues(state, function (docsSession) {
    return new reducers_1.DocsSession({
      docsOpen: docsSession.docsOpen,
      keyMove: docsSession.keyMove,
      docsWidth: docsSession.docsWidth,
      navStack: deserializeNavstack(docsSession.navStack)
    });
  }));
}

function deserializeNavstack(navStack) {
  // note that stacks are plain objects. could be refactored to Map later
  return immutable_1.List(navStack.map(function (s) {
    return immutable_1.Map(s);
  }));
}

function deserializeSessionsState(state) {
  var sessions = deserializeSessions(state.sessions);
  var selectedSessionId = state.selectedSessionId && state.selectedSessionId !== '' ? state.selectedSessionId : // @ts-ignore
  sessions.first().id;
  return new reducers_2.SessionState({
    selectedSessionId: selectedSessionId,
    // @ts-ignore
    sessions: sessions,
    sessionCount: sessions.size,
    headers: state.headers
  });
}

function deserializeSessions(state) {
  return immutable_1.OrderedMap(lodash_1.mapValues(state, function (session) {
    return deserializeSession(session);
  }));
}

function deserializeSession(session) {
  return new reducers_2.Session(__assign(__assign({}, session), {
    responses: deserializeResponses(session.responses),
    operations: immutable_1.fromJS(session.operations),
    variableToType: immutable_1.Map(session.variableToType),
    date: session.date ? new Date(session.date) : undefined,
    currentQueryStartTime: session.currentQueryStartTime ? new Date(session.currentQueryStartTime) : undefined,
    currentQueryEndTime: session.currentQueryEndTime ? new Date(session.currentQueryEndTime) : undefined,
    nextQueryStartTime: session.nextQueryStartTime ? new Date(session.nextQueryStartTime) : undefined
  }));
}

function deserializeResponses(responses) {
  return immutable_1.List(responses.filter(function (r) {
    return r.isSchemaError;
  }).map(function (response) {
    return deserializeResponse(response);
  }));
}

function deserializeResponse(response) {
  return new reducers_2.ResponseRecord({
    resultID: response.resultID,
    date: response.date,
    time: new Date(response.time),
    isSchemaError: response.isSchemaError || false
  });
}

function deserializeSharing(_a) {
  var shareUrl = _a.shareUrl,
      state = __rest(_a, ["shareUrl"]); // dont deserialize the shareUrl


  return new reducers_3.SharingState(state);
}

function deserializeHistory(state) {
  return deserializeSessions(state);
}

function deserializeGeneral(state) {
  return new reducers_4.GeneralState(state);
}