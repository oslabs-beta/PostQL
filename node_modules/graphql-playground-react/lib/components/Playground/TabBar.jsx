"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("../../styled");
var Icons_1 = require("../Icons");
var Tab_1 = require("./Tab");
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var selectors_1 = require("../../state/sessions/selectors");
var actions_1 = require("../../state/sessions/actions");
var react_sortable_hoc_1 = require("react-sortable-hoc");
var SortableTab = react_sortable_hoc_1.SortableElement(Tab_1.default);
var TabBar = /** @class */ (function (_super) {
    __extends(TabBar, _super);
    function TabBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { sorting: false };
        _this.onSortStart = function (_a) {
            var index = _a.index;
            _this.setState({ sorting: true });
        };
        _this.onSortEnd = function (_a) {
            var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
            _this.props.reorderTabs(oldIndex, newIndex);
            _this.setState({ sorting: false });
        };
        _this.getHelperDimensions = function (_a) {
            var node = _a.node;
            var _b = node.getBoundingClientRect(), width = _b.width, height = _b.height;
            return { width: width, height: height };
        };
        return _this;
    }
    TabBar.prototype.render = function () {
        var _a = this.props, sessions = _a.sessions, isApp = _a.isApp, selectedSessionId = _a.selectedSessionId, onNewSession = _a.onNewSession;
        var sorting = this.state.sorting;
        return (<SortableTabBar onSortStart={this.onSortStart} onSortEnd={this.onSortEnd} getHelperDimensions={this.getHelperDimensions} axis="x" lockAxis="x" lockToContainerEdges={true} distance={10} transitionDuration={200}>
        <Tabs isApp={isApp}>
          {sessions.map(function (session, ndx) { return (<SortableTab key={session.id} session={session} selectedSessionId={selectedSessionId} index={ndx}/>); })}
          <Plus onClick={onNewSession} sorting={sorting}>
            <Icons_1.AddIcon width={34} height={34} strokeWidth={4} title="Opens a New Tab"/>
          </Plus>
        </Tabs>
      </SortableTabBar>);
    };
    return TabBar;
}(React.PureComponent));
var mapStateToProps = reselect_1.createStructuredSelector({
    sessions: selectors_1.getSessionsArray,
    selectedSessionId: selectors_1.getSelectedSessionIdFromRoot,
});
exports.default = react_redux_1.connect(mapStateToProps, { reorderTabs: actions_1.reorderTabs })(TabBar);
var StyledTabBar = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: white;\n  height: 57px;\n  background: ", ";\n  overflow: hidden;\n  -webkit-app-region: drag;\n  &:hover {\n    overflow-x: overlay;\n  }\n"], ["\n  color: white;\n  height: 57px;\n  background: ", ";\n  overflow: hidden;\n  -webkit-app-region: drag;\n  &:hover {\n    overflow-x: overlay;\n  }\n"])), function (p) { return p.theme.editorColours.background; });
var SortableTabBar = react_sortable_hoc_1.SortableContainer(StyledTabBar);
var Tabs = styled_1.styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n  padding-left: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n  padding-left: ", ";\n"])), function (p) { return (p.isApp ? '43px' : '0'); });
var Plus = styled_1.styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  -webkit-app-region: no-drag;\n  box-sizing: border-box;\n  display: flex;\n  visibility: ", "\n  height: 43px;\n  width: 43px;\n  border-radius: 2px;\n  border-bottom: 2px solid ", ";\n  background: ", ";\n  justify-content: center;\n  align-items: center;\n  svg {\n    stroke: ", ";\n  }\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  -webkit-app-region: no-drag;\n  box-sizing: border-box;\n  display: flex;\n  visibility: ", "\n  height: 43px;\n  width: 43px;\n  border-radius: 2px;\n  border-bottom: 2px solid ", ";\n  background: ", ";\n  justify-content: center;\n  align-items: center;\n  svg {\n    stroke: ", ";\n  }\n  &:hover {\n    background: ", ";\n  }\n"])), function (p) { return (p.sorting ? 'hidden' : 'visible'); }, function (p) { return p.theme.editorColours.navigationBar; }, function (p) { return p.theme.editorColours.tabInactive; }, function (p) { return p.theme.editorColours.icon; }, function (p) { return p.theme.editorColours.tab; });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=TabBar.jsx.map