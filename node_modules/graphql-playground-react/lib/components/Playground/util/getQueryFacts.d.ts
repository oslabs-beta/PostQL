/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import { DocumentNode } from 'graphql';
/**
 * Provided previous "queryFacts", a GraphQL schema, and a query document
 * string, return a set of facts about that query useful for GraphiQL features.
 *
 * If the query cannot be parsed, returns undefined.
 */
export declare function getQueryFacts(schema: any, documentAST: DocumentNode): any;
/**
 * Provided a schema and a document, produces a `variableToType` Object.
 */
export declare function collectVariables(schema: any, documentAST: any): any;
