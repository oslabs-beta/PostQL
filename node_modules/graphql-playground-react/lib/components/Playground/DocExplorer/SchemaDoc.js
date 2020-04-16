"use strict";
/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

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

var TypeLink_1 = require("graphiql/dist/components/DocExplorer/TypeLink");

var MarkdownContent_1 = require("graphiql/dist/components/DocExplorer/MarkdownContent"); // Render the top level Schema


var SchemaDoc =
/** @class */
function (_super) {
  __extends(SchemaDoc, _super);

  function SchemaDoc() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SchemaDoc.prototype.shouldComponentUpdate = function (nextProps) {
    return this.props.schema !== nextProps.schema;
  };

  SchemaDoc.prototype.render = function () {
    var schema = this.props.schema;
    var queryType = schema.getQueryType();
    var mutationType = schema.getMutationType && schema.getMutationType();
    var subscriptionType = schema.getSubscriptionType && schema.getSubscriptionType();
    return /*#__PURE__*/React.createElement("div", {
      className: "root"
    }, /*#__PURE__*/React.createElement(MarkdownContent_1["default"], {
      className: "doc-type-description",
      markdown: 'A GraphQL schema provides a root type for each kind of operation.'
    }), /*#__PURE__*/React.createElement("div", {
      className: "doc-category"
    }, /*#__PURE__*/React.createElement("div", {
      className: "doc-category-title"
    }, 'root types'), /*#__PURE__*/React.createElement("div", {
      className: "doc-category-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "keyword"
    }, 'query'), ': ', /*#__PURE__*/React.createElement(TypeLink_1["default"], {
      type: queryType,
      onClick: this.props.onClickType
    })), mutationType && /*#__PURE__*/React.createElement("div", {
      className: "doc-category-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "keyword"
    }, 'mutation'), ': ', /*#__PURE__*/React.createElement(TypeLink_1["default"], {
      type: mutationType,
      onClick: this.props.onClickType
    })), subscriptionType && /*#__PURE__*/React.createElement("div", {
      className: "doc-category-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "keyword"
    }, 'subscription'), ': ', /*#__PURE__*/React.createElement(TypeLink_1["default"], {
      type: subscriptionType,
      onClick: this.props.onClickType
    }))));
  };

  return SchemaDoc;
}(React.Component);

exports["default"] = SchemaDoc;