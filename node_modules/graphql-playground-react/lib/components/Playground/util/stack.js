"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = require("graphql");

function getNewStack(root, schema, stack) {
  var path = stack.getIn(['field', 'path']);
  var splittedPath = path.split('/');
  var pointer = null;
  var count = 0;
  var lastPointer = null;
  var y = -1;

  var _loop_1 = function _loop_1() {
    var currentPath = splittedPath.shift();

    if (count === 0) {
      pointer = root[currentPath];
      y = Object.keys(root).indexOf(currentPath);
    } else {
      var argFound = pointer.args.find(function (arg) {
        return arg.name === currentPath;
      });
      lastPointer = pointer;

      if (argFound) {
        pointer = argFound;
      } else {
        if (pointer.type.ofType) {
          pointer = getDeeperType(pointer.type.ofType);
        }

        if (pointer.type) {
          pointer = pointer.type;
        }

        pointer = pointer.getFields()[currentPath] || pointer.getInterfaces().find(function (i) {
          return i.name === currentPath;
        });
      }
    }

    if (lastPointer) {
      y = getElementIndex(schema, lastPointer, pointer);
    }

    count++;
  };

  while (splittedPath.length > 0) {
    _loop_1();
  }

  if (!pointer) {
    return null;
  }

  pointer.path = path;
  pointer.parent = lastPointer;
  return stack.merge({
    y: y,
    field: pointer
  });
}

exports.getNewStack = getNewStack; // Return the deeper type found on object
// For example [[[Company]!]!]! will return only Company

function getDeeperType(type, depth) {
  if (depth === void 0) {
    depth = 0;
  }

  if (type.ofType && depth < 5) {
    return getDeeperType(type.ofType, depth + 1);
  }

  return type;
}

exports.getDeeperType = getDeeperType;

function getRootMap(schema) {
  return __assign(__assign(__assign({}, schema.getQueryType().getFields()), schema.getMutationType && schema.getMutationType() && schema.getMutationType().getFields()), schema.getSubscriptionType && schema.getSubscriptionType() && schema.getSubscriptionType().getFields());
}

exports.getRootMap = getRootMap; // Serialize schema to get root object

function serializeRoot(schema) {
  var obj = {
    queries: [],
    mutations: [],
    subscriptions: []
  };
  var queryType = schema.getQueryType();
  var queryFieldMap = queryType.getFields();
  obj.queries = Object.keys(queryFieldMap).map(function (fieldName) {
    var field = queryFieldMap[fieldName];
    field.path = fieldName;
    field.parent = null;
    return field;
  });
  var mutationType = schema.getMutationType && schema.getMutationType();

  if (mutationType) {
    var mutationFieldMap_1 = mutationType.getFields();
    obj.mutations = Object.keys(mutationFieldMap_1).map(function (fieldName) {
      var field = mutationFieldMap_1[fieldName];
      field.path = fieldName;
      field.parent = null;
      return field;
    });
  }

  ;
  window.ss = schema;
  var subscriptionType = schema.getSubscriptionType && schema.getSubscriptionType();

  if (subscriptionType) {
    var subscriptionFieldMap_1 = subscriptionType.getFields();
    obj.subscriptions = Object.keys(subscriptionFieldMap_1).map(function (fieldName) {
      var field = subscriptionFieldMap_1[fieldName];
      field.path = fieldName;
      field.parent = null;
      return field;
    });
  }

  return obj;
}

exports.serializeRoot = serializeRoot; // Return element that match index on root object

function getElementRoot(obj, index) {
  var i = 0;

  if (obj.queries[index + i]) {
    return obj.queries[index + i];
  }

  i += obj.queries.length;

  if (obj.mutations[index - i]) {
    return obj.mutations[index - i];
  }

  i += obj.mutations.length;

  if (obj.subscriptions[index - i]) {
    return obj.subscriptions[index - i];
  }
}

exports.getElementRoot = getElementRoot; // Serialize field

function serialize(schema, field) {
  var obj = {
    fields: [],
    interfaces: [],
    args: [],
    implementations: []
  };
  var type = field.type || field;
  var isVarType = graphql_1.isType(type);

  if (type.ofType) {
    type = getDeeperType(type.ofType);
  } // Get fields


  if (type.getFields) {
    var fieldMap_1 = type.getFields();
    obj.fields = Object.keys(fieldMap_1).map(function (name) {
      var f = fieldMap_1[name];
      f.parent = field;
      f.path = field.path + ("/" + name);
      return f;
    });
  } // Get interfaces


  if (type instanceof graphql_1.GraphQLObjectType) {
    obj.interfaces = type.getInterfaces();
  } // Get args


  obj.args = field.args ? field.args : []; // Get implementations

  if (isVarType && type instanceof graphql_1.GraphQLInterfaceType) {
    obj.implementations = schema.getPossibleTypes(type);
  }

  return obj;
}

exports.serialize = serialize; // Return element that match index on object

function getElement(obj, index) {
  var i = 0;

  if (obj.interfaces[index + i]) {
    return obj.interfaces[index + i];
  }

  i += obj.interfaces.length;

  if (obj.fields[index - i]) {
    return obj.fields[index - i];
  }

  i += obj.fields.length;

  if (obj.args[index - i]) {
    return obj.args[index - i];
  }

  i += obj.args.length;

  if (obj.implementations[index - i]) {
    return obj.implementations[index - i];
  }
}

exports.getElement = getElement;

function getElementIndex(schema, main, element) {
  var obj = serialize(schema, main);
  var interfaceIndex = obj.interfaces.indexOf(element);

  if (interfaceIndex > -1) {
    return interfaceIndex;
  }

  var fieldsIndex = obj.fields.indexOf(element);

  if (fieldsIndex > -1) {
    return obj.interfaces.length + fieldsIndex;
  }

  var argsIndex = obj.args.indexOf(element);

  if (argsIndex > -1) {
    return obj.interfaces.length + obj.fields.length + argsIndex;
  }

  var implementationIndex = obj.implementations.indexOf(element);

  if (implementationIndex > -1) {
    return obj.interfaces.length + obj.fields.length + obj.args.length + implementationIndex;
  }

  return 0;
}

exports.getElementIndex = getElementIndex;