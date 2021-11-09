"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var i18nService_1 = require("./services/i18nService");
var initService_1 = require("./services/initService");
var appExitService_1 = require("./services/appExitService");
var windowAllClosedService_1 = require("./services/windowAllClosedService");
var menuTemplate_1 = require("./components/menu/menuTemplate");
var restartAppService_1 = require("./services/restartAppService");
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow, Menu = _a.Menu;
var appRoot = require('app-root-path');
var electronEjs = require('electron-ejs');
var ejs = new electronEjs({
    name: 'Luft Kluft!',
    I18n: i18nService_1.I18n,
    appName: constants_1.APP_NAME,
    shortcutIcon: appRoot + constants_1.MAIN_ICON_PATH + constants_1.MAIN_BIG_ICON_NAME,
});
var mainWindow;
var mainMenu;
function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: constants_1.APP_NAME,
        icon: appRoot + constants_1.MAIN_ICON_PATH + constants_1.MAIN_BIG_ICON_NAME,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    mainWindow.loadFile(appRoot + constants_1.APP_ENTER_INDEX_EJS_PATH);
    if (process.env.NODE_ENV !== 'production') {
        mainWindow.webContents.openDevTools();
    }
}
app.once('ready', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, initService_1.InitService.init()];
            case 1:
                _a.sent();
                return [4, createMainWindow()];
            case 2:
                _a.sent();
                return [4, Menu.buildFromTemplate((0, menuTemplate_1.menuTemplate)())];
            case 3:
                mainMenu = _a.sent();
                return [4, Menu.setApplicationMenu(mainMenu)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
app.on('update_app', function () {
    mainWindow.reload();
    mainMenu = Menu.buildFromTemplate((0, menuTemplate_1.menuTemplate)());
    Menu.setApplicationMenu(mainMenu);
});
app.on('change_app_mode', function () {
    restartAppService_1.RestartAppService.restart(app, mainWindow);
});
app.on('create_main_window', function () {
    createMainWindow();
});
app.on('window-all-closed', function () {
    windowAllClosedService_1.windowAllClosedService.ClosedAll(app, mainWindow);
});
app.on('app_exit', function () {
    appExitService_1.AppExitService.appExit(app, mainWindow);
});
//# sourceMappingURL=main.js.map