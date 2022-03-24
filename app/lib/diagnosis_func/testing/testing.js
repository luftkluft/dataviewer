"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testing = void 0;
var dialog = require('electron').dialog;
function testing() {
    var sResult = '';
    var deep = 0;
    var minDeep = 1;
    var maxDeep = 6;
    deep = Number(global.app_config.deep_test);
    try {
        sResult = '===== Запуск диагностики =====\n';
        try {
            if (deep >= minDeep || deep <= maxDeep) {
            }
            else {
                sResult = "\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0435 \u043E\u0442 " + minDeep + " \u0434\u043E " + maxDeep + ", \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435!";
                return sResult;
            }
        }
        catch (error) {
            return error;
        }
        sResult += "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0433\u043B\u0443\u0431\u0438\u043D\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0430: " + deep + "\n";
        sResult += "===== \u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 =====";
        return sResult;
    }
    catch (error) {
        return error;
    }
}
exports.testing = testing;
//# sourceMappingURL=testing.js.map