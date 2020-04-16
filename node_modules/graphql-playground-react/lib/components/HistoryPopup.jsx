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
var Modal = require("react-modal");
var HistoryHeader_1 = require("./HistoryPopup/HistoryHeader");
var HistoryItems_1 = require("./HistoryPopup/HistoryItems");
var constants_1 = require("../constants");
var QueryEditor_1 = require("./Playground/QueryEditor");
var styled_1 = require("../styled");
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var selectors_1 = require("../state/history/selectors");
var selectors_2 = require("../state/general/selectors");
var actions_1 = require("../state/general/actions");
var actions_2 = require("../state/sessions/actions");
var actions_3 = require("../state/history/actions");
var EditorWrapper_1 = require("./Playground/EditorWrapper");
var Icons_1 = require("./Icons");
var HistoryPopup = /** @class */ (function (_super) {
    __extends(HistoryPopup, _super);
    function HistoryPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickUse = function () {
            var items = _this.props.items;
            var selectedItem = items.get(_this.state.selectedItemIndex);
            _this.props.duplicateSession(selectedItem);
            _this.props.closeHistory();
        };
        _this.handleItemSelect = function (index) {
            _this.setState({ selectedItemIndex: index });
        };
        _this.handleSelectFilter = function (filter) {
            _this.setState({ selectedFilter: filter });
        };
        _this.handleSearch = function (term) {
            _this.setState({ searchTerm: term });
        };
        var selectedItemIndex = props.items.keySeq().first() || '';
        _this.state = {
            selectedFilter: 'HISTORY',
            selectedItemIndex: selectedItemIndex,
            searchTerm: '',
        };
        return _this;
    }
    HistoryPopup.prototype.render = function () {
        var _a = this.state, searchTerm = _a.searchTerm, selectedFilter = _a.selectedFilter;
        var items = this.props.items.filter(function (item) {
            return selectedFilter === 'STARRED'
                ? item.starred
                : true &&
                    (searchTerm && searchTerm.length > 0
                        ? item.query.toLowerCase().includes(searchTerm.toLowerCase())
                        : true);
        });
        var selectedItem = this.props.items.get(this.state.selectedItemIndex);
        selectedItem =
            selectedItem && selectedItem.toJS ? selectedItem.toJS() : undefined;
        return (<Modal isOpen={this.props.isOpen} onRequestClose={this.props.closeHistory} contentLabel="GraphiQL Session History" style={constants_1.modalStyle} ariaHideApp={false}>
        <Wrapper>
          <Left>
            <HistoryHeader_1.default onSelectFilter={this.handleSelectFilter} selectedFilter={this.state.selectedFilter} onSearch={this.handleSearch}/>
            <HistoryItems_1.default items={items} selectedItemIndex={this.state.selectedItemIndex} searchTerm={this.state.searchTerm} onItemSelect={this.handleItemSelect} onItemStarToggled={this.props.toggleHistoryItemStarring}/>
          </Left>
          {Boolean(selectedItem) ? (<Right>
              <RightHeader>
                <View />
                <Use onClick={this.handleClickUse}>
                  <UseText>Use</UseText>
                  <Icons_1.ArrowRight color="white" width={13} height={13}/>
                </Use>
              </RightHeader>
              <Big>
                <GraphiqlWrapper>
                  <EditorWrapper_1.Container>
                    <QueryWrap>
                      <QueryEditor_1.QueryEditor value={selectedItem.query}/>
                    </QueryWrap>
                  </EditorWrapper_1.Container>
                </GraphiqlWrapper>
              </Big>
            </Right>) : (<Right>
              <RightEmpty>
                <RightEmptyText>No History yet</RightEmptyText>
              </RightEmpty>
            </Right>)}
        </Wrapper>
      </Modal>);
    };
    return HistoryPopup;
}(React.Component));
var mapStateToProps = reselect_1.createStructuredSelector({
    items: selectors_1.getHistory,
    isOpen: selectors_2.getHistoryOpen,
});
exports.default = react_redux_1.connect(mapStateToProps, {
    closeHistory: actions_1.closeHistory,
    openHistory: actions_1.openHistory,
    duplicateSession: actions_2.duplicateSession,
    toggleHistoryItemStarring: actions_3.toggleHistoryItemStarring,
})(HistoryPopup);
var Wrapper = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  min-height: 500px;\n"], ["\n  display: flex;\n  min-height: 500px;\n"])));
var Left = styled_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n\n  background: white;\n"], ["\n  flex: 1;\n\n  background: white;\n"])));
var Right = styled_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 0 0 464px;\n  z-index: 2;\n"], ["\n  flex: 0 0 464px;\n  z-index: 2;\n"])));
var RightHeader = styled_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  background: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding-left: ", ";\n  padding-right: ", ";\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  background: ", ";\n"])), function (p) { return p.theme.sizes.medium25; }, function (p) { return p.theme.sizes.medium25; }, function (p) { return p.theme.editorColours.resultBackground; });
var RightEmpty = styled_1.styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: ", ";\n"], ["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: ", ";\n"])), function (p) { return p.theme.editorColours.resultBackground; });
var RightEmptyText = styled_1.styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), function (p) { return p.theme.editorColours.text; });
var View = styled_1.styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.4);\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.4);\n"])), function (p) { return p.theme.sizes.fontSmall; }, function (p) { return p.theme.sizes.fontSemiBold; });
var Use = styled_1.styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  padding-top: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n\n  font-size: ", ";\n  font-weight: ", ";\n\n  border-radius: ", ";\n  background: ", ";\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n\n  padding-top: ", ";\n  padding-bottom: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n\n  font-size: ", ";\n  font-weight: ", ";\n\n  border-radius: ", ";\n  background: ", ";\n  cursor: pointer;\n"])), function (p) { return p.theme.sizes.small10; }, function (p) { return p.theme.sizes.small10; }, function (p) { return p.theme.sizes.small16; }, function (p) { return p.theme.sizes.small16; }, function (p) { return p.theme.sizes.fontSmall; }, function (p) { return p.theme.sizes.fontSemiBold; }, function (p) { return p.theme.sizes.smallRadius; }, function (p) { return p.theme.colours.green; });
var UseText = styled_1.styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-right: ", ";\n  color: white;\n"], ["\n  margin-right: ", ";\n  color: white;\n"])), function (p) { return p.theme.sizes.small6; });
var Big = styled_1.styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  height: calc(100% - 81px);\n  display: flex;\n  flex: 1 1 auto;\n"], ["\n  height: calc(100% - 81px);\n  display: flex;\n  flex: 1 1 auto;\n"])));
var GraphiqlWrapper = styled_1.styled(Big)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n"])));
var QueryWrap = styled_1.styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=HistoryPopup.jsx.map