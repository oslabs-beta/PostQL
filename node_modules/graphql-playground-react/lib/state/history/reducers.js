"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var immutable_1 = require("immutable");

var redux_actions_1 = require("redux-actions");

var cuid = require("cuid");

exports.defaultHistoryState = immutable_1.OrderedMap({});
exports["default"] = redux_actions_1.handleActions({
  TOGGLE_HISTORY_ITEM_STARRING: function TOGGLE_HISTORY_ITEM_STARRING(state, _a) {
    var sessionId = _a.payload.sessionId;
    return state.setIn([sessionId, 'starred'], !state.getIn([sessionId, 'starred']));
  },
  ADD_HISTORY_ITEM: function ADD_HISTORY_ITEM(state, _a) {
    var session = _a.payload.session;
    var id = cuid();
    return state.slice(-40).set(id, session.merge({
      id: id,
      date: new Date(),
      responses: immutable_1.List()
    }));
  }
}, exports.defaultHistoryState);