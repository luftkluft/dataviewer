"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvGetStringCell = void 0;
var ipcCsvGSCRenderer = require('electron').ipcRenderer;
var csvGetStringCell = function (dataFromFile, startPosition) {
    if (startPosition === void 0) { startPosition = 0; }
    var result = '';
    try {
        var csvParams_1 = ipcCsvGSCRenderer.sendSync('get_csv_params');
        for (var i = startPosition; i < dataFromFile.length; i++) {
            if (dataFromFile[i] == csvParams_1.end_row ||
                dataFromFile[i] == '\r' ||
                dataFromFile[i] == '\n') {
                continue;
            }
            if (dataFromFile[i] == csvParams_1.delemiter) {
                return result;
            }
            else {
                result = result + dataFromFile[i];
            }
        }
    }
    catch (error) {
        console.log("csvGetStringCell(): " + error);
        return 'error';
    }
};
exports.csvGetStringCell = csvGetStringCell;
//# sourceMappingURL=csvGetStringCell.js.map