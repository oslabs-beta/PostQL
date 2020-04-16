"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var MarkdownContent_1 = require("graphiql/dist/components/DocExplorer/MarkdownContent");

var SDLDocType_1 = require("./SDLDocType");

var ScalarType_1 = require("../../DocExplorer/DocsTypes/ScalarType");

var EnumTypeSchema_1 = require("../../DocExplorer/DocsTypes/EnumTypeSchema");

var SDLUnionType_1 = require("./SDLUnionType");

var DocsStyles_1 = require("../../DocExplorer/DocsStyles");

var styled_1 = require("../../../../styled");

var FieldDoc =
/** @class */
function (_super) {
  __extends(FieldDoc, _super);

  function FieldDoc() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      showDeprecated: false
    };
    return _this;
  }

  FieldDoc.prototype.render = function () {
    var _a = this.props,
        type = _a.type,
        schema = _a.schema;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DocsStyles_1.CategoryTitle, null, type.name + " details"), type.description && type.description.length > 0 && /*#__PURE__*/React.createElement(DocsDescription, {
      markdown: type.description || ''
    }), type.instanceOf === 'scalar' && /*#__PURE__*/React.createElement(ScalarType_1["default"], {
      type: type
    }), type.instanceOf === 'enum' && /*#__PURE__*/React.createElement(EnumTypeSchema_1["default"], {
      sdlType: true,
      type: type
    }), type.instanceOf === 'union' && /*#__PURE__*/React.createElement(SDLUnionType_1["default"], {
      type: type,
      schema: schema
    }), type.fields.length > 0 && /*#__PURE__*/React.createElement(SDLDocType_1["default"], {
      type: type,
      fields: type.fields,
      interfaces: type.interfaces
    }));
  };

  return FieldDoc;
}(React.Component);

exports["default"] = FieldDoc;
var DocsDescription = styled_1.styled(MarkdownContent_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  padding: 0 16px 20px 16px;\n  color: rgba(0, 0, 0, 0.5);\n"], ["\n  font-size: 14px;\n  padding: 0 16px 20px 16px;\n  color: rgba(0, 0, 0, 0.5);\n"])));
var templateObject_1;