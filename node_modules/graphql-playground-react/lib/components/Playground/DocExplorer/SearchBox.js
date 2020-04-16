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

var debounce_1 = require("graphiql/dist/utility/debounce");

var Icons_1 = require("../../Icons");

var styled_1 = require("../../../styled");

var SearchBox =
/** @class */
function (_super) {
  __extends(SearchBox, _super);

  function SearchBox(props) {
    var _this = _super.call(this, props) || this;

    _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      });

      _this.debouncedOnSearch();
    };

    _this.state = {
      value: ''
    };
    _this.debouncedOnSearch = debounce_1["default"](200, function () {
      _this.props.onSearch(_this.state.value);
    });
    return _this;
  }

  SearchBox.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    return nextState.value !== this.state.value;
  };

  SearchBox.prototype.render = function () {
    var LabelComponent = /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Icons_1.Search, {
      height: 16,
      width: 16,
      strokeWidth: 3,
      color: 'rgba(0, 0, 0, 0.3)'
    }), /*#__PURE__*/React.createElement(Input, {
      onChange: this.handleChange,
      type: "text",
      value: this.state.value,
      placeholder: this.props.placeholder || 'Search the docs ...'
    }));

    if (this.props.clean) {
      return LabelComponent;
    }

    return /*#__PURE__*/React.createElement(SearchContainer, null, LabelComponent);
  };

  return SearchBox;
}(React.Component);

exports["default"] = SearchBox;
var SearchContainer = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  flex: 0 0 auto;\n  z-index: 1;\n  display: flex;\n  margin-left: 6px;\n  padding: 25px;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  div {\n    width: 100%;\n  }\n"], ["\n  position: relative;\n  flex: 0 0 auto;\n  z-index: 1;\n  display: flex;\n  margin-left: 6px;\n  padding: 25px;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  div {\n    width: 100%;\n  }\n"])), function (p) {
  return p.theme.colours.black02;
}, function (p) {
  return p.theme.colours.black10;
});
var Label = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  padding: 12px 14px 13px 15px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  background: ", ";\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  padding: 12px 14px 13px 15px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  background: ", ";\n"])), function (p) {
  return p.theme.colours.white;
});
var Input = styled_1.styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 16px;\n  margin-left: 10px;\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  font-size: 16px;\n  margin-left: 10px;\n  &::placeholder {\n    color: ", ";\n  }\n"])), function (p) {
  return p.theme.colours.black30;
});
var templateObject_1, templateObject_2, templateObject_3;