"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAppConfigFromFile = void 0;
var constants_1 = require("../../constants");
var fs = require('fs');
var appRoot = require('app-root-path');
require('dotenv').config();
var alertService_1 = require("../../services/alert_service/alertService");
function initAppConfigFromFile() {
    var swOp = __assign(__assign({}, alertService_1.swalOptions), { showConfirmButton: true });
    try {
        var data = fs.readFileSync(appRoot + constants_1.PATH_TO_APP_CONFIG + constants_1.APP_CONFIG_FILE_NAME, 'utf8');
        var app_config_1 = JSON.parse(data);
        if (app_config_1 === undefined) {
            swOp.title = "initStorageFromFile()";
            swOp.text = "\u0421onfig app_config not found!";
            alertService_1.Alert.fireToast(swOp);
        }
        else {
            global.app_config = app_config_1;
            if (global.app_config.app_mode === 'production') {
                process.env.NODE_ENV = 'production';
            }
            else {
                process.env.NODE_ENV = 'development';
            }
        }
    }
    catch (error) {
        swOp.title = "initStorageFromFile()";
        swOp.text = "" + error;
        alertService_1.Alert.fireToast(swOp);
    }
}
exports.initAppConfigFromFile = initAppConfigFromFile;
//# sourceMappingURL=initAppConfigFromFile.js.map