"use strict";
/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = require("graphql");
/**
 * Provided previous "queryFacts", a GraphQL schema, and a query document
 * string, return a set of facts about that query useful for GraphiQL features.
 *
 * If the query cannot be parsed, returns undefined.
 */


function getQueryFacts(schema, documentAST) {
  var variableToType = schema ? collectVariables(schema, documentAST) : null; // Collect operations by their names.

  var operations = [];
  documentAST.definitions.forEach(function (def) {
    if (def.kind === 'OperationDefinition') {
      operations.push(def);
    }
  });
  return {
    variableToType: variableToType,
    operations: operations
  };
}

exports.getQueryFacts = getQueryFacts;
/**
 * Provided a schema and a document, produces a `variableToType` Object.
 */

function collectVariables(schema, documentAST) {
  var variableToType = Object.create(null);
  documentAST.definitions.forEach(function (definition) {
    if (definition.kind === 'OperationDefinition') {
      var variableDefinitions = definition.variableDefinitions;

      if (variableDefinitions) {
        variableDefinitions.forEach(function (_a) {
          var variable = _a.variable,
              type = _a.type;
          var inputType = graphql_1.typeFromAST(schema, type);

          if (inputType) {
            variableToType[variable.name.value] = inputType;
          }
        });
      }
    }
  });
  return variableToType;
}

exports.collectVariables = collectVariables; // function getDeepType(type) {
//   if (type.type) {
//     return getDeepType(type.type)
//   }
//   return type
// }