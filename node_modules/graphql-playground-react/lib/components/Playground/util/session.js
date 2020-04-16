"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isSharingAuthorization(sharableSessions) {
  // If user's gonna share an Authorization header,
  // let's warn her
  // Check all sessions
  for (var _i = 0, sharableSessions_1 = sharableSessions; _i < sharableSessions_1.length; _i++) {
    var session = sharableSessions_1[_i]; // Check every header of each session

    for (var _a = 0, _b = Object.keys(session.headers || {}); _a < _b.length; _a++) {
      var header = _b[_a]; // If there's a Authorization header present,
      // set the flag to `true` and stop the loop

      if (header.toLowerCase() === 'authorization') {
        // break
        return true;
      }
    }
  }

  return false;
}

exports.isSharingAuthorization = isSharingAuthorization;