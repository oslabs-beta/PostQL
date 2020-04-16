"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var makeGeneralSelector = function makeGeneralSelector(key) {
  return function (state) {
    return state.general.get(key);
  };
};

exports.getFixedEndpoint = makeGeneralSelector('fixedEndpoint');
exports.getHistoryOpen = makeGeneralSelector('historyOpen');
exports.getConfigString = makeGeneralSelector('configString');