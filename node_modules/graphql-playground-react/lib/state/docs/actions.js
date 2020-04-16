"use strict";

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var redux_actions_1 = require("redux-actions");

exports.setStacks = (_a = redux_actions_1.createActions({
  SET_STACKS: function SET_STACKS(sessionId, stacks) {
    return {
      sessionId: sessionId,
      stacks: stacks
    };
  },
  ADD_STACK: function ADD_STACK(sessionId, field, x, y) {
    return {
      sessionId: sessionId,
      field: field,
      x: x,
      y: y
    };
  },
  TOGGLE_DOCS: function TOGGLE_DOCS(sessionId, activeTabIdx) {
    return {
      sessionId: sessionId,
      activeTabIdx: activeTabIdx
    };
  },
  SET_DOCS_VISIBLE: function SET_DOCS_VISIBLE(sessionId, open, activeTabIdx) {
    return {
      sessionId: sessionId,
      open: open,
      activeTabIdx: activeTabIdx
    };
  },
  CHANGE_WIDTH_DOCS: function CHANGE_WIDTH_DOCS(sessionId, width) {
    return {
      sessionId: sessionId,
      width: width
    };
  },
  CHANGE_KEY_MOVE: function CHANGE_KEY_MOVE(sessionId, move) {
    return {
      sessionId: sessionId,
      move: move
    };
  },
  SHOW_DOC_FOR_REFERENCE: function SHOW_DOC_FOR_REFERENCE(reference) {
    return {
      reference: reference
    };
  }
}), _a.setStacks), exports.addStack = _a.addStack, exports.toggleDocs = _a.toggleDocs, exports.setDocsVisible = _a.setDocsVisible, exports.changeWidthDocs = _a.changeWidthDocs, exports.changeKeyMove = _a.changeKeyMove, exports.showDocForReference = _a.showDocForReference;