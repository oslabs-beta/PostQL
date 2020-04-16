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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Modal = require("react-modal");
var styled_1 = require("../styled");
exports.fieldModalStyle = {
    overlay: {
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        position: 'relative',
        width: 554,
        height: 'auto',
        top: 'initial',
        left: 'initial',
        right: 'initial',
        bottom: 'initial',
        borderRadius: 2,
        padding: 0,
        border: 'none',
        background: 'none',
        // boxShadow: '0 1px 7px rgba(0,0,0,.2)',
        overflow: 'visible',
    },
};
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.render = function () {
        var darkBg = this.props.darkBg;
        var modalStyle = {
            overlay: __assign(__assign({}, exports.fieldModalStyle.overlay), { background: darkBg ? 'rgba(23,42,58,1.0)' : 'rgba(255,255,255,.9)' }),
            content: __assign(__assign({}, exports.fieldModalStyle.content), { width: this.props.width || 560 }),
        };
        return (<Modal isOpen={true} onRequestClose={this.props.onRequestClose} style={modalStyle} ariaHideApp={false} contentLabel="Popup">
        <ContentWrapper>{this.props.children}</ContentWrapper>
      </Modal>);
    };
    return Popup;
}(React.Component));
exports.default = Popup;
var ContentWrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;
//# sourceMappingURL=Popup.jsx.map