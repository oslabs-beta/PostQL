"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("../styled");
var Icons_1 = require("./Icons");
exports.Button = function (_a) {
    var purple = _a.purple, hideArrow = _a.hideArrow, children = _a.children, onClick = _a.onClick;
    return (<exports.ButtonBox purple={purple} onClick={onClick}>
    {children ? children : 'Learn more'}
    {!hideArrow && <Icons_1.FullArrowRightIcon color={'red'} width={14} height={11}/>}
  </exports.ButtonBox>);
};
exports.ButtonBox = styled_1.styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  padding: 6px 16px;\n  border-radius: 2px;\n  background: ", ";\n  color: ", ";\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 1px;\n  white-space: nowrap;\n\n  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;\n  cursor: pointer;\n  &:hover {\n    background: ", ";\n    transform: ", ";\n    svg {\n      animation: move 1s ease infinite;\n    }\n  }\n\n  svg {\n    margin-left: 10px;\n    fill: ", ";\n  }\n\n  @keyframes move {\n    0% {\n      transform: translate3D(0, 0, 0);\n    }\n\n    50% {\n      transform: translate3D(3px, 0, 0);\n    }\n\n    100% {\n      transform: translate3D(0, 0, 0);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  padding: 6px 16px;\n  border-radius: 2px;\n  background: ", ";\n  color: ", ";\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 1px;\n  white-space: nowrap;\n\n  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;\n  cursor: pointer;\n  &:hover {\n    background: ", ";\n    transform: ",
    ";\n    svg {\n      animation: move 1s ease infinite;\n    }\n  }\n\n  svg {\n    margin-left: 10px;\n    fill: ", ";\n  }\n\n  @keyframes move {\n    0% {\n      transform: translate3D(0, 0, 0);\n    }\n\n    50% {\n      transform: translate3D(3px, 0, 0);\n    }\n\n    100% {\n      transform: translate3D(0, 0, 0);\n    }\n  }\n"])), function (p) { return (p.purple ? 'rgb(218, 27, 127)' : '#2a7ed2'); }, function (p) { return p.theme.colours.white; }, function (p) { return (p.purple ? 'rgb(164, 3, 111)' : '#3f8ad7'); }, function (p) {
    return p.purple ? 'translate3D(0, 0, 0)' : 'translate3D(0, -1px, 0)';
}, function (p) { return p.theme.colours.white; });
var templateObject_1;
//# sourceMappingURL=Button.jsx.map