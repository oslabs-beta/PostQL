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
var react_redux_1 = require("react-redux");
var createStore_1 = require("../state/createStore");
var reducers_1 = require("../state/workspace/reducers");
var actions_1 = require("../state/general/actions");
var PlaygroundWrapper_1 = require("./PlaygroundWrapper");
var store = createStore_1.default();
var MiddlewareApp = /** @class */ (function (_super) {
    __extends(MiddlewareApp, _super);
    function MiddlewareApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiddlewareApp.prototype.componentDidMount = function () {
        var initialSettings = reducers_1.getSettings(store.getState());
        var mergedSettings = __assign(__assign({}, initialSettings), this.props.settings);
        var settingsString = JSON.stringify(mergedSettings, null, 2);
        store.dispatch(actions_1.setSettingsString(settingsString));
    };
    MiddlewareApp.prototype.render = function () {
        return (<react_redux_1.Provider store={store}>
        <PlaygroundWrapper_1.default {...this.props}/>
      </react_redux_1.Provider>);
    };
    return MiddlewareApp;
}(React.Component));
exports.default = MiddlewareApp;
//# sourceMappingURL=MiddlewareApp.jsx.map