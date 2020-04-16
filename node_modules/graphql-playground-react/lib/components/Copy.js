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

var styled_1 = require("../styled");

var CopyToClipboard = require("react-copy-to-clipboard");

var Copy =
/** @class */
function (_super) {
  __extends(Copy, _super);

  function Copy(props) {
    var _this = _super.call(this, props) || this;

    _this.onCopy = function () {
      _this.setState({
        copied: true
      });

      _this.copyTimer = window.setTimeout(function () {
        return _this.setState({
          copied: false
        });
      }, 500);
    };

    _this.state = {
      copied: false
    };
    return _this;
  }

  Copy.prototype.componentWillUnmount = function () {
    clearTimeout(this.copyTimer);
  };

  Copy.prototype.render = function () {
    var _a = this.props,
        text = _a.text,
        color = _a.color;
    return /*#__PURE__*/React.createElement(CopyToClipboard, {
      text: text,
      onCopy: this.onCopy
    }, /*#__PURE__*/React.createElement(CopyBox, null, this.state.copied && /*#__PURE__*/React.createElement(Indicator, {
      color: color
    }, "Copied"), this.props.children));
  };

  return Copy;
}(React.Component);

exports["default"] = Copy;
var CopyBox = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Indicator = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  animation: copying 700ms linear;\n  color: ", ";\n\n  @keyframes copying {\n    0% {\n      opacity: 0;\n      transform: translate(-50%, 0);\n    }\n\n    50% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 0;\n      transform: translate(-50%, -50px);\n    }\n  }\n"], ["\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  animation: copying 700ms linear;\n  color: ", ";\n\n  @keyframes copying {\n    0% {\n      opacity: 0;\n      transform: translate(-50%, 0);\n    }\n\n    50% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 0;\n      transform: translate(-50%, -50px);\n    }\n  }\n"])), function (p) {
  return p.color ? p.color : p.theme.colours.darkBlue30;
});
var templateObject_1, templateObject_2;