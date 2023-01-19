"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testing = void 0;
var dialog = require('electron').dialog;
var logToHash_1 = require("../../make_func/make_hash/log_to_hash/logToHash");
var getErrorMainLine_1 = require("../../diagnosis_func/get_error_main_line/getErrorMainLine");
var getMaxMatchLine_1 = require("../../diagnosis_func/get_max_match_line/getMaxMatchLine");
var hint_1 = require("../../diagnosis_func/hint/hint");
var findReadySolution_1 = require("../../make_func/find_ready_solution/findReadySolution");
var saveSolution_1 = require("../../make_func/save_solution/saveSolution");
var rws_1 = require("../../../services/read_write_service/rws");
var prompt = require('electron-prompt');
function testing() {
    var sResult = '';
    var deep = 0;
    var minDeep = 1;
    var maxDeep = 6;
    deep = Number(global.app_config.deep_test);
    var hashDataLog = '';
    var logFile = global.app_config.last_opened_pattern_file;
    var errorFile = global.app_config.last_opened_error_file;
    var variablesListFile = global.app_config.last_opened_variable_list_file;
    var csvFileSavePath = global.app_config.last_csv_file_path;
    var logParams = global.app_config.log_params;
    var errorMainLine = '';
    var maxMatchLine = '';
    var sHint = '';
    try {
        sResult = '===== Запуск диагностики =====\n';
        try {
            if (deep >= minDeep || deep <= maxDeep) {
                sResult += new Date().toDateString() + '\n';
                sResult += "\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0444\u0430\u0439\u043B: ".concat(logFile, "\n");
                sResult += "\u0424\u0430\u0439\u043B \u043E\u0448\u0438\u0431\u043E\u043A: ".concat(errorFile, "\n");
                sResult += "\u0424\u0430\u0439\u043B \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445: ".concat(variablesListFile, "\n");
            }
            else {
                sResult = "\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0435 \u043E\u0442 ".concat(minDeep, " \u0434\u043E ").concat(maxDeep, ", \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435!");
                return sResult;
            }
        }
        catch (error) {
            return error;
        }
        sResult += "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0433\u043B\u0443\u0431\u0438\u043D\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0430: ".concat(deep, "\n");
        hashDataLog = (0, logToHash_1.logToHash)(logFile, variablesListFile, csvFileSavePath, logParams, deep);
        if (logToHash_1.logToHash.length) {
            sResult += "\u0425\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u0430 \u0434\u0430\u043D\u044B\u0445 - ok\n";
        }
        else {
            return "\u041E\u0448\u0438\u0431\u043A\u0430 \u0445\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043B\u043E\u0433\u0430 \u0434\u0430\u043D\u044B\u0445!";
        }
        errorMainLine = (0, getErrorMainLine_1.getErrorMainLine)(errorFile, variablesListFile, logParams.delemiter, deep);
        if (errorMainLine.length) {
            sResult += "\u0425\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u0430 \u043E\u0448\u0438\u0431\u043A\u0438 - ok\n";
        }
        else {
            return "\u041E\u0448\u0438\u0431\u043A\u0430 \u0445\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043B\u043E\u0433\u0430 \u043E\u0448\u0438\u0431\u043A\u0438!";
        }
        maxMatchLine = (0, getMaxMatchLine_1.getMaxMatchLine)(hashDataLog, errorMainLine, logParams.delemiter);
        if (maxMatchLine.length) {
            sResult += "\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 - ok\n";
        }
        else {
            return "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439!";
        }
        sHint = (0, hint_1.hint)(hashDataLog, maxMatchLine, errorMainLine);
        if (sHint.length) {
            sResult += sHint;
            sResult += "\n===== \u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 =====\n";
        }
        else {
            return "\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u0438\u0430\u0433\u043Do\u0441\u0442\u0438\u043A\u0438!";
        }
        var solutionResult = '';
        solutionResult = (0, findReadySolution_1.findReadySolution)(errorMainLine);
        if (solutionResult.length > 0) {
            sResult += "\u0420\u0435\u0448\u0435\u043D\u0438\u0435: ".concat((0, findReadySolution_1.findReadySolution)(rws_1.RWS.readDataLineFromLog(errorMainLine)), "\n");
            sResult += "===============================\n";
        }
        else {
            try {
                var options = {
                    type: 'question',
                    buttons: ['Да', 'Нет'],
                    title: 'Сохранение ошибки в базу даных',
                    message: 'Желаете сохранить даные о неисправности?',
                    detail: sResult,
                };
                var response = dialog.showMessageBoxSync(null, options);
                var sNote_1 = '';
                if (response == 0) {
                    prompt({
                        title: 'Сохранение неисправности в базу даных',
                        label: 'Введите краткое описание неисправности:',
                        value: "".concat(new Date().toDateString(), "..."),
                        inputAttrs: {
                            type: 'text'
                        },
                        type: 'input'
                    })
                        .then(function (r) {
                        if (r === null) {
                        }
                        else {
                            sNote_1 = String(r);
                            (0, saveSolution_1.saveSolution)(rws_1.RWS.readDataLineFromLog(errorMainLine), sNote_1);
                        }
                    })
                        .catch(console.error);
                    sResult += "\u0413\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.\n";
                }
                else {
                    sResult += "\u0413\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.\n";
                    sResult += "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E.\n";
                }
            }
            catch (error) {
                return error;
            }
        }
        return sResult;
    }
    catch (error) {
        return error;
    }
}
exports.testing = testing;
//# sourceMappingURL=testing.js.map