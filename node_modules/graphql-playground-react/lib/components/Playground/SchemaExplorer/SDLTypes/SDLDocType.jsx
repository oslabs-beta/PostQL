"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SDLType_1 = require("./SDLType");
var styled_1 = require("../../../../styled");
exports.default = (function (_a) {
    var type = _a.type, fields = _a.fields, interfaces = _a.interfaces;
    var nonDeprecatedFields = fields.filter(function (data) { return !data.isDeprecated; });
    var deprecatedFields = fields.filter(function (data) { return data.isDeprecated; });
    return (<DocTypeSchema>
      <DocTypeLine>
        <span className="field-name">{type.instanceOf}</span>{' '}
        <DocsTypeName>{type.name}</DocsTypeName>{' '}
        {interfaces.length === 0 && <Brace>{"{"}</Brace>}
      </DocTypeLine>
      {interfaces.map(function (data, index) { return (<DocsTypeInferface key={data.name} type={data} beforeNode={<span className="field-name">implements</span>} afterNode={index === interfaces.length - 1 ? <Brace>{'{'}</Brace> : null}/>); })}
      {nonDeprecatedFields.map(function (data) { return (<SDLType_1.default key={data.name} type={data} collapsable={true}/>); })}
      {deprecatedFields.length > 0 && <br />}
      {deprecatedFields.map(function (data, index) { return (<div key={data.name}>
          <DocsValueComment>
            # Deprecated: {data.deprecationReason}
          </DocsValueComment>
          <SDLType_1.default type={data}/>
        </div>); })}
      <DocTypeLine>
        <Brace>{'}'}</Brace>
      </DocTypeLine>
    </DocTypeSchema>);
});
var DocTypeSchema = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  flex: 1;\n  .doc-category-item {\n    padding-left: 32px;\n  }\n"], ["\n  font-size: 14px;\n  flex: 1;\n  .doc-category-item {\n    padding-left: 32px;\n  }\n"])));
var DocTypeLine = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 6px 16px;\n  white-space: nowrap;\n"], ["\n  padding: 6px 16px;\n  white-space: nowrap;\n"])));
var DocsTypeName = styled_1.styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #f25c54;\n"], ["\n  color: #f25c54;\n"])));
var DocsTypeInferface = styled_1.styled(SDLType_1.default)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-left: 16px;\n  .field-name {\n    color: rgb(245, 160, 0);\n  }\n  .type-name {\n    color: #f25c54;\n  }\n"], ["\n  padding-left: 16px;\n  .field-name {\n    color: rgb(245, 160, 0);\n  }\n  .type-name {\n    color: #f25c54;\n  }\n"])));
var DocsValueComment = styled_1.styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  padding-right: 16px;\n  padding-left: 32px;\n"], ["\n  color: ", ";\n  padding-right: 16px;\n  padding-left: 32px;\n"])), function (p) { return p.theme.colours.black50; });
var Brace = styled_1.styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-weight: 600;\n  color: ", ";\n"], ["\n  font-weight: 600;\n  color: ", ";\n"])), function (p) { return p.theme.colours.darkBlue50; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=SDLDocType.jsx.map