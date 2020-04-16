"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var styledComponents = require("styled-components");

var theme_1 = require("./theme");

exports.theme = theme_1.theme;
var _a = styledComponents,
    styled = _a["default"],
    css = _a.css,
    injectGlobal = _a.injectGlobal,
    keyframes = _a.keyframes,
    ThemeProvider = _a.ThemeProvider,
    withTheme = _a.withTheme,
    createGlobalStyle = _a.createGlobalStyle;
exports.css = css;
exports.injectGlobal = injectGlobal;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.withTheme = withTheme;
exports.createGlobalStyle = createGlobalStyle;
exports["default"] = styled;