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
exports.getCurrentLocale = void 0;
var constants_1 = require("../../constants");
var fs = require('fs');
var alertService_1 = require("../../services/alert_service/alertService");
function getCurrentLocale() {
    var swOp = __assign(__assign({}, alertService_1.swalOptions), { showConfirmButton: true });
    try {
        var current_locale = global.app_config.current_locale;
        if (current_locale === undefined) {
            swOp.title = "getCurrentLocale()";
            swOp.text = "Global app_config not found!";
            alertService_1.Alert.fireToast(swOp);
            return constants_1.DEFAULT_LOCALE;
        }
        return current_locale;
    }
    catch (error) {
        swOp.title = "getCurrentLocale()";
        swOp.text = "" + error;
        alertService_1.Alert.fireToast(swOp);
        return constants_1.DEFAULT_LOCALE;
    }
}
exports.getCurrentLocale = getCurrentLocale;
//# sourceMappingURL=getCurrentLocale.js.map