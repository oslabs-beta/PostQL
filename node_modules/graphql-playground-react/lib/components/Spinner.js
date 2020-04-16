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

var Spinner = function Spinner() {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(SpinnerNode, null));
};

var rotation = styled_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"])));
var Wrapper = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 36px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 36px;\n  z-index: 10;\n"], ["\n  height: 36px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 36px;\n  z-index: 10;\n"])));
var SpinnerNode = styled_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  vertical-align: middle;\n\n  animation: ", " 0.6s infinite linear;\n\n  border-radius: 100%;\n  border-bottom: 6px solid rgba(150, 150, 150, 0.15);\n  border-left: 6px solid rgba(150, 150, 150, 0.15);\n  border-right: 6px solid rgba(150, 150, 150, 0.15);\n  border-top: 6px solid rgba(150, 150, 150, 0.8);\n"], ["\n  position: absolute;\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  vertical-align: middle;\n\n  animation: ", " 0.6s infinite linear;\n\n  border-radius: 100%;\n  border-bottom: 6px solid rgba(150, 150, 150, 0.15);\n  border-left: 6px solid rgba(150, 150, 150, 0.15);\n  border-right: 6px solid rgba(150, 150, 150, 0.15);\n  border-top: 6px solid rgba(150, 150, 150, 0.8);\n"])), rotation);
exports["default"] = Spinner;
var templateObject_1, templateObject_2, templateObject_3;