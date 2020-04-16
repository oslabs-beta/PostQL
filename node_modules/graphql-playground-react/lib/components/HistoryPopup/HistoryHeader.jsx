"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HistoryChooser_1 = require("./HistoryChooser");
var styled_1 = require("../../styled");
var SearchBox_1 = require("../Playground/DocExplorer/SearchBox");
exports.default = (function (props) { return (<HistoryHeader>
    <HistoryChooser_1.default onSelectFilter={props.onSelectFilter} selectedFilter={props.selectedFilter}/>
    <SearchBox_1.default placeholder="Search the history..." onSearch={props.onSearch} clean={true}/>
  </HistoryHeader>); });
var HistoryHeader = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: ", ";\n"])), function (p) { return p.theme.colours.black02; });
var templateObject_1;
//# sourceMappingURL=HistoryHeader.jsx.map