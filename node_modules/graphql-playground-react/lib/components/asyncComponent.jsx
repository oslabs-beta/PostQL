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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Spinner_1 = require("./Spinner");
var asyncComponent = function (importComponent) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                component: null,
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            var _this = this;
            importComponent().then(function (cmp) {
                _this.setState({ component: cmp.default });
            });
        };
        class_1.prototype.render = function () {
            var C = this.state.component;
            return C ? <C {...this.props}/> : <Spinner_1.default />;
        };
        return class_1;
    }(React.Component));
};
exports.default = asyncComponent;
//# sourceMappingURL=asyncComponent.jsx.map