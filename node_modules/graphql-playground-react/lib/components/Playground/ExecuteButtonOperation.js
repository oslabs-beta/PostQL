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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var ExecuteButtonOperation =
/** @class */
function (_super) {
  __extends(ExecuteButtonOperation, _super);

  function ExecuteButtonOperation() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onMouseOver = function () {
      _this.props.onMouseOver(_this.props.operation);
    };

    _this.onMouseUp = function () {
      _this.props.onMouseUp(_this.props.operation);
    };

    return _this;
  }

  ExecuteButtonOperation.prototype.render = function () {
    return /*#__PURE__*/React.createElement("li", {
      key: this.props.operation.name ? this.props.operation.name.value : '*',
      className: this.props.operation === this.props.highlight ? 'selected' : '',
      onMouseOver: this.onMouseOver,
      onMouseOut: this.props.onMouseOut,
      onMouseUp: this.onMouseUp
    }, this.props.operation.name ? this.props.operation.name.value : '<Unnamed>');
  };

  return ExecuteButtonOperation;
}(React.PureComponent);

exports["default"] = ExecuteButtonOperation;