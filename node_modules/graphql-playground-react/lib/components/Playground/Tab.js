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

var Icons_1 = require("../Icons");

var react_redux_1 = require("react-redux");

var actions_1 = require("../../state/sessions/actions");

var styled_1 = require("../../styled");

var react_input_autosize_1 = require("react-input-autosize");

var Tab =
/** @class */
function (_super) {
  __extends(Tab, _super);

  function Tab(props) {
    var _this = _super.call(this, props) || this;

    _this.startEditName = function () {
      _this.setState({
        editingName: true
      });
    };

    _this.stopEditName = function () {
      _this.setState({
        editingName: false
      });
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === 13) {
        _this.setState({
          editingName: false
        });
      }
    };

    _this.handleMouseOverCross = function () {
      _this.setState({
        overCross: true
      });
    };

    _this.handleMouseOutCross = function () {
      _this.setState({
        overCross: false
      });
    };

    _this.handleSelectSession = function () {
      _this.props.selectTab(_this.props.session.id);
    };

    _this.handleCloseSession = function (e) {
      e.stopPropagation();

      _this.props.closeTab(_this.props.session.id);
    };

    _this.handleEditName = function (e) {
      _this.props.editName(e.target.value);
    };

    _this.state = {
      overCross: false,
      editingName: false
    };
    return _this;
  }

  Tab.prototype.render = function () {
    var _a = this.props,
        session = _a.session,
        selectedSessionId = _a.selectedSessionId;
    var queryTypes = session.queryTypes;
    var active = session.id === selectedSessionId;
    var name = session.name || session.operationName || queryTypes.firstOperationName || 'New Tab';
    return /*#__PURE__*/React.createElement(TabItem, {
      active: active,
      onMouseDown: this.handleSelectSession
    }, /*#__PURE__*/React.createElement(Icons, {
      active: active
    }, session.subscriptionActive && /*#__PURE__*/React.createElement(RedDot, null), /*#__PURE__*/React.createElement(QueryTypes, null, queryTypes.query && /*#__PURE__*/React.createElement(Query, null, "Q"), (session.isSettingsTab || session.isConfigTab) && /*#__PURE__*/React.createElement(Query, null, /*#__PURE__*/React.createElement(Icons_1.SettingsIcon, {
      width: 12,
      height: 12,
      fill: "white"
    })), queryTypes.mutation && /*#__PURE__*/React.createElement(Mutation, null, "M"), queryTypes.subscription && /*#__PURE__*/React.createElement(Subscription, null, "S"))), this.state.editingName ? /*#__PURE__*/React.createElement(OperationNameInput, {
      value: session.name || '',
      onChange: this.handleEditName,
      onBlur: this.stopEditName,
      onKeyDown: this.handleKeyDown,
      autoFocus: true
    }) : /*#__PURE__*/React.createElement(OperationName, {
      active: active,
      onDoubleClick: this.startEditName
    }, name), /*#__PURE__*/React.createElement(Close, {
      className: "close",
      active: active,
      hasCircle: session.isFile && session.changed && !this.state.overCross,
      onClick: this.handleCloseSession,
      onMouseEnter: this.handleMouseOverCross,
      onMouseLeave: this.handleMouseOutCross
    }, session.isFile && session.changed && !this.state.overCross ? /*#__PURE__*/React.createElement(Circle, null, "\u2B24") : /*#__PURE__*/React.createElement(Icons_1.CrossIcon, {
      width: 12,
      height: 11,
      strokeWidth: 7,
      title: "Close Tab"
    })));
  };

  return Tab;
}(React.PureComponent);

