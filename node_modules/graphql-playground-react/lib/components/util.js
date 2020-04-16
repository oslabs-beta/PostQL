"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = require("graphql");

var LRU = require("lru-cache");

function getActiveEndpoints(config, envName, projectName) {
  if (projectName) {
    var env = config.projects[projectName].extensions.endpoints[envName];
    return getEndpointFromEndpointConfig(env);
  } else {
    var env = config.extensions.endpoints[envName];
    return getEndpointFromEndpointConfig(env);
  }
}

exports.getActiveEndpoints = getActiveEndpoints;

function getEndpointFromEndpointConfig(env) {
  if (typeof env === 'string') {
    return {
      endpoint: env,
      subscriptionEndpoint: undefined
    };
  } else {
    return {
      endpoint: env.url,
      subscriptionEndpoint: env.subscription ? env.subscription.url : undefined,
      headers: env.headers
    };
  }
}

exports.getEndpointFromEndpointConfig = getEndpointFromEndpointConfig;
var printSchemaCache = new LRU({
  max: 10
});
/**
 * A cached version of `printSchema`
 * @param schema GraphQLSchema instance
 */

function cachedPrintSchema(schema) {
  var cachedString = printSchemaCache.get(schema);

  if (cachedString) {
    return cachedString;
  }

  var schemaString = graphql_1.printSchema(schema);
  printSchemaCache.set(schema, schemaString);
  return schemaString;
}

exports.cachedPrintSchema = cachedPrintSchema;