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
exports.InitService = void 0;
var fs = require('fs');
var appRoot = require('app-root-path');
var alertService_1 = require("./alertService");
var initAppConfigFromFile_1 = require("../lib/initAppConfigFromFile");
var InitService = (function () {
    function InitService() {
    }
    InitService.init = function (params) {
        if (params === void 0) { params = 'default'; }
        var swOp = __assign(__assign({}, alertService_1.swalOptions), { showConfirmButton: true });
        try {
            switch (params) {
                case 'default':
                    try {
                        (0, initAppConfigFromFile_1.initAppConfigFromFile)();
                    }
                    catch (error) {
                        swOp.title = "init()";
                        swOp.text = "" + error;
                        alertService_1.Alert.fireToast(swOp);
                    }
                    break;
                default: {
                    swOp.title = "init()";
                    swOp.text = "Run as default in Default";
                    swOp.icon = "success";
                    alertService_1.Alert.fireToast(swOp);
                }
            }
        }
        catch (error) {
            swOp.title = "init()";
            swOp.text = "" + error;
            alertService_1.Alert.fireToast(swOp);
        }
    };
    return InitService;
}());
exports.InitService = InitService;
//# sourceMappingURL=initService.js.map