"use strict";
/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */
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
var onHasCompletion_1 = require("./onHasCompletion");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../state/sessions/actions");
var selectors_1 = require("../../state/sessions/selectors");
var reselect_1 = require("reselect");
var styled_1 = require("../../styled");
/**
 * VariableEditor
 *
 * An instance of CodeMirror for editing variables defined in QueryEditor.
 *
 * Props:
 *
 *   - variableToType: A mapping of variable name to GraphQLType.
 *   - value: The text of the editor.
 *   - onEdit: A function called when the editor changes, given the edited text.
 *   - readOnly: Turns the editor to read-only mode.
 *
 */
var VariableEditor = /** @class */ (function (_super) {
    __extends(VariableEditor, _super);
    function VariableEditor(props) {
        var _this = _super.call(this, props) || this;
        _this._onKeyUp = function (cm, event) {
            var code = event.keyCode;
            if ((code >= 65 && code <= 90) || // letters
                (!event.shiftKey && code >= 48 && code <= 57) || // numbers
                (event.shiftKey && code === 189) || // underscore
                (event.shiftKey && code === 222) // "
            ) {
                _this.editor.execCommand('autocomplete');
            }
        };
        _this._onEdit = function () {
            if (!_this.ignoreChangeEvent) {
                _this.cachedValue = _this.editor.getValue();
                _this.props.onChange(_this.cachedValue);
            }
        };
        _this._onHasCompletion = function (cm, data) {
            onHasCompletion_1.default(cm, data, _this.props.onHintInformationRender);
        };
        // Keep a cached version of the value, this cache will be updated when the
        // editor is updated, which can later be used to protect the editor from
        // unnecessary updates during the update lifecycle.
        _this.cachedValue = props.value || '';
        if (_this.props.getRef) {
            _this.props.getRef(_this);
        }
        return _this;
    }
    VariableEditor.prototype.componentDidMount = function () {
        var _this = this;
        // Lazily require to ensure requiring GraphiQL outside of a Browser context
        // does not produce an error.
        var CodeMirror = require('codemirror');
        require('codemirror/addon/hint/show-hint');
        require('codemirror/addon/edit/matchbrackets');
        require('codemirror/addon/edit/closebrackets');
        require('codemirror/addon/fold/brace-fold');
        require('codemirror/addon/fold/foldgutter');
        require('codemirror/addon/lint/lint');
        require('codemirror/addon/search/searchcursor');
        require('codemirror/addon/search/jump-to-line');
        require('codemirror/addon/dialog/dialog');
        require('codemirror/keymap/sublime');
        require('codemirror-graphql/variables/hint');
        require('codemirror-graphql/variables/lint');
        require('codemirror-graphql/variables/mode');
        this.editor = CodeMirror(this._node, {
            value: this.props.value || '',
            lineNumbers: true,
            tabSize: 2,
            mode: 'graphql-variables',
            theme: 'graphiql',
            keyMap: 'sublime',
            autoCloseBrackets: true,
            matchBrackets: true,
            showCursorWhenSelecting: true,
            readOnly: false,
            foldGutter: {
                minFoldSize: 4,
            },
            lint: {
                variableToType: this.props.variableToType
                    ? this.props.variableToType.toJS()
                    : undefined,
            },
            hintOptions: {
                variableToType: this.props.variableToType
                    ? this.props.variableToType.toJS()
                    : undefined,
                closeOnUnfocus: false,
                completeSingle: false,
            },
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            extraKeys: {
                'Cmd-Space': function () { return _this.editor.showHint({ completeSingle: false }); },
                'Ctrl-Space': function () { return _this.editor.showHint({ completeSingle: false }); },
                'Alt-Space': function () { return _this.editor.showHint({ completeSingle: false }); },
                'Shift-Space': function () { return _this.editor.showHint({ completeSingle: false }); },
                'Cmd-Enter': function () {
                    if (_this.props.onRunQuery) {
                        _this.props.onRunQuery();
                    }
                },
                'Ctrl-Enter': function () {
                    if (_this.props.onRunQuery) {
                        _this.props.onRunQuery();
                    }
                },
                'Shift-Ctrl-P': function () {
                    if (_this.props.prettifyQuery) {
                        _this.props.prettifyQuery();
                    }
                },
                // Persistent search box in Query Editor
                'Cmd-F': 'findPersistent',
                'Ctrl-F': 'findPersistent',
                // Editor improvements
                'Ctrl-Left': 'goSubwordLeft',
                'Ctrl-Right': 'goSubwordRight',
                'Alt-Left': 'goGroupLeft',
                'Alt-Right': 'goGroupRight',
            },
        });
        this.editor.on('change', this._onEdit);
        this.editor.on('keyup', this._onKeyUp);
        this.editor.on('hasCompletion', this._onHasCompletion);
    };
    VariableEditor.prototype.componentDidUpdate = function (prevProps) {
        var CodeMirror = require('codemirror');
        // Ensure the changes caused by this update are not interpretted as
        // user-input changes which could otherwise result in an infinite
        // event loop.
        this.ignoreChangeEvent = true;
        if (this.props.variableToType !== prevProps.variableToType) {
            this.editor.options.lint.variableToType = this.props.variableToType
                ? this.props.variableToType.toJS()
                : undefined;
            this.editor.options.hintOptions.variableToType = this.props.variableToType
                ? this.props.variableToType.toJS()
                : undefined;
            CodeMirror.signal(this.editor, 'change', this.editor);
        }
        if (this.props.value !== prevProps.value &&
            this.props.value !== this.cachedValue) {
            this.cachedValue = this.props.value;
            this.editor.setValue(this.props.value);
        }
        this.ignoreChangeEvent = false;
    };
    VariableEditor.prototype.componentWillUnmount = function () {
        this.editor.off('change', this._onEdit);
        this.editor.off('keyup', this._onKeyUp);
        this.editor.off('hasCompletion', this._onHasCompletion);
        this.editor = null;
    };
    VariableEditor.prototype.render = function () {
        var _this = this;
        return (<Editor ref={function (node) {
            _this._node = node;
        }}/>);
    };
    /**
     * Public API for retrieving the CodeMirror instance from this
     * React component.
     */
    VariableEditor.prototype.getCodeMirror = function () {
        return this.editor;
    };
    /**
     * Public API for retrieving the DOM client height for this component.
     */
    VariableEditor.prototype.getClientHeight = function () {
        return this._node && this._node.clientHeight;
    };
    return VariableEditor;
}(React.PureComponent));
var mapStateToVariablesProps = reselect_1.createStructuredSelector({
    value: selectors_1.getVariables,
    variableToType: selectors_1.getVariableToType,
});
exports.VariableEditorComponent = react_redux_1.connect(mapStateToVariablesProps, {
    onChange: actions_1.editVariables,
})(VariableEditor);
var mapStateToHeadersProps = reselect_1.createStructuredSelector({
    value: selectors_1.getHeaders,
});
exports.HeadersEditorComponent = react_redux_1.connect(mapStateToHeadersProps, {
    onChange: actions_1.editHeaders,
})(VariableEditor);
var Editor = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  height: 100%;\n  position: relative;\n"], ["\n  flex: 1;\n  height: 100%;\n  position: relative;\n"])));
var templateObject_1;
//# sourceMappingURL=VariableEditor.jsx.map