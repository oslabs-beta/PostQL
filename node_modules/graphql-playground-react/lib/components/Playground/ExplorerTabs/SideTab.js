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

var SideTab =
/** @class */
function (_super) {
  __extends(SideTab, _super);

  function SideTab() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SideTab.prototype.render = function () {
    var _a = this.props,
        label = _a.label,
        activeColor = _a.activeColor,
        active = _a.active,
        onClick = _a.onClick,
        tabWidth = _a.tabWidth;
    return /*#__PURE__*/React.createElement(Tab, {
      onClick: onClick,
      activeColor: activeColor,
      active: active,
      tabWidth: tabWidth
    }, label);
  };

  return SideTab;
}(React.PureComponent);

exports["default"] = SideTab;
var Tab = styled_1.styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: ", ";\n  padding: 8px 8px 8px 8px;\n  border-radius: 2px 2px 0px 0px;\n  color: ", ";\n  background: ", ";\n  box-shadow: -1px 1px 6px 0 rgba(0, 0, 0, 0.3);\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 12px;\n  letter-spacing: 0.45px;\n  cursor: pointer;\n  transform: rotate(-90deg);\n  transform-origin: bottom left;\n  margin-top: 65px;\n  width: ", ";\n"], ["\n  z-index: ", ";\n  padding: 8px 8px 8px 8px;\n  border-radius: 2px 2px 0px 0px;\n  color: ", ";\n  background: ", ";\n  box-shadow: -1px 1px 6px 0 rgba(0, 0, 0, 0.3);\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 12px;\n  letter-spacing: 0.45px;\n  cursor: pointer;\n  transform: rotate(-90deg);\n  transform-origin: bottom left;\n  margin-top: 65px;\n  width: ", ";\n"])), function (p) {
  return p.active ? 10 : 2;
}, function (p) {
  return p.theme.mode === 'dark' ? p.theme.colours.white : p.theme.colours[p.active ? 'white' : 'darkBlue'];
}, function (p) {
  return p.active && p.activeColor ? p.theme.colours[p.activeColor] : p.theme.mode === 'dark' ? '#3D5866' : '#DBDEE0';
}, function (p) {
  return p.tabWidth || '100%';
});
var templateObject_1;