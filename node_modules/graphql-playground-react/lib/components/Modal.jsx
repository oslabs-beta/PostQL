"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Modal = require("react-modal");
var constants_1 = require("../constants");
var ModalComponent = function (_a) {
    var isOpen = _a.isOpen, onRequestClose = _a.onRequestClose, contentLabel = _a.contentLabel, children = _a.children;
    return (<Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel={contentLabel} style={constants_1.modalStyle} ariaHideApp={false}>
      {children}
    </Modal>);
};
exports.default = ModalComponent;
//# sourceMappingURL=Modal.jsx.map