"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvGetColumns = void 0;
var ipcCsvGCRenderer = require('electron').ipcRenderer;
var csvColumnCounting_1 = require("../csv_column_counting/csvColumnCounting");
var csvGetStringCell_1 = require("../csv_get_string_cell/csvGetStringCell");
var csvGetColumns = function (dataFromFile) {
    var columnsArray = [];
    var columnArray = [];
    var delemiterCount = 0;
    var rowCount = 0;
    try {
        var csvParams_1 = ipcCsvGCRenderer.sendSync('get_csv_params');
        var columnCount = Number((0, csvColumnCounting_1.csvColumnСounting)(dataFromFile));
        for (var i = 0; i < columnCount; i++) {
            for (var j = 0; j < dataFromFile.length; j++) {
                if (dataFromFile[j] == csvParams_1.delemiter) {
                    delemiterCount = delemiterCount + 1;
                }
                if (dataFromFile[j] == csvParams_1.end_row) {
                    rowCount = rowCount + 1;
                }
                if ((j == 0 && i == 0) ||
                    (i == 0 &&
                        dataFromFile[j - 1] == csvParams_1.delemiter &&
                        delemiterCount == columnCount * (rowCount + 1) + i)) {
                    var cell = (0, csvGetStringCell_1.csvGetStringCell)(dataFromFile, j);
                    columnArray.push(cell);
                }
                if (delemiterCount == rowCount * columnCount + i) {
                    if (dataFromFile[j - 1] == csvParams_1.delemiter) {
                        var cell = (0, csvGetStringCell_1.csvGetStringCell)(dataFromFile, j);
                        if (cell == undefined) {
                            break;
                        }
                        columnArray.push(cell);
                    }
                }
            }
            columnsArray.push(columnArray);
            columnArray = [];
            delemiterCount = 0;
            rowCount = 0;
        }
        return columnsArray;
    }
    catch (error) {
        console.log("csvGetColumns(): " + error);
        return columnsArray;
    }
};
exports.csvGetColumns = csvGetColumns;
//# sourceMappingURL=csvGetColumns.js.map