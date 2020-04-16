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

var ToggleButton = function ToggleButton(_a) {
  var checked = _a.checked,
      onChange = _a.onChange,
      className = _a.className;
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: className,
    onClick: onChange
  }, /*#__PURE__*/React.createElement(Input, {
    type: "checkbox",
    checked: checked,
    readOnly: true
  }), /*#__PURE__*/React.createElement(Slider, {
    checked: checked
  }));
};

exports["default"] = ToggleButton;
var Wrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  width: 39px;\n  height: 21px;\n"], ["\n  position: relative;\n  display: inline-block;\n\n  width: 39px;\n  height: 21px;\n"])));
var Input = styled_1.styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
var Slider = styled_1.styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  transition: transform 70ms linear;\n  border-radius: 23px;\n  cursor: pointer;\n\n  background: ", ";\n\n  &:before {\n    position: absolute;\n    content: '';\n    height: 23px;\n    width: 23px;\n    left: -1px;\n    bottom: -1px;\n    background-color: white;\n    border-radius: 50%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n    transition: transform 70ms linear;\n\n    transform: ", ";\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  transition: transform 70ms linear;\n  border-radius: 23px;\n  cursor: pointer;\n\n  background: ", ";\n\n  &:before {\n    position: absolute;\n    content: '';\n    height: 23px;\n    width: 23px;\n    left: -1px;\n    bottom: -1px;\n    background-color: white;\n    border-radius: 50%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n    transition: transform 70ms linear;\n\n    transform: ", ";\n  }\n"])), function (p) {
  return p.checked ? p.theme.colours.green : p.theme.colours.black40;
}, function (p) {
  return p.checked ? 'translateX(19px)' : '';
});
var templateObject_1, templateObject_2, templateObject_3;