"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var styled_1 = require("../../styled");

var Icons_1 = require("../Icons");
/* tslint:disable */


var HistoryChooser = function HistoryChooser(_a) {
  var selectedFilter = _a.selectedFilter,
      onSelectFilter = _a.onSelectFilter,
      theme = _a.theme;
  return /*#__PURE__*/React.createElement(Chooser, null, /*#__PURE__*/React.createElement(Filter, {
    active: selectedFilter === 'HISTORY',
    onClick: function onClick() {
      return onSelectFilter('HISTORY');
    }
  }, /*#__PURE__*/React.createElement(Icons_1.History, {
    color: selectedFilter === 'HISTORY' ? theme.colours.white : theme.colours.black30,
    strokeWidth: 3,
    width: 25,
    height: 25
  }), /*#__PURE__*/React.createElement(FilterText, null, "History")), /*#__PURE__*/React.createElement(Filter, {
    active: selectedFilter === 'STARRED',
    onClick: function onClick() {
      return onSelectFilter('STARRED');
    }
  }, /*#__PURE__*/React.createElement(Icons_1.Star, {
    color: selectedFilter === 'STARRED' ? theme.colours.white : theme.colours.black30,
    width: 16,
    height: 16
  }), /*#__PURE__*/React.createElement(FilterText, null, "Starred")));
};

exports["default"] = styled_1.withTheme(HistoryChooser);
var Chooser = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var Filter = styled_1.styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: content-box;\n  height: 24px;\n  z-index: ", ";\n  display: flex;\n  align-items: center;\n  margin: 0 -2px;\n  padding: ", ";\n  background: ", ";\n\n  color: ", ";\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  border-radius: 2px;\n  cursor: pointer;\n"], ["\n  box-sizing: content-box;\n  height: 24px;\n  z-index: ", ";\n  display: flex;\n  align-items: center;\n  margin: 0 -2px;\n  padding: ", ";\n  background: ", ";\n\n  color: ", ";\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  border-radius: 2px;\n  cursor: pointer;\n"])), function (p) {
  return p.active ? 2 : 0;
}, function (p) {
  return p.active ? '7px 9px 8px 9px' : '5px 13px 6px 13px';
}, function (p) {
  return p.active ? p.theme.colours.green : p.theme.colours.black07;
}, function (p) {
  return p.active ? p.theme.colours.white : p.theme.colours.black30;
});
var FilterText = styled_1.styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 6px;\n"], ["\n  margin-left: 6px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;