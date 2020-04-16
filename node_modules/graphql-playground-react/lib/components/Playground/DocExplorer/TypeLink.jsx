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
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var graphql_1 = require("graphql");
var ArgumentInline_1 = require("./ArgumentInline");
var Icons_1 = require("../../Icons");
var toJS_1 = require("../util/toJS");
var actions_1 = require("../../../state/docs/actions");
var selectors_1 = require("../../../state/docs/selectors");
var selectors_2 = require("../../../state/sessions/selectors");
var reselect_1 = require("reselect");
var styled_1 = require("../../../styled");
var TypeLink = /** @class */ (function (_super) {
    __extends(TypeLink, _super);
    function TypeLink(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function () {
            if (_this.props.clickable) {
                _this.props.addStack(_this.props.sessionId, _this.props.type, _this.props.x, _this.props.y);
            }
        };
        _this.setRef = function (ref) {
            _this.ref = ref;
        };
        _this.state = {
            collapsed: false,
        };
        return _this;
    }
    TypeLink.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.props.type !== nextProps.type ||
            this.props.keyMove !== nextProps.keyMove ||
            this.props.isActive !== nextProps.isActive ||
            this.state.collapsed !== nextState.collapsed);
    };
    TypeLink.prototype.componentDidMount = function () {
        this.updateSize();
    };
    TypeLink.prototype.componentDidUpdate = function () {
        this.updateSize();
    };
    TypeLink.prototype.updateSize = function () {
        if (this.ref) {
            if (typeof this.props.onSetWidth === 'function') {
                this.props.onSetWidth(this.ref.scrollWidth);
            }
            var LINE_HEIGHT = 31;
            if (this.ref.scrollHeight > LINE_HEIGHT &&
                !this.state.collapsed &&
                this.props.collapsable) {
                this.setState({ collapsed: true });
            }
        }
    };
    TypeLink.prototype.render = function () {
        var _a = this.props, type = _a.type, clickable = _a.clickable, className = _a.className, beforeNode = _a.beforeNode, afterNode = _a.afterNode, showParentName = _a.showParentName, isActive = _a.isActive;
        var isGraphqlType = graphql_1.isType(type);
        var fieldName = showParentName && type.parent ? (<span>
          {type.parent.name}.<b>{type.name}</b>
        </span>) : (type.name);
        return (<DocsCategoryItem active={isActive} clickable={clickable} className={"doc-category-item" + (className ? className : '')} onClick={this.onClick} ref={this.setRef}>
        {beforeNode}
        {beforeNode && ' '}
        {!isGraphqlType && (<span>
            <span className="field-name">{fieldName}</span>
            {type.args &&
            type.args.length > 0 && [
            '(',
            <span key="args">
                  {this.state.collapsed ? (<Dots>...</Dots>) : (type.args.map(function (arg) { return (<ArgumentInline_1.default key={arg.name} arg={arg}/>); }))}
                </span>,
            ')',
        ]}
            {': '}
          </span>)}
        <span className="type-name">{renderType(type.type || type)}</span>
        {type.defaultValue !== undefined ? (<DefaultValue>
            {' '}
            = <span>{"" + JSON.stringify(type.defaultValue, null, 2)}</span>
          </DefaultValue>) : (undefined)}
        {clickable && (<IconBox>
            <Icons_1.Triangle />
          </IconBox>)}
        {afterNode && ' '}
        {afterNode}
      </DocsCategoryItem>);
    };
    TypeLink.defaultProps = {
        clickable: true,
        collapsable: false,
    };
    return TypeLink;
}(React.Component));
function renderType(type) {
    if (type instanceof graphql_1.GraphQLNonNull) {
        return (<span>
        {renderType(type.ofType)}
        {'!'}
      </span>);
    }
    if (type instanceof graphql_1.GraphQLList) {
        return (<span>
        {'['}
        {renderType(type.ofType)}
        {']'}
      </span>);
    }
    return <span>{type.name}</span>;
}
var mapStateToProps = function (state, _a) {
    var x = _a.x, y = _a.y;
    var docs = selectors_1.getSessionDocsState(state);
    var sessionId = selectors_2.getSelectedSessionIdFromRoot(state);
    if (docs) {
        var nav = docs.navStack.get(x);
        if (nav) {
            var isActive = nav.get('x') === x && nav.get('y') === y;
            return {
                isActive: isActive,
                keyMove: docs.keyMove,
                lastActive: isActive && x === docs.navStack.length - 1,
                sessionId: sessionId,
            };
        }
    }
    return {
        isActive: false,
        keyMove: false,
        lastActive: false,
        sessionId: sessionId,
    };
};
var selector = reselect_1.createSelector([mapStateToProps], function (s) { return s; });
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({
        addStack: actions_1.addStack,
    }, dispatch);
};
exports.default = react_redux_1.connect(selector, mapDispatchToProps)(toJS_1.toJS(TypeLink));
var DocsCategoryItem = styled_1.styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 6px 16px;\n  overflow: auto;\n  font-size: 14px;\n  transition: 0.1s background-color;\n  background: ", ";\n\n  cursor: ", ";\n\n  &:hover {\n    color: ", ";\n    background: #2a7ed3;\n    .field-name,\n    .type-name,\n    .arg-name,\n    span {\n      color: ", " !important;\n    }\n  }\n  b {\n    font-weight: 600;\n  }\n"], ["\n  position: relative;\n  padding: 6px 16px;\n  overflow: auto;\n  font-size: 14px;\n  transition: 0.1s background-color;\n  background: ",
    ";\n\n  cursor: ", ";\n\n  &:hover {\n    color: ", ";\n    background: #2a7ed3;\n    .field-name,\n    .type-name,\n    .arg-name,\n    span {\n      color: ", " !important;\n    }\n  }\n  b {\n    font-weight: 600;\n  }\n"])), function (p) {
    return p.active ? p.theme.colours.black07 : p.theme.colours.white;
}, function (p) { return (p.clickable ? 'pointer' : 'select'); }, function (p) { return p.theme.colours.white; }, function (p) { return p.theme.colours.white; });
var Dots = styled_1.styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 600;\n"], ["\n  font-weight: 600;\n"])));
var IconBox = styled_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n"], ["\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n"])));
var DefaultValue = styled_1.styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  span {\n    color: #1f61a9;\n  }\n"], ["\n  color: ", ";\n  span {\n    color: #1f61a9;\n  }\n"])), function (p) { return p.theme.colours.black30; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TypeLink.jsx.map