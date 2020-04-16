"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Icons_1 = require("./Icons");
var styled_1 = require("../styled");
var actions_1 = require("../state/sessions/actions");
var react_redux_1 = require("react-redux");
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.render = function () {
        return (<Wrapper>
        <IconWrapper>
          <Icons_1.SettingsIcon width={23} height={23} onClick={this.props.onClick} title="Settings"/>
        </IconWrapper>
      </Wrapper>);
    };
    return Settings;
}(React.Component));
exports.default = react_redux_1.connect(null, { onClick: actions_1.openSettingsTab })(Settings);
var Wrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1005;\n  right: 20px;\n  top: 17px;\n"], ["\n  position: absolute;\n  z-index: 1005;\n  right: 20px;\n  top: 17px;\n"])));
var IconWrapper = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n    transition: 0.1s linear fill;\n  }\n\n  &:hover {\n    svg {\n      fill: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n    transition: 0.1s linear fill;\n  }\n\n  &:hover {\n    svg {\n      fill: ", ";\n    }\n  }\n"])), function (p) { return p.theme.editorColours.icon; }, function (p) { return p.theme.editorColours.iconHover; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=Settings.jsx.map