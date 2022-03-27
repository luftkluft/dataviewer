"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCSVFileFromLog = void 0;
var fs = require('fs');
var dialog = require('electron').dialog;
var createFileName = function () {
    var current = new Date();
    var datePart = (new Date().toString()).split(/\.|\s|:/);
    var fileName = '';
    fileName = datePart[3] + "-" + datePart[1] + "-" + datePart[2] + "-" + datePart[4] + "-" + datePart[5] + ".csv";
    return fileName;
};
function makeCSVFileFromLog(logFile, variablesListFile, csvFileSavePath, logParams) {
    try {
        var sData_1 = 'test string';
        var sResult = 'test result';
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
        dialog.showSaveDialog(null, options).then(function (result) {
            if (result.filePath && !result.canceled) {
                fs.writeFile(result.filePath, sData_1, function (error) {
                    if (error) {
                        return error;
                    }
                });
            }
        }).catch(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args;
        });
        return sResult;
    }
    catch (error) {
        return error;
    }
}
exports.makeCSVFileFromLog = makeCSVFileFromLog;
//# sourceMappingURL=makeCSVFileFromLog.js.map