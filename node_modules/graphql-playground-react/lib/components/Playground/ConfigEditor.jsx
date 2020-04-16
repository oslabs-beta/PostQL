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
var EditorWrapper_1 = require("./EditorWrapper");
var styled_1 = require("../../styled");
/**
 * The editor to edit json and yaml
 */
var ConfigEditor = /** @class */ (function (_super) {
    __extends(ConfigEditor, _super);
    function ConfigEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.setNode = function (node) {
            _this.node = node;
        };
        _this.onKeyUp = function (cm, event) {
            var code = event.keyCode;
            if ((code >= 65 && code <= 90) || // letters
                (!event.shiftKey && code >= 48 && code <= 57) || // numbers
                (event.shiftKey && code === 189) || // underscore
                (event.shiftKey && code === 222) // "
            ) {
                _this.editor.execCommand('autocomplete');
            }
        };
        _this.onEdit = function () {
            if (!_this.ignoreChangeEvent) {
                _this.cachedValue = _this.editor.getValue();
                if (_this.props.onEdit) {
                    _this.props.onEdit(_this.cachedValue);
                }
            }
        };
        // Keep a cached version of the value, this cache will be updated when the
        // editor is updated, which can later be used to protect the editor from
        // unnecessary updates during the update lifecycle.
        _this.cachedValue = props.value || '';
        return _this;
    }
    ConfigEditor.prototype.componentDidMount = function () {
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
        require('codemirror/mode/yaml/yaml');
        require('codemirror-graphql/variables/hint');
        require('codemirror-graphql/variables/lint');
        require('codemirror-graphql/variables/mode');
        this.editor = CodeMirror(this.node, {
            value: this.props.value || '',
            lineNumbers: true,
            tabSize: 2,
            mode: this.props.isYaml ? 'yaml' : 'graphql-variables',
            theme: this.props.editorTheme || 'graphiql',
            keyMap: 'sublime',
            autoCloseBrackets: true,
            matchBrackets: true,
            showCursorWhenSelecting: true,
            readOnly: this.props.readOnly ? 'nocursor' : false,
            foldGutter: {
                minFoldSize: 4,
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
                    if (_this.props.onPrettifyQuery) {
                        _this.props.onPrettifyQuery();
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
        this.editor.on('change', this.onEdit);
        this.editor.on('keyup', this.onKeyUp);
    };
    ConfigEditor.prototype.componentDidUpdate = function (prevProps) {
        // Ensure the changes caused by this update are not interpretted as
        // user-input changes which could otherwise result in an infinite
        // event loop.
        this.ignoreChangeEvent = true;
        if (this.props.value !== prevProps.value &&
            this.props.value !== this.cachedValue) {
            this.cachedValue = this.props.value;
            this.editor.setValue(this.props.value);
        }
        this.ignoreChangeEvent = false;
    };
    ConfigEditor.prototype.componentWillUnmount = function () {
        this.editor.off('change', this.onEdit);
        this.editor.off('keyup', this.onKeyUp);
        this.editor = null;
    };
    ConfigEditor.prototype.render = function () {
        return (<EditorWrapper_1.default>
        <Editor ref={this.setNode}/>
      </EditorWrapper_1.default>);
    };
    /**
     * Public API for retrieving the CodeMirror instance from this
     * React component.
     */
    ConfigEditor.prototype.getCodeMirror = function () {
        return this.editor;
    };
    /**
     * Public API for retrieving the DOM client height for this component.
     */
    ConfigEditor.prototype.getClientHeight = function () {
        return this.node && this.node.clientHeight;
    };
    return ConfigEditor;
}(React.Component));
exports.ConfigEditor = ConfigEditor;
var Editor = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  height: 100%;\n  position: relative;\n  .CodeMirror-linenumbers {\n    background: ", ";\n  }\n"], ["\n  flex: 1;\n  height: 100%;\n  position: relative;\n  .CodeMirror-linenumbers {\n    background: ", ";\n  }\n"])), function (p) { return p.theme.editorColours.resultBackground; });
var templateObject_1;
//# sourceMappingURL=ConfigEditor.jsx.map