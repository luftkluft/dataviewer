"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeService = void 0;
var makeCSVFileFromLog_1 = require("../../lib/make_func/make_csv/make_csv_file_from_log/makeCSVFileFromLog");
var logToHash_1 = require("../../lib/make_func/make_hash/log_to_hash/logToHash");
var MakeService = (function () {
    function MakeService() {
    }
    MakeService.makeCSVfromLog = function (logFile, variablesListFile, csvFileSavePath, logParams) {
        return (0, makeCSVFileFromLog_1.makeCSVFileFromLog)(logFile, variablesListFile, csvFileSavePath, logParams);
    };
    MakeService.logToHash = function (logFile, variablesListFile, csvFileSavePath, logParams, deep) {
        return (0, logToHash_1.logToHash)(logFile, variablesListFile, csvFileSavePath, logParams, deep);
    };
    return MakeService;
}());
exports.MakeService = MakeService;
//# sourceMappingURL=makeService.js.map