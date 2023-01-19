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
exports.RestartAppService = void 0;
var i18nService_1 = require("../i18n_service/i18nService");
var alertService_1 = require("../alert_service/alertService");
var RestartAppService = (function () {
    function RestartAppService() {
    }
    RestartAppService.restart = function (app, mainWindow) {
        var swOp = __assign(__assign({}, alertService_1.swalOptions), { showConfirmButton: true });
        try {
            swOp.title = "".concat(i18nService_1.I18n.t('required_restart_app'));
            swOp.text = "";
            alertService_1.Alert.fireToast(swOp);
        }
        catch (error) {
            swOp.title = "RestartAppService()";
            swOp.text = "".concat(error);
            alertService_1.Alert.fireToast(swOp);
        }
    };
    return RestartAppService;
}());
exports.RestartAppService = RestartAppService;
//# sourceMappingURL=restartAppService.js.map