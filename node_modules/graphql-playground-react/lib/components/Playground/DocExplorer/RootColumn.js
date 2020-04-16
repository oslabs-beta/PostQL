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

var ColumnDoc_1 = require("./ColumnDoc");

var SearchResults_1 = require("./SearchResults");

var GraphDocsRoot_1 = require("./GraphDocsRoot");

var SearchBox_1 = require("./SearchBox");

var styled_1 = require("../../../styled");

var RootColumn =
/** @class */
function (_super) {
  __extends(RootColumn, _super);

  function RootColumn() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RootColumn.prototype.render = function () {
    var _a = this.props,
        searchValue = _a.searchValue,
        schema = _a.schema,
        width = _a.width,
        sessionId = _a.sessionId,
        handleSearch = _a.handleSearch;
    return /*#__PURE__*/React.createElement(ColumnDoc_1["default"], {
      width: width,
      overflow: false
    }, /*#__PURE__*/React.createElement(SearchBox_1["default"], {
      onSearch: handleSearch
    }), /*#__PURE__*/React.createElement(Column, null, searchValue && /*#__PURE__*/React.createElement(SearchResults_1["default"], {
      searchValue: searchValue,
      schema: schema,
      level: 0,
      sessionId: sessionId
    }), !searchValue && /*#__PURE__*/React.createElement(GraphDocsRoot_1["default"], {
      schema: schema,
      sessionId: sessionId
    })));
  };

  return RootColumn;
}(React.PureComponent);

exports["default"] = RootColumn;
var Column = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: auto;\n"], ["\n  overflow: auto;\n"])));
var templateObject_1;