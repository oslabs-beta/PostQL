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

var react_router_dom_1 = require("react-router-dom");

var GraphQLBinApp_1 = require("./GraphQLBinApp");

var Root =
/** @class */
function (_super) {
  __extends(Root, _super);

  function Root() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Root.prototype.render = function () {
    return /*#__PURE__*/React.createElement(react_router_dom_1.BrowserRouter, null, /*#__PURE__*/React.createElement(react_router_dom_1.Switch, null, /*#__PURE__*/React.createElement(react_router_dom_1.Route, {
      path: "/v2/:id",
      component: GraphQLBinApp_1["default"]
    }), /*#__PURE__*/React.createElement(react_router_dom_1.Redirect, {
      exact: true,
      from: "/",
      to: "/v2/new",
      component: GraphQLBinApp_1["default"]
    }), /*#__PURE__*/React.createElement(react_router_dom_1.Route, {
      path: "*",
      component: RedirectToOldPlayground
    })));
  };

  return Root;
}(React.Component);

exports["default"] = Root;

var RedirectToOldPlayground = function RedirectToOldPlayground(props) {
  location.href = "https://legacy.graphqlbin.com" + location.pathname + location.search;
  return null;
};