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

var styled_1 = require("../../../styled");

var TypeLink_1 = require("./TypeLink");

var SearchResults =
/** @class */
function (_super) {
  __extends(SearchResults, _super);

  function SearchResults() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SearchResults.prototype.shouldComponentUpdate = function (nextProps) {
    return this.props.schema !== nextProps.schema || this.props.searchValue !== nextProps.searchValue;
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
    var typeNames = Object.keys(typeMap); // Move the within type name to be the first searched.

    if (withinType) {
      typeNames = typeNames.filter(function (n) {
        return n !== withinType.name;
      });
      typeNames.unshift(withinType.name);
    }

    var count = 0;

    var _loop_1 = function _loop_1(typeName) {
      if (matchedWithin.length + matchedTypes.length + matchedFields.length >= 100) {
        return "break";
      }

      var type = typeMap[typeName];

      if (withinType !== type && isMatch(typeName, searchValue)) {
        matchedTypes.push( /*#__PURE__*/React.createElement("div", {
          className: "doc-category-item",
          key: typeName
        }, /*#__PURE__*/React.createElement(TypeLink_1["default"], {
          type: type,
          x: level,
          y: count++,
          lastActive: false
        })));
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
            } else {
              return;
            }
          }

          var match = /*#__PURE__*/React.createElement("div", {
            className: "doc-category-item",
            key: typeName + '.' + fieldName
          }, /*#__PURE__*/React.createElement(TypeLink_1["default"], {
            key: "type",
            type: field,
            x: level,
            y: count++,
            showParentName: true,
            lastActive: false
          }));

          if (withinType === type) {
            matchedWithin.push(match);
          } else {
            matchedFields.push(match);
          }
        });
      }
    };

    for (var _i = 0, typeNames_1 = typeNames; _i < typeNames_1.length; _i++) {
      var typeName = typeNames_1[_i];

      var state_1 = _loop_1(typeName);

      if (state_1 === "break") break;
    }

    if (matchedWithin.length + matchedTypes.length + matchedFields.length === 0) {
      return /*#__PURE__*/React.createElement(NoResult, null, "No results found.");
    }

    if (withinType && matchedTypes.length + matchedFields.length > 0) {
      return /*#__PURE__*/React.createElement("div", null, matchedWithin, /*#__PURE__*/React.createElement("div", {
        className: "doc-category"
      }, /*#__PURE__*/React.createElement("div", {
        className: "doc-category-title"
      }, 'other results'), matchedTypes, matchedFields));
    }

    return /*#__PURE__*/React.createElement("div", null, matchedWithin, matchedTypes, matchedFields);
  };

  return SearchResults;
}(React.Component);

exports["default"] = SearchResults;

function isMatch(sourceText, searchValue) {
  try {
    var escaped = searchValue.replace(/[^_0-9A-Za-z]/g, function (ch) {
      return '\\' + ch;
    });
    return sourceText.search(new RegExp(escaped, 'i')) !== -1;
  } catch (e) {
    return sourceText.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  }
}

var NoResult = styled_1.styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  margin-top: 16px;\n  margin-left: 16px;\n"], ["\n  display: block;\n  margin-top: 16px;\n  margin-left: 16px;\n"])));
var templateObject_1;