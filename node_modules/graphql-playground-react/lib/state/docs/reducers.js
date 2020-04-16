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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var immutable_1 = require("immutable");

var redux_actions_1 = require("redux-actions");

var constants_1 = require("../../constants");

var DocsSession =
/** @class */
function (_super) {
  __extends(DocsSession, _super);

  function DocsSession() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DocsSession.prototype.toJSON = function () {
    var obj = this.toObject(); // don't serialize navStack, as it could contain circular references in the type definitions

    return immutable_1.set(obj, 'navStack', immutable_1.List([]));
  };

  return DocsSession;
}(immutable_1.Record({
  navStack: immutable_1.List([]),
  docsOpen: false,
  docsWidth: constants_1.columnWidth,
  activeTabIdx: null,
  keyMove: false
}));

exports.DocsSession = DocsSession;
var defaultState = immutable_1.Map({
  '': new DocsSession()
});
exports["default"] = redux_actions_1.handleActions({
  SET_STACKS: function SET_STACKS(state, _a) {
    var _b = _a.payload,
        sessionId = _b.sessionId,
        stacks = _b.stacks;
    var session = getSession(state, sessionId);
    session = session.set('navStack', stacks);
    return state.set(sessionId, session);
  },
  ADD_STACK: function ADD_STACK(state, _a) {
    var _b = _a.payload,
        sessionId = _b.sessionId,
        field = _b.field,
        x = _b.x,
        y = _b.y;

    if (!field.path) {
      field.path = field.name;
    }

    var session = getSession(state, sessionId);
    session = session.update('navStack', function (navStack) {
      var newNavStack = navStack;

      if (x < newNavStack.count()) {
        newNavStack = newNavStack.slice(0, x);
      }

      return newNavStack.push(immutable_1.Map({
        x: x,
        y: y,
        field: field
      }));
    });
    return state.set(sessionId, session);
  },
  TOGGLE_DOCS: function TOGGLE_DOCS(state, _a) {
    var _b = _a.payload,
        sessionId = _b.sessionId,
        activeTabIdx = _b.activeTabIdx;
    var session = getSession(state, sessionId);
    session = session.set('docsOpen', !session.docsOpen);

    if (typeof activeTabIdx === 'number') {
      session = session.set('activeTabIdx', session.docsOpen ? activeTabIdx : null);
    }

    return state.set(sessionId, session);
  },
  SET_DOCS_VISIBLE: function SET_DOCS_VISIBLE(state, _a) {
    var _b = _a.payload,
        sessionId = _b.sessionId,
        open = _b.open,
        activeTabIdx = _b.activeTabIdx;
    var session = getSession(state, sessionId);
    session = session.set('docsOpen', !!open);

    if (!session.docsOpen) {
      session = session.set('activeTabIdx', null);
    } else if (typeof activeTabIdx === 'number') {
      session = session.set('activeTabIdx', activeTabIdx);
    }

    return state.set(sessionId, session);
  },
  CHANGE_WIDTH_DOCS: function CHANGE_WIDTH_DOCS(state, _a) {
    var _b = _a.payload,
        sessionId = _b.sessionId,
        width = _b.width;
    var session = getSession(state, sessionId);
    session = session.set('docsWidth', width);
    return state.set(sessionId, session);
  },
  CHANGE_KEY_MOVE: function CHANGE_KEY_MOVE(state, _a) {
    var _b = _a.payload,
        sessionId = _b.sessionId,
        keyMove = _b.keyMove;
    var session = getSession(state, sessionId);
    session = session.set('keyMove', keyMove);
    return state.set(sessionId, session);
  }
}, defaultState);

function getSession(state, sessionId) {
  if (!sessionId) {
    throw new Error('sessionId cant be null');
  }

  return state.get(sessionId) || new DocsSession();
}