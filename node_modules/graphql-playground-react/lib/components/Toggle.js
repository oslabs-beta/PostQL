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

var styled_1 = require("../styled");

var Toggle = function Toggle(_a) {
  var choices = _a.choices,
      onChange = _a.onChange,
      activeChoice = _a.activeChoice;
  return /*#__PURE__*/React.createElement(Wrapper, null, choices.map(function (choice, i) {
    return /*#__PURE__*/React.createElement(Choice, {
      active: choice === activeChoice,
      key: choice // tslint:disable-next-line
      ,
      onClick: function onClick() {
        return onChange(choice, i);
      }
    }, choice);
  }));
};

var Wrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"]))); // prettier-ignore

var Choice = styled_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 4px 8px;\n  margin-right: ", ";\n\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n\n  cursor: pointer;\n  border-radius: ", ";\n  color: ", ";\n\n  ", "\n"], ["\n  padding: 4px 8px;\n  margin-right: ", ";\n\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n\n  cursor: pointer;\n  border-radius: ", ";\n  color: ", ";\n\n  ", "\n"])), function (p) {
  return p.theme.sizes.small6;
}, function (p) {
  return p.theme.sizes.smallRadius;
}, function (p) {
  return p.theme.colours.black40;
}, function (p) {
  return p.active ? styled_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: rgba(0, 0, 0, 0.7);\n    background: #b8bfc4;\n  "], ["\n    color: rgba(0, 0, 0, 0.7);\n    background: #b8bfc4;\n  "]))) : styled_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    /* hover state when it's not active */\n    &:hover {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  "], ["\n    /* hover state when it's not active */\n    &:hover {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  "])));
});
exports["default"] = Toggle;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;