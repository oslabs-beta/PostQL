"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("../../../../styled");
var DocType_1 = require("./DocType");
var EnumTypeSchema = function (_a) {
    var type = _a.type, sdlType = _a.sdlType;
    var values = sdlType ? type._values : type.getValues();
    var deprecatedValues = values.filter(function (value) { return value.isDeprecated; });
    return (<DocType_1.DocType className="doc-type-schema">
      <span className="field-name">enum</span>{' '}
      <span className="type-name">{type.name}</span>{' '}
      <span className="brace">{'{'}</span>
      {values
        .filter(function (value) { return !value.isDeprecated; })
        .map(function (value, index) { return (<Value key={value.name} first={index === 0} value={value}/>); })}
      {deprecatedValues.length > 0 && <br />}
      {deprecatedValues.map(function (value, index) { return (<Value first={index === 0} key={value.name} value={value} isDeprecated={true}/>); })}
      <span className="brace">{'}'}</span>
    </DocType_1.DocType>);
};
exports.default = EnumTypeSchema;
var Value = function (_a) {
    var value = _a.value, isDeprecated = _a.isDeprecated, first = _a.first;
    return (<DocsValue first={first}>
    <div className="field-name">{value.name}</div>
    {value.description && (<DocsValueComment>{value.description}</DocsValueComment>)}
    {isDeprecated && (<DocsValueComment>Deprecated: {value.deprecationReason}</DocsValueComment>)}
  </DocsValue>);
};
var DocsValue = styled_1.styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", "px;\n  .field-name {\n    padding: 0 16px;\n    color: red;\n  }\n"], ["\n  margin-top: ", "px;\n  .field-name {\n    padding: 0 16px;\n    color: red;\n  }\n"])), function (p) { return (p.first ? 0 : 6); });
var DocsValueComment = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0 16px;\n  color: ", ";\n"], ["\n  padding: 0 16px;\n  color: ", ";\n"])), function (p) { return p.theme.colours.black50; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=EnumTypeSchema.jsx.map