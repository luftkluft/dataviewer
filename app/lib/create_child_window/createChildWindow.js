"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChildWindow = void 0;
var constants_1 = require("../../constants/constants");
var BrowserWindow = require('electron').BrowserWindow;
var appRoot = require('app-root-path');
var createChildWindow = function (parentWindow, ejsPath, windowTitle) {
    var childWindow = new BrowserWindow({
        width: 750,
        height: 550,
        title: windowTitle,
        parent: parentWindow,
        icon: appRoot + constants_1.MAIN_ICON_PATH + constants_1.MAIN_SMAII_ICON_NAME,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    childWindow.setMenu(null);
    childWindow.loadFile(appRoot + ejsPath);
    if (process.env.NODE_ENV !== 'production') {
        childWindow.webContents.openDevTools();
    }
};
exports.createChildWindow = createChildWindow;
//# sourceMappingURL=createChildWindow.js.map