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
var ReactDOM = require("react-dom");
var styled_1 = require("../styled");
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClickOutside = function (event) {
            if (!_this.props.open) {
                return;
            }
            try {
                var domNode = ReactDOM.findDOMNode(_this);
                if ((!domNode || !domNode.contains(event.target)) &&
                    typeof _this.props.onClose !== 'undefined') {
                    _this.props.onClose(event);
                }
            }
            catch (e) {
                //
            }
        };
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleClickOutside, true);
    };
    Tooltip.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true);
    };
    Tooltip.prototype.render = function () {
        var _a = this.props, open = _a.open, children = _a.children, renderAfterContent = _a.renderAfterContent, onClick = _a.onClick;
        var anchorOrigin = this.props.anchorOrigin;
        return (<Wrapper visible={open} anchorTop={anchorOrigin.vertical === 'top'} anchorBottom={anchorOrigin.vertical === 'bottom'} anchorLeft={anchorOrigin.horizontal === 'left'} anchorRight={anchorOrigin.horizontal === 'right'} anchorCenter={anchorOrigin.horizontal === 'center'}>
        <Content onClick={onClick}>
          <BigTriangle />
          {children}
        </Content>

        {renderAfterContent && renderAfterContent()}
      </Wrapper>);
    };
    Tooltip.defaultProps = {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
    };
    return Tooltip;
}(React.PureComponent));
exports.default = Tooltip;
var Wrapper = styled_1.styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 9999;\n\n  text-align: left;\n  transform: translateX(-50%);\n\n  transition: opacity ease-out 0.2s;\n\n  ", " ", " ", " ", " ", " ", ";\n"], ["\n  position: absolute;\n  z-index: 9999;\n\n  text-align: left;\n  transform: translateX(-50%);\n\n  transition: opacity ease-out 0.2s;\n\n  ",
    " ",
    " ",
    " ",
    " ",
    " ",
    ";\n"])), function (p) {
    return p.visible
        ? styled_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          visibility: visible;\n          opacity: 1;\n        "], ["\n          visibility: visible;\n          opacity: 1;\n        "]))) : styled_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          visibility: hidden;\n          opacity: 0;\n        "], ["\n          visibility: hidden;\n          opacity: 0;\n        "])));
}, function (p) {
    return p.anchorTop
        ? styled_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        bottom: 100%;\n        margin-bottom: 16px;\n\n        ", " {\n          bottom: -10px;\n        }\n      "], ["\n        bottom: 100%;\n        margin-bottom: 16px;\n\n        ", " {\n          bottom: -10px;\n        }\n      "])), BigTriangle) : '';
}, function (p) {
    return p.anchorBottom
        ? styled_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        top: 100%;\n        margin-top: 16px;\n\n        ", " {\n          top: -10px;\n          border-width: 0 10px 10px 10px;\n          border-color: ", " transparent\n            ", " transparent;\n        }\n      "], ["\n        top: 100%;\n        margin-top: 16px;\n\n        ", " {\n          top: -10px;\n          border-width: 0 10px 10px 10px;\n          border-color: ", " transparent\n            ", " transparent;\n        }\n      "])), BigTriangle, function (k) { return k.theme.colours.paleGrey; }, function (k) { return k.theme.colours.paleGrey; }) : '';
}, function (p) {
    return p.anchorLeft
        ? styled_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        left: 0;\n        transform: none;\n\n        ", " {\n          left: 25px;\n        }\n      "], ["\n        left: 0;\n        transform: none;\n\n        ", " {\n          left: 25px;\n        }\n      "])), BigTriangle) : '';
}, function (p) {
    return p.anchorRight
        ? styled_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        right: 0;\n        transform: none;\n\n        ", " {\n          right: 25px;\n        }\n      "], ["\n        right: 0;\n        transform: none;\n\n        ", " {\n          right: 25px;\n        }\n      "])), BigTriangle) : '';
}, function (p) {
    return p.anchorCenter
        ? styled_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        left: 50%;\n\n        ", " {\n          left: calc(50% - 10px);\n        }\n      "], ["\n        left: 50%;\n\n        ", " {\n          left: calc(50% - 10px);\n        }\n      "])), BigTriangle) : '';
});
var Content = styled_1.styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  padding: ", " ", ";\n  white-space: nowrap;\n\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n\n  padding: ", " ", ";\n  white-space: nowrap;\n\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n"])), function (p) { return p.theme.sizes.small12; }, function (p) { return p.theme.sizes.small16; }, function (p) { return p.theme.colours.paleGrey; }, function (p) { return p.theme.sizes.smallRadius; }, function (p) { return p.theme.colours.paleText; });
var BigTriangle = styled_1.styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  width: 0;\n  height: 0;\n\n  border-style: solid;\n  border-width: 10px 10px 0 10px;\n  border-color: ", " transparent transparent\n    transparent;\n"], ["\n  position: absolute;\n  width: 0;\n  height: 0;\n\n  border-style: solid;\n  border-width: 10px 10px 0 10px;\n  border-color: ", " transparent transparent\n    transparent;\n"])), function (p) { return p.theme.colours.paleGrey; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=Tooltip.jsx.map