exports["default"] = react_redux_1.connect(null, {
  closeTab: actions_1.closeTab,
  selectTab: actions_1.selectTab,
  editName: actions_1.editName
})(Tab);
var TabItem = styled_1.styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-app-region: no-drag;\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  height: 43px;\n  padding: 10px;\n  padding-top: 9px;\n  margin-right: 10px;\n  font-size: 14px;\n  border-radius: 2px;\n  border-bottom: 2px solid ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n  user-select: none;\n  background: ", ";\n  &:hover {\n    background: ", ";\n    .close {\n      opacity: 1;\n    }\n  }\n"], ["\n  -webkit-app-region: no-drag;\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  height: 43px;\n  padding: 10px;\n  padding-top: 9px;\n  margin-right: 10px;\n  font-size: 14px;\n  border-radius: 2px;\n  border-bottom: 2px solid ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n  user-select: none;\n  background: ", ";\n  &:hover {\n    background: ", ";\n    .close {\n      opacity: 1;\n    }\n  }\n"])), function (p) {
  return p.theme.editorColours.navigationBar;
}, function (p) {
  return p.active ? p.theme.editorColours.tab : p.theme.editorColours.tabInactive;
}, function (p) {
  return p.theme.editorColours.tab;
});
var OperationName = styled_1.styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  opacity: ", ";\n  background: transparent;\n  color: ", ";\n  font-size: 14px;\n  margin-left: 2px;\n  display: inline;\n  letter-spacing: 0.53px;\n"], ["\n  opacity: ", ";\n  background: transparent;\n  color: ", ";\n  font-size: 14px;\n  margin-left: 2px;\n  display: inline;\n  letter-spacing: 0.53px;\n"])), function (p) {
  return p.active ? 1 : 0.5;
}, function (p) {
  return p.theme.editorColours.tabText;
});
var OperationNameInput = styled_1.styled(react_input_autosize_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  input {\n    background: transparent;\n    color: ", ";\n    font-size: 14px;\n    margin-left: 2px;\n    display: inline;\n    letter-spacing: 0.53px;\n  }\n"], ["\n  input {\n    background: transparent;\n    color: ", ";\n    font-size: 14px;\n    margin-left: 2px;\n    display: inline;\n    letter-spacing: 0.53px;\n  }\n"])), function (p) {
  return p.theme.editorColours.tabText;
});
var Icons = styled_1.styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  opacity: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  opacity: ", ";\n"])), function (p) {
  return p.active ? 1 : 0.5;
});
var QueryTypes = styled_1.styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  color: white;\n"], ["\n  display: flex;\n  color: white;\n"])));
var QueryType = styled_1.styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 4px;\n  font-size: 12px;\n  font-weight: 700;\n  border-radius: 2px;\n"], ["\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 4px;\n  font-size: 12px;\n  font-weight: 700;\n  border-radius: 2px;\n"])));
var Query = styled_1.styled(QueryType)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (p) {
  return p.theme.colours.blue;
});
var Mutation = styled_1.styled(QueryType)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (p) {
  return p.theme.colours.orange;
});
var Subscription = styled_1.styled(QueryType)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (p) {
  return p.theme.colours.purple;
});
var RedDot = styled_1.styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 7px;\n  height: 7px;\n  background: rgba(242, 92, 84, 1);\n  border-radius: 100%;\n  margin-right: 10px;\n"], ["\n  width: 7px;\n  height: 7px;\n  background: rgba(242, 92, 84, 1);\n  border-radius: 100%;\n  margin-right: 10px;\n"])));
var Circle = styled_1.styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: relative;\n  top: -2px;\n  font-size: 9px;\n  background: ", ";\n"], ["\n  position: relative;\n  top: -2px;\n  font-size: 9px;\n  background: ", ";\n"])), function (p) {
  return p.theme.editorColours.circle;
});
var Close = styled_1.styled('div')(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  margin-left: 10px;\n  top: 1px;\n  height: 13px;\n  width: 13px;\n  opacity: ", ";\n  svg {\n    stroke: ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  margin-left: 10px;\n  top: 1px;\n  height: 13px;\n  width: 13px;\n  opacity: ", ";\n  svg {\n    stroke: ", ";\n  }\n"])), function (p) {
  return p.active || p.hasCircle ? 1 : 0;
}, function (p) {
  return p.theme.editorColours.icon;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;