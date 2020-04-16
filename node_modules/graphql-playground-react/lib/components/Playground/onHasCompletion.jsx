"use strict";
/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var marked = require("marked");
/**
 * Render a custom UI for CodeMirror's hint which includes additional info
 * about the type and description for the selected context.
 */
function onHasCompletion(cm, data, onHintInformationRender) {
    var CodeMirror = require('codemirror');
    var wrapper;
    var information;
    var deprecation;
    // When a hint result is selected, we touch the UI.
    CodeMirror.on(data, 'select', function (ctx, el) {
        // Only the first time (usually when the hint UI is first displayed)
        // do we create the wrapping node.
        if (!wrapper) {
            // Wrap the existing hint UI, so we have a place to put information.
            var hintsUl_1 = el.parentNode;
            var container = hintsUl_1.parentNode;
            wrapper = document.createElement('div');
            container.appendChild(wrapper);
            // CodeMirror vertically inverts the hint UI if there is not enough
            // space below the cursor. Since this modified UI appends to the bottom
            // of CodeMirror's existing UI, it could cover the cursor. This adjusts
            // the positioning of the hint UI to accomodate.
            var top_1 = hintsUl_1.style.top;
            var bottom = '';
            var cursorTop = cm.cursorCoords().top;
            if (parseInt(top_1, 10) < cursorTop) {
                top_1 = '';
                bottom = window.innerHeight - cursorTop + 3 + 'px';
            }
            // Style the wrapper, remove positioning from hints. Note that usage
            // of this option will need to specify CSS to remove some styles from
            // the existing hint UI.
            wrapper.className = 'CodeMirror-hints-wrapper';
            wrapper.style.left = hintsUl_1.style.left;
            wrapper.style.top = top_1;
            wrapper.style.bottom = bottom;
            hintsUl_1.style.left = '';
            hintsUl_1.style.top = '';
            // This "information" node will contain the additional info about the
            // highlighted typeahead option.
            information = document.createElement('div');
            information.className = 'CodeMirror-hint-information';
            // This "deprecation" node will contain info about deprecated usage.
            deprecation = document.createElement('div');
            deprecation.className = 'CodeMirror-hint-deprecation';
            if (bottom) {
                wrapper.appendChild(deprecation);
                wrapper.appendChild(information);
                wrapper.appendChild(hintsUl_1);
            }
            else {
                wrapper.appendChild(hintsUl_1);
                wrapper.appendChild(information);
                wrapper.appendChild(deprecation);
            }
            var wrapperHeight = wrapper.clientHeight;
            var currentTop = parseFloat(String(top_1).replace('px', ''));
            var newTop = currentTop;
            if (wrapperHeight + currentTop > window.innerHeight) {
                newTop = window.innerHeight - 40 - wrapperHeight;
            }
            wrapper.style.top = newTop + "px";
            global.wrapper = wrapper;
            // When CodeMirror attempts to remove the hint UI, we detect that it was
            // removed from our wrapper and in turn remove the wrapper from the
            // original container.
            var onRemoveFn_1;
            wrapper.addEventListener('DOMNodeRemoved', (onRemoveFn_1 = function (event) {
                if (event.target === hintsUl_1) {
                    wrapper.removeEventListener('DOMNodeRemoved', onRemoveFn_1);
                    wrapper.parentNode.removeChild(wrapper);
                    wrapper = null;
                    information = null;
                    onRemoveFn_1 = null;
                }
            }));
        }
        // Now that the UI has been set up, add info to information.
        var description = ctx.description
            ? marked(ctx.description, { sanitize: true })
            : '';
        var type = ctx.type && ctx.type !== 'undefined'
            ? '<span class="infoType">' + renderType(ctx.type) + '</span>'
            : '';
        information.innerHTML =
            '<div class="content">' +
                (description.slice(0, 3) === '<p>'
                    ? '<p>' + type + description.slice(3)
                    : type + description) +
                '</div>';
        if (ctx.isDeprecated) {
            var reason = ctx.deprecationReason
                ? marked(ctx.deprecationReason, { sanitize: true })
                : '';
            deprecation.innerHTML =
                '<span class="deprecation-label">Deprecated</span>' + reason;
            deprecation.style.display = 'block';
        }
        else {
            deprecation.style.display = 'none';
        }
        // Additional rendering?
        if (onHintInformationRender) {
            onHintInformationRender(information);
        }
    });
}
exports.default = onHasCompletion;
function renderType(type) {
    return "<a class=\"typeName\">" + type + "</a>";
}
//# sourceMappingURL=onHasCompletion.jsx.map