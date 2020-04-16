"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("../../../../styled");
var constants_1 = require("../../../../constants");
exports.SchemaExplorerContainer = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: stretch;\n  padding: 0px 8px 8px 8px;\n  background: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  outline: none !important;\n"], ["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: stretch;\n  padding: 0px 8px 8px 8px;\n  background: ",
    ";\n  font-family: ", ";\n  font-size: ", ";\n  outline: none !important;\n"])), function (p) {
    return p.theme.mode === 'dark' ? p.theme.editorColours.editorBackground : 'white';
}, function (p) { return p.theme.settings['editor.fontFamily']; }, function (p) { return p.theme.settings['editor.fontSize'] + "px"; });
var SDLColumn = function (_a) {
    var children = _a.children, _b = _a.width, width = _b === void 0 ? constants_1.columnWidth : _b;
    return <Column style={{ width: width }}>{children}</Column>;
};
exports.SDLColumn = SDLColumn;
var Column = styled_1.styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex: 1 0 auto;\n  flex-flow: column;\n  padding-bottom: 20px;\n  border-right: 1px solid ", ";\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex: 1 0 auto;\n  flex-flow: column;\n  padding-bottom: 20px;\n  border-right: 1px solid ", ";\n  overflow: hidden;\n"])), function (p) { return p.theme.colours.black10; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=SDLStyles.jsx.map