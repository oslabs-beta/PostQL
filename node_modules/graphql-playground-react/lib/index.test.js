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

var React = require("react");

var enzyme_1 = require("enzyme");

var MiddlewareApp_1 = require("./components/MiddlewareApp");

test('test MiddleWareApp without tabs', function () {
  var wrapper = enzyme_1.render( /*#__PURE__*/React.createElement(MiddlewareApp_1["default"], {
    setTitle: true,
    showNewWorkspace: false
  }));
  expect(wrapper).toMatchSnapshot();
});
test('test MiddleWareApp with tabs', function () {
  var wrapper = enzyme_1.render( /*#__PURE__*/React.createElement(MiddlewareApp_1["default"], {
    setTitle: true,
    showNewWorkspace: false,
    tabs: [{
      name: 'Tab 1',
      query: '{ users { id } }',
      endpoint: 'https://eu1.prisma.sh/public-asdf/session65/dev',
      responses: ['{}']
    }, {
      name: 'Tab 2',
      query: '{ users { id } }',
      endpoint: 'https://eu1.prisma.sh/public-asdf/session65/dev'
    }]
  }));
  expect(wrapper).toMatchSnapshot();
});
test('test MiddleWareApp with one tab and click execute', function () {
  var wrapper = enzyme_1.mount( /*#__PURE__*/React.createElement(MiddlewareApp_1["default"], {
    setTitle: true,
    showNewWorkspace: false,
    tabs: [{
      name: 'Tab 1',
      query: '{ users { id } }',
      endpoint: 'http://localhost:4000'
    }]
  }));
  var executeButtons = wrapper.find('[title="Execute Query (Ctrl-Enter)"]');

  var executeButtonElement = __assign(__assign({}, executeButtons.get(0)), {
    props: {
      onClick: jest.fn()
    }
  });

  var executeButton = wrapper.wrap(executeButtonElement);
  expect(executeButton.length).toBe(1);
});
test('test MiddleWareApp passed default headers', function () {
  var wrapper = enzyme_1.render( /*#__PURE__*/React.createElement(MiddlewareApp_1["default"], {
    setTitle: true,
    showNewWorkspace: false,
    headers: {
      test: 'test'
    }
  }));
  expect(wrapper).toMatchSnapshot();
});