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

var Argument_1 = require("./Argument");

var graphql_1 = require("graphql");

var MarkdownContent_1 = require("graphiql/dist/components/DocExplorer/MarkdownContent");

var TypeLink_1 = require("./TypeLink");

var DocTypeSchema_1 = require("./DocTypeSchema");

var ScalarType_1 = require("./DocsTypes/ScalarType");

var EnumTypeSchema_1 = require("./DocsTypes/EnumTypeSchema");

var UnionTypeSchema_1 = require("./DocsTypes/UnionTypeSchema");

var stack_1 = require("../util/stack");

var DocsStyles_1 = require("./DocsStyles");

var styled_1 = require("../../../styled");

var FieldDoc =
/** @class */
function (_super) {
  __extends(FieldDoc, _super);

  function FieldDoc() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      showDeprecated: false
    };

    _this.setRef = function (ref) {
      _this.ref = ref;
    };

    return _this;
  }

  FieldDoc.prototype.componentDidMount = function () {
    this.scrollToRight();
  };

  FieldDoc.prototype.shouldComponentUpdate = function (nextProps) {
    if (this.props.field !== nextProps.field) {
      this.scrollToRight();
      return true;
    }

    return false;
  };

  FieldDoc.prototype.scrollToRight = function () {
    var explorer = this.ref;
    var explorerDoc = explorer.parentNode && explorer.parentNode.parentNode; // TODO see browser compatibility scrollWidth && scrollLeft

    scrollToRight(explorerDoc, explorerDoc.scrollWidth, 50);
  };

  FieldDoc.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        schema = _a.schema,
        field = _a.field,
        level = _a.level;
    var type = field.type || field;
    var obj = stack_1.serialize(schema, field);
    type = stack_1.getDeeperType(type);
    var argsOffset = obj.fields.length + obj.interfaces.length;
    var implementationsOffset = obj.fields.length + obj.interfaces.length + obj.args.length;
    var typeInstance;

    if (type instanceof graphql_1.GraphQLInterfaceType) {
      typeInstance = 'interface';
    } else if (type instanceof graphql_1.GraphQLUnionType) {
      typeInstance = 'union';
    } else if (type instanceof graphql_1.GraphQLEnumType) {
      typeInstance = 'enum';
    } else {
      typeInstance = 'type';
    }

    return /*#__PURE__*/React.createElement("div", {
      ref: this.setRef
    }, /*#__PURE__*/React.createElement(DocsHeader, null, /*#__PURE__*/React.createElement(TypeLink_1["default"], {
      type: field,
      x: level,
      y: -1,
      clickable: false,
      lastActive: false
    })), /*#__PURE__*/React.createElement(DocsDescription, {
      className: "doc-type-description",
      markdown: field.description || ''
    }), /*#__PURE__*/React.createElement(DocsStyles_1.CategoryTitle, null, typeInstance + " details"), type.description && type.description.length > 0 && /*#__PURE__*/React.createElement(DocsDescription, {
      markdown: type.description || ''
    }), type instanceof graphql_1.GraphQLScalarType && /*#__PURE__*/React.createElement(ScalarType_1["default"], {
      type: type
    }), type instanceof graphql_1.GraphQLEnumType && /*#__PURE__*/React.createElement(EnumTypeSchema_1["default"], {
      type: type
    }), type instanceof graphql_1.GraphQLUnionType && /*#__PURE__*/React.createElement(UnionTypeSchema_1["default"], {
      type: type,
      schema: schema,
      level: level,
      sessionId: this.props.sessionId
    }), obj.fields && obj.fields.length > 0 && /*#__PURE__*/React.createElement(DocTypeSchema_1["default"], {
      type: type,
      fields: obj.fields,
      interfaces: obj.interfaces,
      level: level,
      sessionId: this.props.sessionId
    }), obj.args && obj.args.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DocsStyles_1.CategoryTitle, null, "arguments"), obj.args.map(function (arg, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: arg.name
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Argument_1["default"], {
        arg: arg,
        x: level,
        y: index + argsOffset,
        sessionId: _this.props.sessionId
      })));
    })), obj.implementations && obj.implementations.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DocsStyles_1.CategoryTitle, null, "implementations"), obj.implementations.map(function (data, index) {
      return /*#__PURE__*/React.createElement(TypeLink_1["default"], {
        key: data.name,
        type: data,
        x: level,
        y: index + implementationsOffset,
        collapsable: true,
        lastActive: false
      });
    })));
  };

  return FieldDoc;
}(React.Component);

exports["default"] = FieldDoc;

var scrollToRight = function scrollToRight(element, to, duration) {
  if (duration <= 0) {
    return;
  }

  var difference = to - element.scrollLeft;
  var perTick = difference / duration * 10;
  setTimeout(function () {
    element.scrollLeft = element.scrollLeft + perTick;

    if (element.scrollLeft === to) {
      return;
    }

    scrollToRight(element, to, duration - 10);
  }, 10);
};

var DocsHeader = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  padding-top: 20px;\n  padding-bottom: 10px;\n\n  .doc-category-item {\n    font-size: 14px;\n    font-weight: 600;\n    word-wrap: break-word;\n  }\n  .doc-category-item .field-name {\n    color: #f25c54;\n  }\n  div {\n    background: transparent;\n    pointer-events: none;\n  }\n"], ["\n  background: ", ";\n  padding-top: 20px;\n  padding-bottom: 10px;\n\n  .doc-category-item {\n    font-size: 14px;\n    font-weight: 600;\n    word-wrap: break-word;\n  }\n  .doc-category-item .field-name {\n    color: #f25c54;\n  }\n  div {\n    background: transparent;\n    pointer-events: none;\n  }\n"])), function (p) {
  return p.theme.colours.black02;
});
var DocsDescription = styled_1.styled(MarkdownContent_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 14px;\n  padding: 0 16px 20px 16px;\n  color: rgba(0, 0, 0, 0.5);\n"], ["\n  font-size: 14px;\n  padding: 0 16px 20px 16px;\n  color: rgba(0, 0, 0, 0.5);\n"])));
var templateObject_1, templateObject_2;