"use strict";

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var redux_actions_1 = require("redux-actions");

exports.share = (_a = redux_actions_1.createActions({
  TOGGLE_SHARE_HISTORY: function TOGGLE_SHARE_HISTORY() {
    return {};
  },
  TOGGLE_SHARE_HEADERS: function TOGGLE_SHARE_HEADERS() {
    return {};
  },
  TOGGLE_SHARE_ALL_TABS: function TOGGLE_SHARE_ALL_TABS() {
    return {};
  },
  SHARE: function SHARE() {
    return {};
  },
  SET_SHARE_URL: function SET_SHARE_URL(shareUrl) {
    return {
      shareUrl: shareUrl
    };
  }
}), _a.share), exports.toggleShareHistory = _a.toggleShareHistory, exports.toggleShareHeaders = _a.toggleShareHeaders, exports.toggleShareAllTabs = _a.toggleShareAllTabs, exports.setShareUrl = _a.setShareUrl;