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

var Icons_1 = require("./Icons");

var styled_1 = require("../styled");

var actions_1 = require("../state/sessions/actions");

var react_redux_1 = require("react-redux");

var Settings =
/** @class */
function (_super) {
  __extends(Settings, _super);

  function Settings() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Settings.prototype.render = function () {
    return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(Icons_1.SettingsIcon, {
      width: 23,
      height: 23,
      onClick: this.props.onClick,
      title: "Settings"
    })));
  };

  return Settings;
}(React.Component);

exports["default"] = react_redux_1.connect(null, {
  onClick: actions_1.openSettingsTab
})(Settings);
var Wrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1005;\n  right: 20px;\n  top: 17px;\n"], ["\n  position: absolute;\n  z-index: 1005;\n  right: 20px;\n  top: 17px;\n"])));
var IconWrapper = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n    transition: 0.1s linear fill;\n  }\n\n  &:hover {\n    svg {\n      fill: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n    transition: 0.1s linear fill;\n  }\n\n  &:hover {\n    svg {\n      fill: ", ";\n    }\n  }\n"])), function (p) {
  return p.theme.editorColours.icon;
}, function (p) {
  return p.theme.editorColours.iconHover;
});
var templateObject_1, templateObject_2;