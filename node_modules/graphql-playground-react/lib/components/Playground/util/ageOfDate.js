"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function ageOfDate(date) {
  var now = new Date();
  var diffMs = Math.abs(date.getTime() - now.getTime());
  var diffDays = Math.floor(diffMs / 86400000);
  var diffHrs = Math.floor(diffMs % 86400000 / 3600000);
  var diffMins = Math.round(diffMs % 86400000 % 3600000 / 60000);

  if (diffDays > 0) {
    return diffDays + " days ago";
  }

  if (diffHrs > 0) {
    return diffHrs + " h ago";
  }

  if (diffMins > 0) {
    return diffMins + " min ago";
  }

  var sec = Math.round(diffMs / 1000);
  return sec + " sec" + (sec > 1 ? 's' : '') + " ago";
}

exports["default"] = ageOfDate;