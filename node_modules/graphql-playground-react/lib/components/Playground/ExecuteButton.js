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

var ExecuteButtonOperation_1 = require("./ExecuteButtonOperation");

var styled_1 = require("../../styled");

var react_redux_1 = require("react-redux");

var actions_1 = require("../../state/sessions/actions");

var reselect_1 = require("reselect");

var selectors_1 = require("../../state/sessions/selectors");

var toJS_1 = require("./util/toJS");

var firstTime = true;
/**
 * ExecuteButton
 *
 * What a nice round shiny button. Shows a drop-down when there are multiple
 * queries to run.
 */

var ExecuteButton =
/** @class */
function (_super) {
  __extends(ExecuteButton, _super);

  function ExecuteButton(props) {
    var _this = _super.call(this, props) || this;

    _this.handleMouseOver = function (operation) {
      _this.setState({
        highlight: operation
      });
    };

    _this.handleMouseOut = function () {
      _this.setState({
        highlight: null
      });
    };

    _this.handleMouseUp = function (operation) {
      _this.onOptionSelected(operation);
    };

    _this.onClick = function () {
      if (_this.props.queryRunning) {
        _this.props.stopQuery(_this.props.sessionId);
      } else {
        _this.props.runQuery();
      }
    };

    _this.onOptionSelected = function (operation) {
      _this.setState({
        optionsOpen: false
      });

      if (!operation) {
        return;
      }

      _this.props.runQuery(operation.name && operation.name.value);
    };

    _this.onOptionsOpen = function (downEvent) {
      var initialPress = true;
      var downTarget = downEvent.target;

      _this.setState({
        highlight: null,
        optionsOpen: true
      });

      var _onMouseUp = function onMouseUp(upEvent) {
        if (initialPress && upEvent.target === downTarget) {
          initialPress = false;
        } else {
          document.removeEventListener('mouseup', _onMouseUp);
          _onMouseUp = null;

          if (downTarget.parentNode) {
            var isOptionsMenuClicked = // tslint:disable-next-line
            downTarget.parentNode.compareDocumentPosition(upEvent.target) & Node.DOCUMENT_POSITION_CONTAINED_BY;

            if (!isOptionsMenuClicked) {
              // menu calls setState if it was clicked
              _this.setState({
                optionsOpen: false
              });
            }

            if (firstTime) {
              _this.onOptionSelected(_this.props.operations.find(function (op) {
                return op.name.value === upEvent.target.textContent;
              }) || _this.props.operations[0]);

              firstTime = false;
            }
          }
        }
      };

      document.addEventListener('mouseup', _onMouseUp);
    };

    _this.state = {
      optionsOpen: false,
      highlight: null
    };
    return _this;
  }

  ExecuteButton.prototype.render = function () {
    var _this = this;

    var operations = this.props.operations;
    var optionsOpen = this.state.optionsOpen;
    var hasOptions = operations && operations.length > 1;
    var options = null;

    if (hasOptions && optionsOpen) {
      var highlight_1 = this.state.highlight;
      options = /*#__PURE__*/React.createElement(ExecuteBox, null, /*#__PURE__*/React.createElement(ExecuteOptions, null, operations.map(function (operation) {
        return /*#__PURE__*/React.createElement(ExecuteButtonOperation_1["default"], {
          operation: operation,
          onMouseOver: _this.handleMouseOver,
          onMouseOut: _this.handleMouseOut,
          onMouseUp: _this.handleMouseUp,
          highlight: highlight_1,
          key: operation.name ? operation.name.value : '*'
        });
      })));
    } // Allow click event if there is a running query or if there are not options
    // for which operation to run.


    var onClick;

    if (this.props.queryRunning || !hasOptions) {
      onClick = this.onClick;
    } // Allow mouse down if there is no running query, there are options for
    // which operation to run, and the dropdown is currently closed.


    var onMouseDown;

    if (!this.props.queryRunning && hasOptions && !optionsOpen) {
      onMouseDown = this.onOptionsOpen;
    }

    var pathJSX = this.props.queryRunning ? /*#__PURE__*/React.createElement("rect", {
      fill: "#FFFFFF",
      x: "10",
      y: "10",
      width: "13",
      height: "13",
      rx: "1"
    }) : /*#__PURE__*/React.createElement("path", {
      d: "M 11 9 L 24 16 L 11 23 z"
    });
    return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Button, {
      isRunning: this.props.queryRunning,
      onMouseDown: onMouseDown,
      onClick: onClick,
      title: "Execute Query (Ctrl-Enter)"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "35",
      height: "35",
      viewBox: (this.props.queryRunning ? 4 : 3) + ".5,4.5,24,24"
    }, pathJSX)), options);
  };

  return ExecuteButton;
}(React.Component);

