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
var graphql_1 = require("graphql");
var ArgumentInline_1 = require("../../DocExplorer/ArgumentInline");
var styled_1 = require("../../../../styled");
var SDLType = /** @class */ (function (_super) {
    __extends(SDLType, _super);
    function SDLType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SDLType.prototype.render = function () {
        var _a = this.props, type = _a.type, className = _a.className, beforeNode = _a.beforeNode, afterNode = _a.afterNode, showParentName = _a.showParentName;
        var isGraphqlType = graphql_1.isType(type);
        var fieldName = showParentName && type.parent ? (<span>
          {type.parent.name}.<b>{type.name}</b>
        </span>) : (type.name);
        return (<DocsCategoryItem className={"doc-category-item" + (className ? className : '')}>
        {beforeNode}
        {beforeNode && ' '}
        {!isGraphqlType && (<span>
            <span className="field-name">{fieldName}</span>
            {type.args &&
            type.args.length > 0 && [
            '(',
            <span key="args">
                  {type.args.map(function (arg) { return (<ArgumentInline_1.default key={arg.name} arg={arg}/>); })}
                </span>,
            ')',
        ]}
            {': '}
          </span>)}
        <span className="type-name">{renderType(type.type || type)}</span>
        {type.defaultValue !== undefined ? (<DefaultValue>
            {' '}
            = <span>{"" + type.defaultValue}</span>
          </DefaultValue>) : (undefined)}
        {afterNode && ' '}
        {afterNode}
      </DocsCategoryItem>);
    };
    return SDLType;
}(React.Component));
exports.default = SDLType;
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
var DocsCategoryItem = styled_1.styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\tpadding: 6px 16px;\n\toverflow: auto;\n\tfont-size: 14px;\n\ttransition: 0.1s background-color;\n\tbackground: ", ";\n\n\tcursor: ", ";\n\n\t// &:hover {\n\t// \tcolor: ", ";\n\t// \tbackground: #2a7ed3;\n\t// \t.field-name,\n\t// \t.type-name,\n\t// \t.arg-name,\n\t// \tspan {\n\t// \t\tcolor: ", " !important;\n\t// \t}\n\t// }\n\tb {\n\t\tfont-weight: 600;\n\t}\n"], ["\n\tposition: relative;\n\tpadding: 6px 16px;\n\toverflow: auto;\n\tfont-size: 14px;\n\ttransition: 0.1s background-color;\n\tbackground: ",
    ";\n\n\tcursor: ", ";\n\n\t// &:hover {\n\t// \tcolor: ", ";\n\t// \tbackground: #2a7ed3;\n\t// \t.field-name,\n\t// \t.type-name,\n\t// \t.arg-name,\n\t// \tspan {\n\t// \t\tcolor: ", " !important;\n\t// \t}\n\t// }\n\tb {\n\t\tfont-weight: 600;\n\t}\n"])), function (p) {
    return p.active ? p.theme.colours.black07 : p.theme.colours.white;
}, function (p) { return (p.clickable ? 'pointer' : 'select'); }, function (p) { return p.theme.colours.white; }, function (p) { return p.theme.colours.white; });
var DefaultValue = styled_1.styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  span {\n    color: #1f61a9;\n  }\n"], ["\n  color: ", ";\n  span {\n    color: #1f61a9;\n  }\n"])), function (p) { return p.theme.colours.black30; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=SDLType.jsx.map