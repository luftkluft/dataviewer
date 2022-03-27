"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeService = void 0;
var makeCSVFileFromLog_1 = require("../../lib/make_func/make_csv/make_csv_file_from_log/makeCSVFileFromLog");
var MakeService = (function () {
    function MakeService() {
    }
    MakeService.makeCSVfromLog = function (logFile, variablesListFile, csvFileSavePath, logParams) {
        return (0, makeCSVFileFromLog_1.makeCSVFileFromLog)(logFile, variablesListFile, csvFileSavePath, logParams);
    };
    return MakeService;
}());
exports.MakeService = MakeService;
//# sourceMappingURL=makeService.js.map