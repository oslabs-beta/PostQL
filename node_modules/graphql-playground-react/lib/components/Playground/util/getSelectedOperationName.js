"use strict";
/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Provided optional previous operations and selected name, and a next list of
 * operations, determine what the next selected operation should be.
 */

function getSelectedOperationName(prevOperations, prevSelectedOperationName, operations) {
  // If there are not enough operations to bother with, return nothing.
  if (!operations || operations.length < 1) {
    return;
  } // If a previous selection still exists, continue to use it.


  var names = operations.map(function (op) {
    return op.name && op.name.value;
  });

  if (prevSelectedOperationName && names.indexOf(prevSelectedOperationName) !== -1) {
    return prevSelectedOperationName;
  } // If a previous selection was the Nth operation, use the same Nth.


  if (prevSelectedOperationName && prevOperations) {
    var prevNames = prevOperations.map(function (op) {
      return op.name && op.name.value;
    });
    var prevIndex = prevNames.indexOf(prevSelectedOperationName);

    if (prevIndex !== -1 && prevIndex < names.length) {
      return names[prevIndex];
    }
  } // Use the first operation.


  return names[0];
}

exports["default"] = getSelectedOperationName;