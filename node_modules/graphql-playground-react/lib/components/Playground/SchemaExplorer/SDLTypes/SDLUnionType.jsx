"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SDLType_1 = require("./SDLType");
var React = require("react");
var DocType_1 = require("../../DocExplorer/DocsTypes/DocType");
var UnionTypeSchema = function (_a) {
    var schema = _a.schema, type = _a.type;
    var types = schema.getPossibleTypes(type);
    return (<DocType_1.DocType className="doc-type-schema">
      <span className="field-name">union</span>{' '}
      <span className="type-name">{type.name}</span>
      {' = '}
      {types.map(function (value) { return <SDLType_1.default key={value.name} type={value}/>; })}
    </DocType_1.DocType>);
};
exports.default = UnionTypeSchema;
//# sourceMappingURL=SDLUnionType.jsx.map