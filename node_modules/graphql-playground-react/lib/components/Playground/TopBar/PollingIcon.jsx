"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var index_1 = require("../../../styled/index");
var Positioner_1 = require("./Positioner");
var PollingIcon = function (props) { return (<Positioner onClick={props.onClick} title="Polling Schema">
    <Icon animate={props.animate}/>
  </Positioner>); };
exports.default = PollingIcon;
var pulse = index_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n0% {\n  box-shadow: 0 0 0 0 rgba(139, 149, 156, 0.4);\n}\n70% {\n  box-shadow: 0 0 0 10px rgba(139, 149, 156, 0);\n}\n100% {\n  box-shadow: 0 0 0 0 rgba(139, 149, 156, 0);\n}\n"], ["\n0% {\n  box-shadow: 0 0 0 0 rgba(139, 149, 156, 0.4);\n}\n70% {\n  box-shadow: 0 0 0 10px rgba(139, 149, 156, 0);\n}\n100% {\n  box-shadow: 0 0 0 0 rgba(139, 149, 156, 0);\n}\n"])));
var Positioner = index_1.styled(Positioner_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Icon = index_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: ", ";\n  box-shadow: 0 0 0 ", ";\n  ", ";\n"], ["\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: ", ";\n  box-shadow: 0 0 0 ", ";\n  ",
    ";\n"])), function (p) { return p.theme.editorColours.pollingIcon; }, function (p) { return p.theme.editorColours.pollingIconShadow; }, function (p) {
    return p.animate
        ? index_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          animation: ", " 2s infinite;\n        "], ["\n          animation: ", " 2s infinite;\n        "])), pulse) : undefined;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=PollingIcon.jsx.map