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

var Icons_1 = require("./Icons");

var ToggleButton_1 = require("./ToggleButton");

var Tooltip_1 = require("./Tooltip");

var Button_1 = require("./Button");

var Copy_1 = require("./Copy");

var styled_1 = require("../styled");

var react_redux_1 = require("react-redux");

var reselect_1 = require("reselect");

var selectors_1 = require("../state/sharing/selectors");

var actions_1 = require("../state/sharing/actions");

var Share =
/** @class */
function (_super) {
  __extends(Share, _super);

  function Share(props) {
    var _this = _super.call(this, props) || this;

    _this.share = function () {
      _this.props.share();
    };

    _this.renderAuthSharingWarning = function () {
      if (!_this.props.isSharingAuthorization) {
        return null;
      }

      return /*#__PURE__*/React.createElement(AuthSharingWarning, null);
    };

    _this.toggleTooltip = function () {
      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  Share.prototype.render = function () {
    var open = this.state.open;
    var _a = this.props,
        allTabs = _a.allTabs,
        headers = _a.headers,
        history = _a.history,
        shareUrl = _a.shareUrl,
        reshare = _a.reshare,
        theme = _a.theme;
    return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement("div", {
      onClick: this.toggleTooltip
    }, this.props.children), open && /*#__PURE__*/React.createElement(TooltipWrapper, null, /*#__PURE__*/React.createElement(Tooltip_1["default"], {
      open: open,
      onClose: this.toggleTooltip,
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom'
      },
      renderAfterContent: this.renderAuthSharingWarning
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TooltipText, {
      onClick: this.props.toggleShareAllTabs
    }, "Share all tabs", ' '), /*#__PURE__*/React.createElement(ToggleButton_1["default"], {
      checked: allTabs,
      onChange: this.props.toggleShareAllTabs
    })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TooltipText, {
      onClick: this.props.toggleShareHeaders
    }, "HTTP headers", ' '), /*#__PURE__*/React.createElement(ToggleButton_1["default"], {
      checked: headers,
      onChange: this.props.toggleShareHeaders
    })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TooltipText, {
      onClick: this.props.toggleShareHistory
    }, "History", ' '), /*#__PURE__*/React.createElement(ToggleButton_1["default"], {
      checked: history,
      onChange: this.props.toggleShareHistory
    })), shareUrl && /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Input, {
      value: shareUrl,
      disabled: true
    }), /*#__PURE__*/React.createElement(CopyWrapper, null, /*#__PURE__*/React.createElement(Copy_1["default"], {
      text: shareUrl
    }, /*#__PURE__*/React.createElement(Icons_1.ShareIcon, {
      color: theme.colours.darkBlue30,
      width: 25,
      height: 25,
      title: "Copy URL to Clipboard"
    })))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement(Button_1.Button, {
      hideArrow: true,
      onClick: this.share
    }, reshare && shareUrl ? 'Reshare' : 'Share')))))));
  };

  return Share;
}(React.Component);

var mapStateToProps = reselect_1.createStructuredSelector({
  history: selectors_1.getSharingHistory,
  headers: selectors_1.getSharingHeaders,
  allTabs: selectors_1.getSharingAllTabs,
  shareUrl: selectors_1.getShareUrl
});
exports["default"] = styled_1.withTheme(react_redux_1.connect(mapStateToProps, {
  toggleShareAllTabs: actions_1.toggleShareAllTabs,
  toggleShareHeaders: actions_1.toggleShareHeaders,
  toggleShareHistory: actions_1.toggleShareHistory,
  share: actions_1.share
})(Share));

var AuthSharingWarning = function AuthSharingWarning() {
  return /*#__PURE__*/React.createElement(Message, null, /*#__PURE__*/React.createElement(MessageTitle, null, "Watch out!"), "You\u2019re sharing your ", /*#__PURE__*/React.createElement("code", null, "Authorization"), " header with the world!");
}; // TODO: use theme


var pulse = styled_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: scale(1.04);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"], ["\n  0% {\n    transform: scale(1.04);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])));
var Message = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 12px 16px;\n  margin-top: 10px;\n\n  font-size: 14px;\n  letter-spacing: normal;\n\n  cursor: default;\n  border-radius: 2px;\n  background: #f3f4f4;\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);\n\n  animation: ", " 0.7s ease-in-out infinite alternate;\n"], ["\n  padding: 12px 16px;\n  margin-top: 10px;\n\n  font-size: 14px;\n  letter-spacing: normal;\n\n  cursor: default;\n  border-radius: 2px;\n  background: #f3f4f4;\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);\n\n  animation: ", " 0.7s ease-in-out infinite alternate;\n"])), pulse);
var MessageTitle = styled_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 3px;\n  margin-bottom: 2px;\n  font-weight: bold;\n  color: #2a7ed2;\n"], ["\n  margin-right: 3px;\n  margin-bottom: 2px;\n  font-weight: bold;\n  color: #2a7ed2;\n" // Main styled components
]))); // Main styled components

var Wrapper = styled_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  z-index: 1005;\n  height: 100%;\n  margin-left: 6px;\n"], ["\n  z-index: 1005;\n  height: 100%;\n  margin-left: 6px;\n"])));
var TooltipText = styled_1.styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-right: 10px;\n\n  font-size: ", ";\n  font-weight: ", ";\n  text-transform: uppercase;\n  letter-spacing: 0.53px;\n\n  color: ", ";\n"], ["\n  margin-right: 10px;\n\n  font-size: ", ";\n  font-weight: ", ";\n  text-transform: uppercase;\n  letter-spacing: 0.53px;\n\n  color: ", ";\n"])), function (p) {
  return p.theme.sizes.fontSmall;
}, function (p) {
  return p.theme.sizes.fontSemiBold;
}, function (p) {
  return p.theme.colours.darkBlue50;
});
var IconWrapper = styled_1.styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n"], ["\n  position: relative;\n  cursor: pointer;\n"])));
var TooltipWrapper = styled_1.styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  right: 0px;\n"], ["\n  position: absolute;\n  right: 0px;\n"])));
var Row = styled_1.styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  min-width: 245px;\n  margin-top: ", ";\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"], ["\n  position: relative;\n  min-width: 245px;\n  margin-top: ", ";\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"])), function (p) {
  return p.theme.sizes.small16;
});
var CopyWrapper = styled_1.styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n\n  &:hover {\n    svg {\n      fill: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  right: 0;\n\n  &:hover {\n    svg {\n      fill: ", ";\n    }\n  }\n"])), function (p) {
  return p.theme.colours.darkBlue60;
});
var Input = styled_1.styled.input(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  padding: ", " ", ";\n  padding-right: 25px;\n\n  font-weight: ", ";\n  font-size: ", ";\n\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n"], ["\n  display: block;\n  width: 100%;\n  padding: ", " ", ";\n  padding-right: 25px;\n\n  font-weight: ", ";\n  font-size: ", ";\n\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n"])), function (p) {
  return p.theme.sizes.small6;
}, function (p) {
  return p.theme.sizes.small10;
}, function (p) {
  return p.theme.sizes.fontSemiBold;
}, function (p) {
  return p.theme.sizes.fontTiny;
}, function (p) {
  return p.theme.sizes.smallRadius;
}, function (p) {
  return p.theme.colours.darkBlue10;
}, function (p) {
  return p.theme.colours.darkBlue;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;