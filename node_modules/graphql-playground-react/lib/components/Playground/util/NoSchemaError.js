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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var NoSchemaError =
/** @class */
function (_super) {
  __extends(NoSchemaError, _super);

  function NoSchemaError(endpoint) {
    return _super.call(this, "Schema could not be fetched.\nPlease check if the endpoint '" + endpoint + "' is a valid GraphQL Endpoint.") || this;
  }

  return NoSchemaError;
}(Error);

exports.NoSchemaError = NoSchemaError;