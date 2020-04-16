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

var styled_1 = require("../../../styled");

var Title = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: rgba(0, 0, 0, 0.3);\n  cursor: default;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase !important;\n  letter-spacing: 1px;\n  padding: 16px;\n  user-select: none;\n"], ["\n  color: rgba(0, 0, 0, 0.3);\n  cursor: default;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase !important;\n  letter-spacing: 1px;\n  padding: 16px;\n  user-select: none;\n"])));

exports.CategoryTitle = function (_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement(Title, null, children);
};

var templateObject_1;