"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swalOptions = exports.alert = exports.Alert = void 0;
exports.Alert = require('electron-alert');
exports.alert = new exports.Alert();
exports.swalOptions = {
    position: 'top-end',
    title: 'Title',
    text: 'Text',
    icon: 'warning',
    timer: 10000,
};
//# sourceMappingURL=alertService.js.map