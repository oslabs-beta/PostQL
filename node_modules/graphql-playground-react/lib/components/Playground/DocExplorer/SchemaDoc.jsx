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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TypeLink_1 = require("graphiql/dist/components/DocExplorer/TypeLink");
var MarkdownContent_1 = require("graphiql/dist/components/DocExplorer/MarkdownContent");
// Render the top level Schema
var SchemaDoc = /** @class */ (function (_super) {
    __extends(SchemaDoc, _super);
    function SchemaDoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SchemaDoc.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.schema !== nextProps.schema;
    };
    SchemaDoc.prototype.render = function () {
        var schema = this.props.schema;
        var queryType = schema.getQueryType();
        var mutationType = schema.getMutationType && schema.getMutationType();
        var subscriptionType = schema.getSubscriptionType && schema.getSubscriptionType();
        return (<div className="root">
        <MarkdownContent_1.default className="doc-type-description" markdown={'A GraphQL schema provides a root type for each kind of operation.'}/>
        <div className="doc-category">
          <div className="doc-category-title">{'root types'}</div>
          <div className="doc-category-item">
            <span className="keyword">{'query'}</span>
            {': '}
            <TypeLink_1.default type={queryType} onClick={this.props.onClickType}/>
          </div>
          {mutationType && (<div className="doc-category-item">
              <span className="keyword">{'mutation'}</span>
              {': '}
              <TypeLink_1.default type={mutationType} onClick={this.props.onClickType}/>
            </div>)}
          {subscriptionType && (<div className="doc-category-item">
              <span className="keyword">{'subscription'}</span>
              {': '}
              <TypeLink_1.default type={subscriptionType} onClick={this.props.onClickType}/>
            </div>)}
        </div>
      </div>);
    };
    return SchemaDoc;
}(React.Component));
exports.default = SchemaDoc;
//# sourceMappingURL=SchemaDoc.jsx.map