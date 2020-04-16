"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var ReloadIcon_1 = require("./ReloadIcon");

var Reload = function Reload(props) {
  return /*#__PURE__*/React.createElement(ReloadIcon_1["default"], {
    animate: props.isReloadingSchema,
    onClick: props.onReloadSchema
  });
};

exports["default"] = Reload;