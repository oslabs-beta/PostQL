"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var ReactDOM = require("react-dom");

var MiddlewareApp_1 = require("./components/MiddlewareApp");

require("./index.css");

if (process.env.NODE_ENV !== 'production') {}
/* tslint:disable-next-line */
// const { whyDidYouUpdate } = require('why-did-you-update')
// whyDidYouUpdate(React)

/* tslint:disable-next-line */


;
window['GraphQLPlayground'] = {
  init: function init(element, options) {
    ReactDOM.render( /*#__PURE__*/React.createElement(MiddlewareApp_1["default"], _extends({
      setTitle: true,
      showNewWorkspace: false
    }, options)), element);
  }
};