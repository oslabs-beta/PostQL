"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SDLType_1 = require("./SDLType");

var React = require("react");

var DocType_1 = require("../../DocExplorer/DocsTypes/DocType");

var UnionTypeSchema = function UnionTypeSchema(_a) {
  var schema = _a.schema,
      type = _a.type;
  var types = schema.getPossibleTypes(type);
  return /*#__PURE__*/React.createElement(DocType_1.DocType, {
    className: "doc-type-schema"
  }, /*#__PURE__*/React.createElement("span", {
    className: "field-name"
  }, "union"), ' ', /*#__PURE__*/React.createElement("span", {
    className: "type-name"
  }, type.name), ' = ', types.map(function (value) {
    return /*#__PURE__*/React.createElement(SDLType_1["default"], {
      key: value.name,
      type: value
    });
  }));
};

exports["default"] = UnionTypeSchema;