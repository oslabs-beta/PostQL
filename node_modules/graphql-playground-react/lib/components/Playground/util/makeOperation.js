"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var immutable_1 = require("immutable");

var graphql_1 = require("graphql");

function makeOperation(request) {
  return immutable_1.setIn(request, ['query'], graphql_1.parse(request.query));
}

exports.makeOperation = makeOperation;