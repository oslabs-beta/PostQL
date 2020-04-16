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

var Spinner_1 = require("./Spinner");

var asyncComponent = function asyncComponent(importComponent) {
  return (
    /** @class */
    function (_super) {
      __extends(class_1, _super);

      function class_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          component: null
        };
        return _this;
      }

      class_1.prototype.componentDidMount = function () {
        var _this = this;

        importComponent().then(function (cmp) {
          _this.setState({
            component: cmp["default"]
          });
        });
      };

      class_1.prototype.render = function () {
        var C = this.state.component;
        return C ? /*#__PURE__*/React.createElement(C, this.props) : /*#__PURE__*/React.createElement(Spinner_1["default"], null);
      };

      return class_1;
    }(React.Component)
  );
};

exports["default"] = asyncComponent;