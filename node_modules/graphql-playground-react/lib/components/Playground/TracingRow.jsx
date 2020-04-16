"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("../../styled/styled");
var Row = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  font-size: 12px;\n  display: table;\n  padding-right: 25px;\n\n  color: ", ";\n"], ["\n  position: relative;\n  font-size: 12px;\n  display: table;\n  padding-right: 25px;\n\n  color: ", ";\n"])), function (p) { return p.theme.editorColours.text; });
var Bar = styled_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  margin: 0 10px;\n  height: 1.5px;\n  bottom: 4px;\n\n  background: ", ";\n"], ["\n  display: inline-block;\n  position: relative;\n  margin: 0 10px;\n  height: 1.5px;\n  bottom: 4px;\n\n  background: ", ";\n"])), function (p) { return p.theme.editorColours.text; });
var Duration = styled_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 10px;\n  color: ", ";\n"], ["\n  font-size: 10px;\n  color: ", ";\n"])), function (p) { return p.theme.editorColours.textInactive; });
var NameWrapper = styled_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  transform: translateX(-100%);\n  display: inline-flex;\n  align-items: center;\n\n  text-align: right;\n"], ["\n  position: absolute;\n  left: 0;\n  transform: translateX(-100%);\n  display: inline-flex;\n  align-items: center;\n\n  text-align: right;\n"])));
var Name = styled_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
var TracingRow = /** @class */ (function (_super) {
    __extends(TracingRow, _super);
    function TracingRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            collapsed: false,
        };
        return _this;
    }
    TracingRow.prototype.render = function () {
        var _a = this.props, path = _a.path, startOffset = _a.startOffset, duration = _a.duration;
        var factor = 1000 * 1000;
        var offsetLeft = startOffset / factor;
        var barWidth = duration / factor;
        return (<Row style={{ transform: "translateX(" + offsetLeft + "px)" }}>
        <NameWrapper>
          <Name>
            {path.slice(-2).map(function (p, index) { return (<span style={{
            opacity: index === path.slice(-2).length - 1 ? 1 : 0.6,
        }} key={p}>
                {"" + (index > 0 ? '.' : '') + p}
              </span>); })}
          </Name>
        </NameWrapper>
        <Bar style={{ width: Math.max(barWidth, 3) }}/>
        <Duration>{this.printDuration(duration)}</Duration>
      </Row>);
    };
    TracingRow.prototype.printDuration = function (nanoSeconds) {
        var microSeconds = Math.round(nanoSeconds / 1000);
        if (microSeconds > 1000) {
            var ms = Math.round(microSeconds / 1000);
            return ms + " ms";
        }
        return microSeconds + " \u00B5s";
    };
    return TracingRow;
}(React.Component));
exports.default = TracingRow;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=TracingRow.jsx.map