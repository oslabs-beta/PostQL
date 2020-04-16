"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isSubscription(operation) {
  var selectedOperation = getSelectedOperation(operation);

  if (selectedOperation) {
    return selectedOperation.operation === 'subscription';
  }

  return false;
}

exports.isSubscription = isSubscription;

function getSelectedOperation(operation) {
  if (operation.query.definitions.length === 1) {
    return operation.query.definitions[0];
  }

  return operation.query.definitions.find(function (d) {
    return d.kind === 'OperationDefinition' && !!d.name && d.name.value === operation.operationName;
  });
}