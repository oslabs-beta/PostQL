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

var QueryEditor_1 = require("./Playground/QueryEditor");

var reselect_1 = require("reselect");

var selectors_1 = require("../state/sessions/selectors");

var actions_1 = require("../state/sessions/actions");

var EditorWrapper_1 = require("./Playground/EditorWrapper");

var react_redux_1 = require("react-redux");

var FileEditor =
/** @class */
function (_super) {
  __extends(FileEditor, _super);

  function FileEditor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FileEditor.prototype.render = function () {
    return /*#__PURE__*/React.createElement(EditorWrapper_1.Container, null, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(EditorWrapper_1["default"], null, /*#__PURE__*/React.createElement(QueryWrap, null, /*#__PURE__*/React.createElement(QueryEditor_1.QueryEditor, {
      value: this.props.value,
      onChange: this.props.onChange
    })))));
  };

  return FileEditor;
}(React.Component);

var mapStateToProps = reselect_1.createStructuredSelector({
  value: selectors_1.getFile
});
exports["default"] = react_redux_1.connect(mapStateToProps, {
  onChange: actions_1.editFile
})(FileEditor);
var Wrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  position: relative;\n  .variable-editor {\n    height: 100% !important;\n  }\n  .CodeMirror {\n    background: none !important;\n    .CodeMirror-code {\n      color: rgba(255, 255, 255, 0.7);\n    }\n    .cm-atom {\n      color: rgba(42, 126, 210, 1);\n    }\n  }\n"], ["\n  background: ", ";\n  position: relative;\n  .variable-editor {\n    height: 100% !important;\n  }\n  .CodeMirror {\n    background: none !important;\n    .CodeMirror-code {\n      color: rgba(255, 255, 255, 0.7);\n    }\n    .cm-atom {\n      color: rgba(42, 126, 210, 1);\n    }\n  }\n"])), function (p) {
  return p.theme.editorColours.resultBackground;
});
var QueryWrap = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
var templateObject_1, templateObject_2;