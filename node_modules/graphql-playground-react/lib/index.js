"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var ReactDOM = require("react-dom");

var Root_1 = require("./components/Root");

require("./index.css");

if (process.env.NODE_ENV !== 'production') {}
/* tslint:disable-next-line */
// const { whyDidYouUpdate } = require('why-did-you-update')
// whyDidYouUpdate(React)

/* tslint:disable-next-line */


;
window['GraphQLPlayground'] = {
  init: function init(element, options) {
    ReactDOM.render( /*#__PURE__*/React.createElement(Root_1["default"], options), element);
  }
};