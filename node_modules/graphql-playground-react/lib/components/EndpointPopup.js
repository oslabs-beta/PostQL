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

var fetch = require("isomorphic-fetch");

var Popup_1 = require("./Popup");

var lodash_1 = require("lodash");

var Button_1 = require("./Button");

var styled_1 = require("../styled"); // @ts-ignore


var logo_png_1 = require("../assets/logo.png");

var EndpointPopup =
/** @class */
function (_super) {
  __extends(EndpointPopup, _super);

  function EndpointPopup(props) {
    var _this = _super.call(this, props) || this;

    _this.checkEndpoint = lodash_1.throttle(function () {
      if (_this.state.endpoint.match(/^https?:\/\/\w+(\.\w+)*(:[0-9]+)?\/?.*$/)) {
        fetch(_this.state.endpoint, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: "{\n        __schema {\n          queryType {\n            kind\n          }\n        }\n      }"
          })
        }).then(function (res) {
          _this.setState({
            valid: res.status < 400
          });
        })["catch"](function (err) {
          _this.setState({
            valid: false
          });
        });
      }
    }, 500);

    _this.onChangeEndpoint = function (e) {
      _this.setState({
        endpoint: e.target.value
      }, _this.checkEndpoint);
    };

    _this.submit = function (e) {
      e.preventDefault();

      _this.close();
    };

    _this.close = function () {
      if (_this.state.valid) {
        _this.props.onRequestClose(_this.state.endpoint);
      }
    };

    _this.state = {
      endpoint: props.endpoint
    };
    return _this;
  }

  EndpointPopup.prototype.componentDidMount = function () {
    this.checkEndpoint();
  };

  EndpointPopup.prototype.render = function () {
    var valid = this.state.valid;
    return /*#__PURE__*/React.createElement(Popup_1["default"], {
      onRequestClose: this.close,
      darkBg: true
    }, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(LogoWrapper, null, /*#__PURE__*/React.createElement(Logo, null, /*#__PURE__*/React.createElement("img", {
      src: logo_png_1["default"],
      alt: ""
    }), /*#__PURE__*/React.createElement(Heading, null, "GraphQL Playground"))), /*#__PURE__*/React.createElement(Form, {
      action: "",
      onSubmit: this.submit
    }, /*#__PURE__*/React.createElement(Input, {
      type: "text",
      placeholder: "Enter an endpoint url...",
      value: this.state.endpoint,
      onChange: this.onChangeEndpoint,
      valid: typeof valid === 'boolean' && valid,
      invalid: typeof valid === 'boolean' && !valid,
      autoFocus: true
    }), valid && /*#__PURE__*/React.createElement(Button_1.Button, {
      purple: true,
      onClick: this.close
    }, "Use Endpoint"))));
  };

  return EndpointPopup;
}(React.Component);

exports["default"] = EndpointPopup;
var Wrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n"], ["\n  box-sizing: border-box;\n"])));
var Form = styled_1.styled.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex: 1 1 auto;\n\n  .button.button {\n    padding-right: ", ";\n    padding-left: ", ";\n    background: #da1b7f;\n\n    &:hover {\n      background: ", ";\n    }\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  flex: 1 1 auto;\n\n  .button.button {\n    padding-right: ", ";\n    padding-left: ", ";\n    background: #da1b7f;\n\n    &:hover {\n      background: ", ";\n    }\n  }\n"])), function (p) {
  return p.theme.sizes.small16;
}, function (p) {
  return p.theme.sizes.small16;
}, function (p) {
  return p.theme.colours.purple;
}); // prettier-ignore

var Input = styled_1.styled('input')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  font-weight: ", ";\n  color: white;\n  font-size: 16px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  flex: 1 1 auto;\n  display: flex;\n\n  transition: 250ms color;\n\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  font-weight: ", ";\n  color: white;\n  font-size: 16px;\n  display: block;\n  width: 100%;\n  text-align: center;\n  flex: 1 1 auto;\n  display: flex;\n\n  transition: 250ms color;\n\n  ", "\n"])), function (p) {
  return p.theme.colours.white10;
}, function (p) {
  return p.theme.sizes.smallRadius;
}, function (p) {
  return p.theme.sizes.small16 + " " + p.theme.sizes.medium25;
}, function (p) {
  return p.theme.sizes.fontSemiBold;
}, function (p) {
  return p.valid ? styled_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (k) {
    return k.theme.colours.green;
  }) : p.invalid ? styled_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), function (k) {
    return k.theme.colours.red;
  }) : "";
});
var Heading = styled_1.styled.h1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-left: 38px;\n  font-weight: 400;\n  color: ", ";\n"], ["\n  margin-left: 38px;\n  font-weight: 400;\n  color: ", ";\n"])), function (p) {
  return p.theme.colours.white80;
});
var LogoWrapper = styled_1.styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Logo = styled_1.styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 60px;\n\n  img {\n    width: 78px;\n    height: 78px;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 60px;\n\n  img {\n    width: 78px;\n    height: 78px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;