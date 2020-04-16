"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var constants_1 = require("../../../constants");
var styled_1 = require("../../../styled");
var ColumnDoc = function (_a) {
    var children = _a.children, _b = _a.overflow, overflow = _b === void 0 ? true : _b, _c = _a.width, width = _c === void 0 ? constants_1.columnWidth : _c;
    return (<Column style={{ width: width }} verticalScroll={overflow}>
      {children}
    </Column>);
};
exports.default = ColumnDoc;
var Column = styled_1.styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 0 0 auto;\n  flex-flow: column;\n  padding-bottom: 20px;\n  border-right: 1px solid ", ";\n  overflow-x: ", "\n  overflow-y: ", "\n"], ["\n  display: flex;\n  flex: 0 0 auto;\n  flex-flow: column;\n  padding-bottom: 20px;\n  border-right: 1px solid ", ";\n  overflow-x: ", "\n  overflow-y: ", "\n"])), function (p) { return p.theme.colours.black10; }, function (p) { return (p.verticalScroll ? 'hidden' : 'auto'); }, function (p) { return (p.verticalScroll ? 'scroll' : 'auto'); });
var templateObject_1;
//# sourceMappingURL=ColumnDoc.jsx.map