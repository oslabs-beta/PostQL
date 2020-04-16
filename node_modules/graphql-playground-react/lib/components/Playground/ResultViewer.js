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

var styled_1 = require("../../styled");
/**
 * ResultViewer
 *
 * Maintains an instance of CodeMirror for viewing a GraphQL response.
 *
 * Props:
 *
 *   - value: The text of the editor.
 *
 */


var ResultViewer =
/** @class */
function (_super) {
  __extends(ResultViewer, _super);

  function ResultViewer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.setRef = function (ref) {
      _this.node = ref;
    };

    return _this;
  }

  ResultViewer.prototype.componentDidMount = function () {
    var CodeMirror = require('codemirror');

    require('codemirror/addon/fold/foldgutter');

    require('codemirror/addon/fold/brace-fold');

    require('codemirror/addon/dialog/dialog');

    require('codemirror/addon/search/search');

    require('codemirror/addon/search/searchcursor');

    require('codemirror/addon/search/jump-to-line');

    require('codemirror/keymap/sublime');

    require('codemirror-graphql/results/mode');

    var gutters = [];

    if (!this.props.hideGutters) {
      gutters.push('CodeMirror-foldgutter');
    }

    var foldGutter = {};

    if (!this.props.hideGutters) {
      foldGutter = {
        minFoldSize: 4
      };
    }

    var value = this.props.value || '';
    this.viewer = CodeMirror(this.node, {
      lineWrapping: true,
      value: value,
      readOnly: true,
      theme: 'graphiql',
      mode: 'graphql-results',
      keyMap: 'sublime',
      foldGutter: foldGutter,
      gutters: gutters,
      extraKeys: {
        // Persistent search box in Query Editor
        'Cmd-F': 'findPersistent',
        'Ctrl-F': 'findPersistent',
        // Editor improvements
        'Ctrl-Left': 'goSubwordLeft',
        'Ctrl-Right': 'goSubwordRight',
        'Alt-Left': 'goGroupLeft',
        'Alt-Right': 'goGroupRight'
      }
    });
  };

  ResultViewer.prototype.shouldComponentUpdate = function (nextProps) {
    return this.props.value !== nextProps.value;
  };

  ResultViewer.prototype.componentDidUpdate = function () {
    var value = this.props.value || '';
    this.viewer.setValue(value);
  };

  ResultViewer.prototype.componentWillUnmount = function () {
    this.viewer = null;
  };

  ResultViewer.prototype.render = function () {
    return /*#__PURE__*/React.createElement(Result, {
      ref: this.setRef,
      isSubscription: this.props.isSubscription
    });
  };
  /**
   * Public API for retrieving the CodeMirror instance from this
   * React component.
   */


  ResultViewer.prototype.getCodeMirror = function () {
    return this.viewer;
  };
  /**
   * Public API for retrieving the DOM client height for this component.
   */


  ResultViewer.prototype.getClientHeight = function () {
    return this.node && this.node.clientHeight;
  };

  return ResultViewer;
}(React.Component);

exports.ResultViewer = ResultViewer;
var Result = styled_1.styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex: 1;\n  height: ", ";\n  .CodeMirror {\n    height: ", ";\n    position: ", ";\n    box-sizing: border-box;\n    background: none;\n    padding-left: 38px;\n  }\n  .CodeMirror-cursor {\n    display: none !important;\n  }\n  .CodeMirror-scroll {\n    overflow: scroll !important;\n    margin-right: 10px;\n  }\n  .CodeMirror-sizer {\n    margin-bottom: 0 !important;\n  }\n  .CodeMirror-lines {\n    margin: 20px 0;\n    padding: 0;\n  }\n  .cm-string {\n    color: ", " !important;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex: 1;\n  height: ", ";\n  .CodeMirror {\n    height: ", ";\n    position: ", ";\n    box-sizing: border-box;\n    background: none;\n    padding-left: 38px;\n  }\n  .CodeMirror-cursor {\n    display: none !important;\n  }\n  .CodeMirror-scroll {\n    overflow: scroll !important;\n    margin-right: 10px;\n  }\n  .CodeMirror-sizer {\n    margin-bottom: 0 !important;\n  }\n  .CodeMirror-lines {\n    margin: 20px 0;\n    padding: 0;\n  }\n  .cm-string {\n    color: ", " !important;\n  }\n"])), function (props) {
  return props.isSubscription ? 'auto' : '100%';
}, function (props) {
  return props.isSubscription ? 'auto' : '100%';
}, function (props) {
  return props.isSubscription ? 'relative' : 'absolute%';
}, function (p) {
  return p.theme.editorColours.property;
});
var templateObject_1;