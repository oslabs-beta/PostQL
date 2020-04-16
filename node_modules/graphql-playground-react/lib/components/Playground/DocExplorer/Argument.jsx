"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var graphql_1 = require("graphql");
var TypeLink_1 = require("./TypeLink");
function Argument(_a) {
    var arg = _a.arg, showDefaultValue = _a.showDefaultValue, x = _a.x, y = _a.y;
    return (<span>
      <TypeLink_1.default type={arg} x={x} y={y} lastActive={false} afterNode={arg.defaultValue !== undefined &&
        showDefaultValue !== false && (<span>
              {' = '}
              <span className="arg-default-value">
                {graphql_1.print(graphql_1.astFromValue(arg.defaultValue, arg.type))}
              </span>
            </span>)}/>
    </span>);
}
exports.default = Argument;
//# sourceMappingURL=Argument.jsx.map