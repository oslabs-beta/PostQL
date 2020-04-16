"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var Reload_1 = require("./Reload");

var Polling_1 = require("./Polling");

var reselect_1 = require("reselect");

var selectors_1 = require("../../../state/sessions/selectors");

var react_redux_1 = require("react-redux");

var SchemaReload = function SchemaReload(props) {
  if (props.isPollingSchema) {
    return /*#__PURE__*/React.createElement(Polling_1["default"], {
      interval: props.settings['schema.polling.interval'],
      onReloadSchema: props.onReloadSchema
    });
  }

  return /*#__PURE__*/React.createElement(Reload_1["default"], {
    isReloadingSchema: props.isReloadingSchema,
    onReloadSchema: props.onReloadSchema
  });
};

var mapStateToProps = reselect_1.createStructuredSelector({
  isReloadingSchema: selectors_1.getIsReloadingSchema
});
exports["default"] = react_redux_1.connect(mapStateToProps)(SchemaReload);