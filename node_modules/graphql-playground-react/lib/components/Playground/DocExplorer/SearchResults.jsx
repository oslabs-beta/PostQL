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
var styled_1 = require("../../../styled");
var TypeLink_1 = require("./TypeLink");
var SearchResults = /** @class */ (function (_super) {
    __extends(SearchResults, _super);
    function SearchResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchResults.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.schema !== nextProps.schema ||
            this.props.searchValue !== nextProps.searchValue);
    };
    SearchResults.prototype.render = function () {
        var level = this.props.level;
        var searchValue = this.props.searchValue;
        var withinType = this.props.withinType;
        var schema = this.props.schema;
        var matchedWithin = [];
        var matchedTypes = [];
        var matchedFields = [];
        var typeMap = schema.getTypeMap();
        var typeNames = Object.keys(typeMap);
        // Move the within type name to be the first searched.
        if (withinType) {
            typeNames = typeNames.filter(function (n) { return n !== withinType.name; });
            typeNames.unshift(withinType.name);
        }
        var count = 0;
        var _loop_1 = function (typeName) {
            if (matchedWithin.length + matchedTypes.length + matchedFields.length >=
                100) {
                return "break";
            }
            var type = typeMap[typeName];
            if (withinType !== type && isMatch(typeName, searchValue)) {
                matchedTypes.push(<div className="doc-category-item" key={typeName}>
            <TypeLink_1.default type={type} x={level} y={count++} lastActive={false}/>
          </div>);
            }
            if (type.getFields) {
                var fields_1 = type.getFields();
                Object.keys(fields_1).forEach(function (fieldName) {
                    var field = fields_1[fieldName];
                    field.parent = type;
                    var matchingArgs;
                    if (!isMatch(fieldName, searchValue)) {
                        if (field.args && field.args.length) {
                            matchingArgs = field.args.filter(function (arg) {
                                return isMatch(arg.name, searchValue);
                            });
                            if (matchingArgs.length === 0) {
                                return;
                            }
                        }
                        else {
                            return;
                        }
                    }
                    var match = (<div className="doc-category-item" key={typeName + '.' + fieldName}>
              <TypeLink_1.default key="type" type={field} x={level} y={count++} showParentName={true} lastActive={false}/>
            </div>);
                    if (withinType === type) {
                        matchedWithin.push(match);
                    }
                    else {
                        matchedFields.push(match);
                    }
                });
            }
        };
        for (var _i = 0, typeNames_1 = typeNames; _i < typeNames_1.length; _i++) {
            var typeName = typeNames_1[_i];
            var state_1 = _loop_1(typeName);
            if (state_1 === "break")
                break;
        }
        if (matchedWithin.length + matchedTypes.length + matchedFields.length ===
            0) {
            return <NoResult>No results found.</NoResult>;
        }
        if (withinType && matchedTypes.length + matchedFields.length > 0) {
            return (<div>
          {matchedWithin}
          <div className="doc-category">
            <div className="doc-category-title">{'other results'}</div>
            {matchedTypes}
            {matchedFields}
          </div>
        </div>);
        }
        return (<div>
        {matchedWithin}
        {matchedTypes}
        {matchedFields}
      </div>);
    };
    return SearchResults;
}(React.Component));
exports.default = SearchResults;
function isMatch(sourceText, searchValue) {
    try {
        var escaped = searchValue.replace(/[^_0-9A-Za-z]/g, function (ch) { return '\\' + ch; });
        return sourceText.search(new RegExp(escaped, 'i')) !== -1;
    }
    catch (e) {
        return sourceText.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    }
}
var NoResult = styled_1.styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  margin-top: 16px;\n  margin-left: 16px;\n"], ["\n  display: block;\n  margin-top: 16px;\n  margin-left: 16px;\n"])));
var templateObject_1;
//# sourceMappingURL=SearchResults.jsx.map