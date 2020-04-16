"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function whatChanged(oldProps, newProps, oldState, newState) {
  return {
    props: getUnequalProps(oldProps, newProps),
    state: oldState && newState ? getUnequalProps(oldState, newState) : null
  };
}

exports.whatChanged = whatChanged;

function getUnequalProps(obj1, obj2) {
  return Object.keys(obj1).filter(function (key) {
    return obj1[key] !== obj2[key];
  });
}