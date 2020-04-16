"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var graphql_1 = require("graphql");
var styled_1 = require("../../../styled");
function Argument(_a) {
    var arg = _a.arg, showDefaultValue = _a.showDefaultValue;
    return (<ArgumentLine>
      <span className="arg-name">{arg.name}</span>
      {': '}
      <span className="type-name">{renderType(arg.type)}</span>
      {arg.defaultValue !== undefined &&
        showDefaultValue !== false && (<span>
            {' = '}
            <span className="arg-default-value">
              {graphql_1.print(graphql_1.astFromValue(arg.defaultValue, arg.type))}
            </span>
          </span>)}
    </ArgumentLine>);
}
exports.default = Argument;
function renderType(type) {
    if (type instanceof graphql_1.GraphQLNonNull) {
        return (<span>
        {renderType(type.ofType)}
        {'!'}
      </span>);
    }
    if (type instanceof graphql_1.GraphQLList) {
        return (<span>
        {'['}
        {renderType(type.ofType)}
        {']'}
      </span>);
    }
    return <span>{type.name}</span>;
}
var ArgumentLine = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: 16px;\n"], ["\n  margin-left: 16px;\n"])));
var templateObject_1;
//# sourceMappingURL=ArgumentInline.jsx.map