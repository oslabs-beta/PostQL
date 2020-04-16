"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var immutable_1 = require("immutable");
exports.toJS = function (WrappedComponent) { return function (wrappedComponentProps) {
    var KEY = 0;
    var VALUE = 1;
    var propsJS = Object.entries(wrappedComponentProps).reduce(function (newProps, wrappedComponentProp) {
        newProps[wrappedComponentProp[KEY]] = immutable_1.isImmutable(wrappedComponentProp[VALUE])
            ? wrappedComponentProp[VALUE].toJS()
            : wrappedComponentProp[VALUE];
        return newProps;
    }, {});
    return <WrappedComponent {...propsJS}/>;
}; };
//# sourceMappingURL=toJS.jsx.map