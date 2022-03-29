"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCSVFileFromLog = void 0;
var fs = require('fs');
var dialog = require('electron').dialog;
var makeHeaderTable_1 = require("../../make_csv/make_header_table/makeHeaderTable");
var makeBodyTable_1 = require("../../make_csv/make_body_table/makeBodyTable");
var createFileName = function () {
    var current = new Date();
    var datePart = (new Date().toString()).split(/\.|\s|:/);
    var fileName = '';
    fileName = datePart[3] + "-" + datePart[1] + "-" + datePart[2] + "-" + datePart[4] + "-" + datePart[5] + ".csv";
    return fileName;
};
function makeCSVFileFromLog(logFile, variablesListFile, csvFileSavePath, logParams) {
    try {
        var sData_1 = '';
        var sResult = '';
        var fileName = createFileName();
        var savePath = csvFileSavePath;
        var file = savePath + fileName;
        var options = {
            title: "C\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430 " + fileName,
            defaultPath: "" + file,
            filters: [
                { name: 'CSV', extensions: ['csv'] },
            ]
        };
        sResult += 'Создание шапки файла\n';
        sData_1 += (0, makeHeaderTable_1.makeHeaderTable)(variablesListFile, logParams.delemiter);
        sResult += 'Создание тела файла\n';
        sData_1 += (0, makeBodyTable_1.makeBodyTable)(logFile, variablesListFile, logParams.delemiter);
        dialog.showSaveDialog(null, options).then(function (result) {
            if (result.filePath && !result.canceled) {
                fs.writeFile(result.filePath, sData_1, function (error) {
                    if (error) {
                        return error;
                    }
                });
                dialog.showMessageBoxSync(null, {
                    type: 'info',
                    buttons: ['Ok'],
                    title: 'Создание csv файла',
                    message: "\u0424\u0430\u0439\u043B " + result.filePath + " \u0441\u043E\u0437\u0434\u0430\u043D."
                });
            }
        }).catch(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args;
        });
        return '';
    }
    catch (error) {
        return error;
    }
}
exports.makeCSVFileFromLog = makeCSVFileFromLog;
//# sourceMappingURL=makeCSVFileFromLog.js.map