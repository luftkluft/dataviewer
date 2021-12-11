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
exports.changeAppMode = exports.codeGithub = exports.about = exports.setEnLanguage = exports.setRusLanguage = exports.manualSorting = exports.noSorting = exports.csvParser = exports.fileExit = exports.fileOpen = void 0;
var constants_1 = require("../../../constants/constants");
var setCurrentLocale_1 = require("../../../lib/set_current_locale/setCurrentLocale");
var i18nService_1 = require("../../../services/i18n_service/i18nService");
var Alert = require('electron-alert');
var _a = require('electron'), app = _a.app, shell = _a.shell;
var main_1 = require("../../../main/main");
var createChildWindow_1 = require("../../../lib/create_child_window/createChildWindow");
var swalOptions = {
    position: 'top-end',
    title: 'Title',
    text: 'Text',
    icon: 'success',
    showConfirmButton: true,
    timer: 10000,
};
function fileOpen() {
    swalOptions.title = "fileOpen()";
    swalOptions.text = "Click";
    Alert.fireToast(swalOptions);
}
exports.fileOpen = fileOpen;
function fileExit() {
    app.emit('app_exit');
}
exports.fileExit = fileExit;
function csvParser() {
    (0, createChildWindow_1.createChildWindow)(main_1.mainWindow, constants_1.PARSER_CSV_EJS_PATH, i18nService_1.I18n.t('parser_csv'));
}
exports.csvParser = csvParser;
function noSorting() {
    swalOptions.title = "noSorting()";
    swalOptions.text = "Click";
    Alert.fireToast(swalOptions);
}
exports.noSorting = noSorting;
function manualSorting() {
    (0, createChildWindow_1.createChildWindow)(main_1.mainWindow, constants_1.SORTING_MANUAL_EJS_PATH, i18nService_1.I18n.t('sorting_manual'));
}
exports.manualSorting = manualSorting;
function setRusLanguage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, setCurrentLocale_1.setCurrentLocale)(constants_1.RU_LOCALE)];
                case 1:
                    _a.sent();
                    return [4, app.emit('update_app')];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.setRusLanguage = setRusLanguage;
function setEnLanguage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, setCurrentLocale_1.setCurrentLocale)(constants_1.EN_LOCALE)];
                case 1:
                    _a.sent();
                    return [4, app.emit('update_app')];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.setEnLanguage = setEnLanguage;
function about() {
    swalOptions.title = "about()";
    swalOptions.text = "Click";
    Alert.fireToast(swalOptions);
}
exports.about = about;
function codeGithub() {
    shell.openExternal(constants_1.APP_GITHUB);
}
exports.codeGithub = codeGithub;
function changeAppMode() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(process.env.NODE_ENV === 'development')) return [3, 2];
                    _a = process.env;
                    return [4, 'production'];
                case 1:
                    _a.NODE_ENV = _c.sent();
                    return [3, 4];
                case 2:
                    _b = process.env;
                    return [4, 'development'];
                case 3:
                    _b.NODE_ENV = _c.sent();
                    _c.label = 4;
                case 4: return [4, app.emit('change_app_mode')];
                case 5:
                    _c.sent();
                    return [2];
            }
        });
    });
}
exports.changeAppMode = changeAppMode;
//# sourceMappingURL=menuFunctions.js.map