var mapStateToProps = reselect_1.createStructuredSelector({
  queryRunning: selectors_1.getQueryRunning,
  operations: selectors_1.getOperations,
  sessionId: selectors_1.getSelectedSessionIdFromRoot
});
exports["default"] = react_redux_1.connect(mapStateToProps, {
  runQuery: actions_1.runQuery,
  stopQuery: actions_1.stopQuery
})(toJS_1.toJS(ExecuteButton));
var Wrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: -62px;\n  z-index: 5;\n  top: 15px;\n  margin: 0 14px 0 28px;\n"], ["\n  position: absolute;\n  left: -62px;\n  z-index: 5;\n  top: 15px;\n  margin: 0 14px 0 28px;\n"])));
var Button = styled_1.styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 60px;\n  height: 60px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 100%;\n  transition: background-color 100ms;\n  background-color: ", ";\n  border: 6px solid ", ";\n  cursor: pointer;\n  user-select: none;\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  width: 60px;\n  height: 60px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 100%;\n  transition: background-color 100ms;\n  background-color: ", ";\n  border: 6px solid ", ";\n  cursor: pointer;\n  user-select: none;\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (p) {
  return p.isRunning ? p.theme.editorColours.executeButtonSubscription : p.theme.editorColours.executeButton;
}, function (p) {
  return p.theme.editorColours.executeButtonBorder;
}, function (p) {
  return p.theme.mode === 'light' ? 'white' : 'inherit';
}, function (p) {
  return p.isRunning ? p.theme.editorColours.executeButtonSubscriptionHover : p.theme.editorColours.executeButtonHover;
});
var ExecuteBox = styled_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: #fff;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.25);\n  padding: 8px 0;\n  left: -1px;\n  margin: 0;\n  position: absolute;\n  top: 78px;\n  z-index: 100;\n  user-select: none;\n\n  &:before {\n    position: absolute;\n    background: white;\n    content: '';\n    top: -4px;\n    left: 34px;\n    transform: rotate(45deg);\n    width: 8px;\n    height: 8px;\n  }\n"], ["\n  background: #fff;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.25);\n  padding: 8px 0;\n  left: -1px;\n  margin: 0;\n  position: absolute;\n  top: 78px;\n  z-index: 100;\n  user-select: none;\n\n  &:before {\n    position: absolute;\n    background: white;\n    content: '';\n    top: -4px;\n    left: 34px;\n    transform: rotate(45deg);\n    width: 8px;\n    height: 8px;\n  }\n"])));
var ExecuteOptions = styled_1.styled.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  max-height: 270px;\n  overflow: scroll;\n\n  li {\n    cursor: pointer;\n    list-style: none;\n    min-width: 100px;\n    padding: 2px 30px 4px 10px;\n  }\n\n  li.selected {\n    background: rgb(39, 174, 96);\n    color: white;\n  }\n"], ["\n  max-height: 270px;\n  overflow: scroll;\n\n  li {\n    cursor: pointer;\n    list-style: none;\n    min-width: 100px;\n    padding: 2px 30px 4px 10px;\n  }\n\n  li.selected {\n    background: rgb(39, 174, 96);\n    color: white;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;