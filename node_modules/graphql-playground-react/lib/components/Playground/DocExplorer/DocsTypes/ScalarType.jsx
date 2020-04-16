"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DocType_1 = require("./DocType");
var ScalarTypeSchema = function (_a) {
    var type = _a.type;
    return (<DocType_1.DocType className="doc-type-schema">
      <span className="field-name">scalar</span>{' '}
      <span className="type-name">{type.name}</span>
    </DocType_1.DocType>);
};
exports.default = ScalarTypeSchema;
//# sourceMappingURL=ScalarType.jsx.map