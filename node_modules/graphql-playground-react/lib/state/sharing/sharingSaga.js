"use strict";

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var effects_1 = require("redux-saga/effects");

var selectors_1 = require("../sessions/selectors");

var actions_1 = require("./actions");

var cuid = require("cuid");

var selectors_2 = require("./selectors");

var immutable_1 = require("immutable");

var utils_1 = require("../../utils");

function share() {
  var state, endpoint, res, shareUrl;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , makeSharingState()];

      case 1:
        state = _a.sent();
        return [4
        /*yield*/
        , effects_1.select(selectors_1.getEndpoint)];

      case 2:
        endpoint = _a.sent();
        return [4
        /*yield*/
        , fetch('https://api.graphqlbin.com/', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: "\n        mutation ($session: String! $endpoint: String!) {\n          addSession(session: $session endpoint: $endpoint) {\n            id\n          }\n        }\n      ",
            variables: {
              session: JSON.stringify(state),
              endpoint: endpoint
            }
          })
        }).then(function (data) {
          return data.json();
        })];

      case 3:
        res = _a.sent();
        shareUrl = "https://graphqlbin.com/v2/" + res.data.addSession.id;
        return [4
        /*yield*/
        , effects_1.put(actions_1.setShareUrl(shareUrl))];

      case 4:
        _a.sent();

        return [2
        /*return*/
        ];
    }
  });
}

function makeSharingState() {
  var state, sharing, id, selectedSessionId;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4
        /*yield*/
        , effects_1.select()];

      case 1:
        state = _a.sent();
        return [4
        /*yield*/
        , effects_1.select(selectors_2.getSharingState)];

      case 2:
        sharing = _a.sent();
        id = cuid();
        state = state.update('workspaces', function (w) {
          return w.filter(function (workspace, key) {
            return key === state.selectedWorkspace;
          });
        }).set('selectedWorkspace', id + "~" + state.selectedWorkspace).update('workspaces', function (w) {
          return w.mapKeys(function (k) {
            return id + "~" + k;
          });
        });
        selectedSessionId = state.workspaces.get(state.selectedWorkspace).sessions.selectedSessionId;

        if (!sharing.allTabs) {
          state = state.updateIn(['workspaces', state.selectedWorkspace, 'sessions', 'sessions'], function (sessions) {
            return sessions.filter(function (value, key) {
              return key === selectedSessionId;
            });
          }).setIn(['workspaces', state.selectedWorkspace, 'sessions', 'sessionCount'], 1);
        }

        if (!sharing.headers) {
          state = state.updateIn(['workspaces', state.selectedWorkspace, 'sessions', 'sessions'], function (sessions) {
            return sessions.map(function (session) {
              return session.set('headers', '');
            });
          });
        }

        if (!sharing.history) {
          state = state.setIn(['workspaces', state.selectedWorkspace, 'history'], immutable_1.Map());
        }

        return [2
        /*return*/
        , state];
    }
  });
}

exports.sharingSagas = [effects_1.takeEvery('SHARE', utils_1.safely(share))];