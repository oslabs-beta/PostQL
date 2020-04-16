"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cuid = require("cuid");

var graphql_1 = require("graphql");

var getQueryTypes_1 = require("./components/Playground/util/getQueryTypes");

var immutable_1 = require("immutable");

exports.columnWidth = 300;
exports.introspectionQuery = graphql_1.getIntrospectionQuery();
exports.defaultQuery = '# Write your query or mutation here\n';
exports.modalStyle = {
  overlay: {
    zIndex: 99999,
    backgroundColor: 'rgba(15,32,46,.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'relative',
    width: 976,
    height: 'auto',
    top: 'initial',
    left: 'initial',
    right: 'initial',
    bottom: 'initial',
    borderRadius: 2,
    padding: 0,
    border: 'none',
    background: 'none',
    boxShadow: '0 1px 7px rgba(0,0,0,.2)'
  }
};

function getDefaultSession(endpoint) {
  return {
    id: cuid(),
    query: exports.defaultQuery,
    variables: '',
    responses: immutable_1.List([]),
    endpoint: endpoint,
    operationName: undefined,
    hasMutation: false,
    hasSubscription: false,
    hasQuery: false,
    queryTypes: getQueryTypes_1.getQueryTypes(exports.defaultQuery),
    subscriptionActive: false,
    date: new Date(),
    starred: false,
    queryRunning: false,
    operations: immutable_1.List([]),
    isReloadingSchema: false,
    isSchemaPendingUpdate: false,
    responseExtensions: {},
    queryVariablesActive: false,
    endpointUnreachable: false,
    editorFlex: 1,
    variableEditorOpen: false,
    variableEditorHeight: 200,
    responseTracingOpen: false,
    responseTracingHeight: 300,
    docExplorerWidth: 350,
    variableToType: immutable_1.Map({}),
    headers: '',
    file: undefined,
    isFile: false,
    name: undefined,
    filePath: undefined,
    selectedUserToken: undefined,
    hasChanged: undefined,
    absolutePath: undefined,
    isSettingsTab: undefined,
    isConfigTab: undefined,
    currentQueryStartTime: undefined,
    currentQueryEndTime: undefined,
    nextQueryStartTime: undefined,
    tracingSupported: undefined,
    changed: undefined,
    scrollTop: undefined
  };
}

exports.getDefaultSession = getDefaultSession;