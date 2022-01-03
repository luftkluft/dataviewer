"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvColumnCounting = void 0;
var ipcCsvCCRenderer = require('electron').ipcRenderer;
var csvColumnCounting = function (dataFromFile) {
    try {
        var csvParams_1 = ipcCsvCCRenderer.sendSync('get_csv_params');
        if ((csvParams_1.columns = '0')) {
            var delemiterCount = 0;
            for (var i = 0; i < dataFromFile.length; i++) {
                if (dataFromFile[i] == csvParams_1.delemiter) {
                    delemiterCount = delemiterCount + 1;
                }
                if (dataFromFile[i] == csvParams_1.end_row) {
                    return delemiterCount;
                }
            }
        }
        else {
            return Number(csvParams_1.columns);
        }
    }
    catch (error) {
        console.log("csvColumnCounting(): " + error);
        return 0;
    }
};
exports.csvColumnCounting = csvColumnCounting;
//# sourceMappingURL=csvColumnCounting.js.map