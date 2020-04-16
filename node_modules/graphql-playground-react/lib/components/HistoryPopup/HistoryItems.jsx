"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Icons_1 = require("../Icons");
var styled_1 = require("../../styled");
/* tslint:disable */
exports.default = styled_1.withTheme(function (_a) {
    var items = _a.items, onItemSelect = _a.onItemSelect, selectedItemIndex = _a.selectedItemIndex, onItemStarToggled = _a.onItemStarToggled, theme = _a.theme;
    return (<HistoryItems>
      {items
        .map(function (item, index) { return (<HistoryItem key={item.id} active={selectedItemIndex === index} onClick={function () { return onItemSelect(index); }}>
            <OperationSide>
              <Icons_1.Star onClick={function () { return onItemStarToggled(item.id); }} stroke={!item.starred ? 'rgb(221,171,0)' : undefined} fill={item.starred ? 'rgb(221,171,0)' : undefined} strokeWidth={0.5} width={25} height={25}/>
              <Operation>
                <OperationText>
                  {item.operationName ||
        item.queryTypes.firstOperationName ||
        'New Session'}
                </OperationText>
                {item.queryTypes.query && <QueryIcon>Q</QueryIcon>}
                {item.queryTypes.mutation && <MutationIcon>M</MutationIcon>}
                {item.queryTypes.subscription && (<SubscriptionIcon>S</SubscriptionIcon>)}
              </Operation>
            </OperationSide>
            <OperationSide>
              {item.date && (<Time>
                  {typeof item.date.getMonth === 'function' &&
        item.date.getMonth() + 1}/{item.date.getDate()}/{item.date
        .getFullYear()
        .toString()
        .slice(2, 4)}
                </Time>)}
            </OperationSide>
          </HistoryItem>); })
        .toArray()
        .map(function (x) { return x[1]; })}
    </HistoryItems>);
});
var HistoryItems = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow-y: scroll;\n  max-height: calc(100vh - 121px);\n"], ["\n  overflow-y: scroll;\n  max-height: calc(100vh - 121px);\n"])));
var HistoryItem = styled_1.styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 20px;\n  cursor: pointer;\n  border-bottom: 1px solid;\n  border-color: ", ";\n  background: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 20px;\n  cursor: pointer;\n  border-bottom: 1px solid;\n  border-color: ", ";\n  background: ",
    ";\n"])), function (p) { return p.theme.colours.black10; }, function (p) {
    return p.active ? p.theme.colours.black04 : p.theme.colours.white;
});
var Operation = styled_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n"])));
var OperationSide = styled_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var OperationText = styled_1.styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 300;\n  font-size: 20px;\n  margin-right: 16px;\n"], ["\n  font-weight: 300;\n  font-size: 20px;\n  margin-right: 16px;\n"])));
var OperationIcon = styled_1.styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 21px;\n  width: 21px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 4px;\n  border-radius: 2px;\n  font-weight: 700;\n  font-size: 12px;\n  color: ", ";\n"], ["\n  height: 21px;\n  width: 21px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 4px;\n  border-radius: 2px;\n  font-weight: 700;\n  font-size: 12px;\n  color: ", ";\n"])), function (p) { return p.theme.colours.white; });
var QueryIcon = styled_1.styled(OperationIcon)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (p) { return p.theme.colours.blue; });
var MutationIcon = styled_1.styled(OperationIcon)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (p) { return p.theme.colours.orange; });
var SubscriptionIcon = styled_1.styled(OperationIcon)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (p) { return p.theme.colours.purple; });
var Time = styled_1.styled.time(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n  margin-left: 16px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n  margin-left: 16px;\n"])), function (p) { return p.theme.colours.black40; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=HistoryItems.jsx.map