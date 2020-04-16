"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var ProjectsSideNavItem_1 = require("./ProjectsSideNavItem");

var Icons_1 = require("./Icons");

var index_1 = require("../styled/index");

var util_1 = require("./util");

var reselect_1 = require("reselect");

var react_redux_1 = require("react-redux");

var reducers_1 = require("../state/workspace/reducers");

var getWorkspaceId_1 = require("./Playground/util/getWorkspaceId");

var actions_1 = require("../state/sessions/actions");

var ProjectsSideNav =
/** @class */
function (_super) {
  __extends(ProjectsSideNav, _super);

  function ProjectsSideNav() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ProjectsSideNav.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        config = _a.config,
        folderName = _a.folderName,
        onNewWorkspace = _a.onNewWorkspace,
        isElectron = _a.isElectron;
    var endpoints = config.extensions && config.extensions.endpoints;
    var projects = config.projects;
    return /*#__PURE__*/React.createElement(SideNav, null, /*#__PURE__*/React.createElement(List, {
      isElectron: isElectron
    }, /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(Title, null, folderName), /*#__PURE__*/React.createElement(Icons_1.SettingsIcon, {
      width: 18,
      height: 18,
      onClick: this.props.openConfigTab,
      title: "Project settings"
    })), endpoints && this.renderEndpoints(endpoints), projects && Object.keys(projects).map(function (projectName) {
      var project = projects[projectName];
      var projectEndpoints = project.extensions && project.extensions.endpoints;

      if (!projectEndpoints) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Project, {
        key: projectName
      }, /*#__PURE__*/React.createElement(ProjectName, null, projectName), _this.renderEndpoints(projectEndpoints, projectName));
    })), isElectron && /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(WorkspaceButton, {
      onClick: onNewWorkspace
    }, /*#__PURE__*/React.createElement(Icons_1.AddFullIcon, {
      width: 14,
      height: 14,
      strokeWidth: 6
    }), "NEW WORKSPACE")));
  };

  ProjectsSideNav.prototype.renderEndpoints = function (endpoints, projectName) {
    var _this = this;

    return Object.keys(endpoints).map(function (env) {
      var endpoint = util_1.getEndpointFromEndpointConfig(endpoints[env]).endpoint;
      var count = _this.props.counts.get(getWorkspaceId_1.getWorkspaceId({
        endpoint: endpoint,
        configPath: _this.props.configPath,
        workspaceName: projectName
      })) || 1;
      return /*#__PURE__*/React.createElement(ProjectsSideNavItem_1["default"], {
        key: env,
        env: env,
        onSelectEnv: _this.props.onSelectEnv,
        activeEnv: _this.props.activeEnv,
        count: count,
        deep: Boolean(projectName),
        projectName: projectName,
        activeProjectName: _this.props.activeProjectName
      });
    });
  };

  return ProjectsSideNav;
}(React.Component);

var mapStateToProps = reselect_1.createStructuredSelector({
  counts: reducers_1.getSessionCounts
});
exports["default"] = react_redux_1.connect(mapStateToProps, {
  openConfigTab: actions_1.openConfigTab
})(ProjectsSideNav);
var SideNav = index_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: ", ";\n  flex-basis: 222px;\n  color: ", ";\n  border-right: 6px solid ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: ", ";\n  flex-basis: 222px;\n  color: ", ";\n  border-right: 6px solid ", ";\n"])), function (p) {
  return p.theme.editorColours.sidebar;
}, function (p) {
  return p.theme.editorColours.text;
}, function (p) {
  return p.theme.editorColours.background;
});
var List = index_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  -webkit-app-region: drag;\n  padding-top: ", "px;\n  display: flex;\n  flex-direction: column;\n  background: ", ";\n"], ["\n  -webkit-app-region: drag;\n  padding-top: ", "px;\n  display: flex;\n  flex-direction: column;\n  background: ", ";\n"])), function (p) {
  return p.isElectron ? 48 : 20;
}, function (p) {
  return p.theme.editorColours.sidebarTop;
});
var Title = index_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 600;\n  color: ", ";\n  word-break: break-word;\n"], ["\n  font-size: 16px;\n  font-weight: 600;\n  color: ", ";\n  word-break: break-word;\n"])), function (p) {
  return p.theme.editorColours.text;
});
var TitleRow = index_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 0 15px 20px 15px;\n  svg {\n    -webkit-app-region: no-drag;\n    min-width: 18px;\n    min-height: 18px;\n    cursor: pointer;\n    fill: ", ";\n    transition: 0.1s linear fill;\n  }\n  &:hover {\n    svg {\n      fill: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 0 15px 20px 15px;\n  svg {\n    -webkit-app-region: no-drag;\n    min-width: 18px;\n    min-height: 18px;\n    cursor: pointer;\n    fill: ", ";\n    transition: 0.1s linear fill;\n  }\n  &:hover {\n    svg {\n      fill: ", ";\n    }\n  }\n"])), function (p) {
  return p.theme.editorColours.icon;
}, function (p) {
  return p.theme.editorColours.iconHover;
});
var Project = index_1.styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  & + & {\n    margin-top: 12px;\n  }\n  &:last-child {\n    margin-bottom: 32px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  & + & {\n    margin-top: 12px;\n  }\n  &:last-child {\n    margin-bottom: 32px;\n  }\n"])));
var ProjectName = index_1.styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: 0.53px;\n  margin: 0 10px 6px 30px;\n  word-break: break-word;\n"], ["\n  font-size: 14px;\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: 0.53px;\n  margin: 0 10px 6px 30px;\n  word-break: break-word;\n"])), function (p) {
  return p.theme.editorColours.text;
});
var Footer = index_1.styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin: 32px 0;\n  background: ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  margin: 32px 0;\n  background: ", ";\n"])), function (p) {
  return p.theme.editorColours.sidebarBottom;
});
var WorkspaceButton = index_1.styled.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.53px;\n  color: ", ";\n  background-color: ", ";\n  transition: 0.1s linear all;\n  &:hover {\n    background-color: ", ";\n  }\n  i {\n    margin-right: 6px;\n  }\n  svg {\n    min-width: 18px;\n    min-height: 18px;\n    stroke: ", ";\n  }\n"], ["\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.53px;\n  color: ", ";\n  background-color: ", ";\n  transition: 0.1s linear all;\n  &:hover {\n    background-color: ", ";\n  }\n  i {\n    margin-right: 6px;\n  }\n  svg {\n    min-width: 18px;\n    min-height: 18px;\n    stroke: ", ";\n  }\n"])), function (p) {
  return p.theme.editorColours.buttonWorkspaceText;
}, function (p) {
  return p.theme.editorColours.buttonWorkspace;
}, function (p) {
  return p.theme.editorColours.buttonWorkspaceHover;
}, function (p) {
  return p.theme.editorColours.buttonWorkspaceText;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;