"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appInfo = void 0;
var i18nService_1 = require("../../services/i18n_service/i18nService");
var constants_1 = require("../../constants/constants");
function appInfo(_global) {
    var appInfo = "";
    try {
        appInfo = _global.app_config.target_file_name + " - " + i18nService_1.I18n.t(_global.app_config.parser) + " - " + i18nService_1.I18n.t(_global.app_config.sorting) + " - " + constants_1.APP_NAME;
    }
    catch (error) {
        console.log("appInfo(): " + error);
    }
    return appInfo;
}
exports.appInfo = appInfo;
//# sourceMappingURL=appInfo.js.map