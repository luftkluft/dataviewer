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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.mainWindow = void 0;
var constants_1 = require("../constants/constants");
var i18nService_1 = require("../services/i18n_service/i18nService");
var initService_1 = require("../services/init_service/initService");
var appExitService_1 = require("../services/app_exit_service/appExitService");
var windowAllClosedService_1 = require("../services/window_all_closed_service/windowAllClosedService");
var menuTemplate_1 = require("../components/menu/menu_template/menuTemplate");
var restartAppService_1 = require("../services/restart_app_service/restartAppService");
var closeChildWindows_1 = require("../lib/close_child_windows/closeChildWindows");
var appInfo_1 = require("../lib/app_info/appInfo");
var diagnosisService_1 = require("../services/diagnosis_service/diagnosisService");
var makeService_1 = require("../services/make_service/makeService");
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow, Menu = _a.Menu;
var ipcMain = require('electron').ipcMain;
var appRoot = require('app-root-path');
var dialog = require('electron').dialog;
var _b = require('path'), basename = _b.basename, dirname = _b.dirname;
var electronEjs = require('electron-ejs');
var ejs = new electronEjs({
    name: 'Luft Kluft!',
    I18n: i18nService_1.I18n,
    appName: constants_1.APP_NAME,
    shortcutIcon: appRoot + constants_1.MAIN_ICON_PATH + constants_1.MAIN_BIG_ICON_NAME,
});
var mainMenu;
function createMainWindow() {
    exports.mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: constants_1.APP_NAME,
        icon: appRoot + constants_1.MAIN_ICON_PATH + constants_1.MAIN_BIG_ICON_NAME,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    exports.mainWindow.loadFile(appRoot + constants_1.APP_ENTER_INDEX_EJS_PATH);
    if (process.env.NODE_ENV !== 'production') {
        exports.mainWindow.webContents.openDevTools();
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
                return [4, exports.mainWindow.setTitle((0, appInfo_1.appInfo)(global))];
            case 5:
                _a.sent();
                return [2];
        }
    });
}); });
app.on('update_app', function () {
    (0, closeChildWindows_1.closeChildWindows)(exports.mainWindow);
    exports.mainWindow.reload();
    mainMenu = Menu.buildFromTemplate((0, menuTemplate_1.menuTemplate)());
    Menu.setApplicationMenu(mainMenu);
    exports.mainWindow.setTitle((0, appInfo_1.appInfo)(global));
});
app.on('change_app_mode', function () {
    restartAppService_1.RestartAppService.restart(app, exports.mainWindow);
});
app.on('create_main_window', function () {
    createMainWindow();
});
app.on('window-all-closed', function () {
    windowAllClosedService_1.windowAllClosedService.ClosedAll(app, exports.mainWindow);
});
app.on('app_exit', function () {
    appExitService_1.AppExitService.appExit(app, exports.mainWindow);
});
ipcMain.on('last_opened_file', function (event, arg) {
    var result = global.app_config.last_opened_file;
    event.returnValue = result;
});
ipcMain.on('target_file_name', function (event, arg) {
    var result = global.app_config.target_file_name;
    event.returnValue = result;
});
ipcMain.on('set_file_content', function (event, arg) {
    global.app_config.file_content = arg;
});
ipcMain.on('get_file_content', function (event, arg) {
    var result = global.app_config.file_content;
    event.returnValue = result;
});
ipcMain.on('get_csv_params', function (event, arg) {
    var result = global.app_config.csv_params;
    event.returnValue = result;
});
ipcMain.on('set_csv_params', function (event, arg) {
    global.app_config.csv_params = arg;
    app.emit('update_app');
});
ipcMain.on('get_deep_test', function (event, arg) {
    var result = global.app_config.deep_test;
    event.returnValue = result;
});
ipcMain.on('set_deep_test', function (event, arg) {
    global.app_config.deep_test = arg;
});
ipcMain.on('open-file-dialog', function (event) {
    dialog
        .showOpenDialog({ properties: ['openFile'] })
        .then(function (response) {
        if (!response.canceled) {
            var result = response.filePaths[0];
            global.app_config.target_file_name = basename(result);
            global.app_config.target_file_path = "".concat(dirname(result), "/");
            global.app_config.last_opened_file = result;
            event.returnValue = result;
        }
        else {
            event.returnValue = 'no_file_selected';
        }
    });
});
ipcMain.on('open-log-file-dialog', function (event) {
    dialog
        .showOpenDialog({ properties: ['openFile'] })
        .then(function (response) {
        if (!response.canceled) {
            var result = response.filePaths[0];
            global.app_config.log_file_name = basename(result);
            global.app_config.log_file_path = "".concat(dirname(result), "/");
            global.app_config.last_opened_log_file = result;
            event.returnValue = result;
        }
        else {
            event.returnValue = 'no_file_selected';
        }
    });
});
ipcMain.on('last_opened_log_file', function (event, arg) {
    var result = global.app_config.last_opened_log_file;
    event.returnValue = result;
});
ipcMain.on('open-variable-list-file-dialog', function (event) {
    dialog
        .showOpenDialog({ properties: ['openFile'] })
        .then(function (response) {
        if (!response.canceled) {
            var result = response.filePaths[0];
            global.app_config.variable_list_file_name = basename(result);
            global.app_config.variable_list_file_path = "".concat(dirname(result), "/");
            global.app_config.last_opened_variable_list_file = result;
            event.returnValue = result;
        }
        else {
            event.returnValue = 'no_file_selected';
        }
    });
});
ipcMain.on('last_opened_variable_list_file', function (event, arg) {
    var result = global.app_config.last_opened_variable_list_file;
    event.returnValue = result;
});
ipcMain.on('open-csv-file-path-dialog', function (event) {
    dialog
        .showOpenDialog({ properties: ['openDirectory'] })
        .then(function (response) {
        if (!response.canceled) {
            var csvPath = response.filePaths[0] + "/";
            global.app_config.csv_file_path = csvPath;
            global.app_config.last_csv_file_path = csvPath;
            event.returnValue = csvPath;
        }
        else {
            event.returnValue = 'no_file_selected';
        }
    });
});
ipcMain.on('last_csv_file_path', function (event, arg) {
    var result = global.app_config.last_csv_file_path;
    event.returnValue = result;
});
ipcMain.on('open-pattern-file-dialog', function (event) {
    dialog
        .showOpenDialog({ properties: ['openFile'] })
        .then(function (response) {
        if (!response.canceled) {
            var result = response.filePaths[0];
            global.app_config.pattern_file_name = basename(result);
            global.app_config.pattern_file_path = "".concat(dirname(result), "/");
            global.app_config.last_opened_pattern_file = result;
            event.returnValue = result;
        }
        else {
            event.returnValue = 'no_file_selected';
        }
    });
});
ipcMain.on('last_opened_pattern_file', function (event, arg) {
    var result = global.app_config.last_opened_pattern_file;
    event.returnValue = result;
});
ipcMain.on('open-error-file-dialog', function (event) {
    dialog
        .showOpenDialog({ properties: ['openFile'] })
        .then(function (response) {
        if (!response.canceled) {
            var result = response.filePaths[0];
            global.app_config.error_file_name = basename(result);
            global.app_config.error_file_path = "".concat(dirname(result), "/");
            global.app_config.last_opened_error_file = result;
            event.returnValue = result;
        }
        else {
            event.returnValue = 'no_file_selected';
        }
    });
});
ipcMain.on('last_opened_error_file', function (event, arg) {
    var result = global.app_config.last_opened_error_file;
    event.returnValue = result;
});
ipcMain.on('get_log_params', function (event, arg) {
    var result = global.app_config.log_params;
    event.returnValue = result;
});
ipcMain.on('set_log_params', function (event, arg) {
    global.app_config.log_params = arg;
});
ipcMain.on('open-file', function (event, arg) {
    exports.mainWindow.setTitle((0, appInfo_1.appInfo)(global));
});
ipcMain.on('update_app', function (event, arg) {
    app.emit('update_app');
});
ipcMain.on('i18n', function (event, arg) {
    event.returnValue = i18nService_1.I18n.t(arg);
});
ipcMain.on('get_parser_status', function (event, arg) {
    var result = global.app_config.parser;
    event.returnValue = result;
});
ipcMain.on('set_sorted_data', function (event, arg) {
    global.app_config.sorted_data = arg;
});
ipcMain.on('get_sorted_data', function (event, arg) {
    var result = global.app_config.sorted_data;
    event.returnValue = result;
});
ipcMain.on('set_sort_params_view_array', function (event, arg) {
    global.app_config.sort_params.view_array = arg;
});
ipcMain.on('get_sort_params_view_array', function (event, arg) {
    var result = global.app_config.sort_params.view_array;
    event.returnValue = result;
});
ipcMain.on('set_sorting', function (event, arg) {
    global.app_config.sorting = arg;
});
ipcMain.on('get_sorting', function (event, arg) {
    var result = global.app_config.sorting;
    event.returnValue = result;
});
ipcMain.on('run_test', function (event, arg) {
    var result = diagnosisService_1.DiagnosisService.testing();
    event.returnValue = result;
});
ipcMain.on('make_csv_from_log', function (event, arg) {
    var logFile = global.app_config.last_opened_log_file;
    var variablesListFile = global.app_config.last_opened_variable_list_file;
    var csvFileSavePath = global.app_config.last_csv_file_path;
    var logParams = global.app_config.log_params;
    var result = makeService_1.MakeService.makeCSVfromLog(logFile, variablesListFile, csvFileSavePath, logParams);
    event.returnValue = result;
});
app.on('app_set_sorting_manual', function () {
    global.app_config.sorting = 'sorting_manual';
    app.emit('update_app');
});
app.on('app_set_no_sorting', function () {
    global.app_config.sorting = 'no_sorting';
    app.emit('update_app');
});
//# sourceMappingURL=main.js.map