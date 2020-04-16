"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeLink_1 = require("../TypeLink");
var React = require("react");
var DocType_1 = require("./DocType");
var UnionTypeSchema = function (_a) {
    var schema = _a.schema, type = _a.type, level = _a.level, sessionId = _a.sessionId;
    var types = schema.getPossibleTypes(type);
    return (<DocType_1.DocType className="doc-type-schema">
      <span className="field-name">union</span>{' '}
      <span className="type-name">{type.name}</span>
      {' = '}
      {types.map(function (value, index) { return (<TypeLink_1.default key={value.name} type={value} x={level} y={index + 1} collapsable={true} sessionId={sessionId} lastActive={false}/>); })}
    </DocType_1.DocType>);
};
exports.default = UnionTypeSchema;
//# sourceMappingURL=UnionTypeSchema.jsx.map