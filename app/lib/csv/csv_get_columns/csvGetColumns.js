"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvGetColumns = void 0;
var ipcCsvGCRenderer = require('electron').ipcRenderer;
var csvParams = ipcCsvGCRenderer.sendSync('get_csv_params');
var csvColumnCounting_1 = require("../csv_column_counting/csvColumnCounting");
var csvGetStringCell_1 = require("../csv_get_string_cell/csvGetStringCell");
var doFirstColumn = function (columnsArray) {
    try {
        switch (csvParams.head_rows) {
            case "3":
                columnsArray[0][0] = csvParams.first_column_name;
                columnsArray[0][1] = '';
                columnsArray[0][2] = csvParams.first_column_name;
                var temp = '';
                for (var i = 3; i < columnsArray[0].length - 1; i++) {
                    for (var j = 0; j < columnsArray[0][i].length; j++) {
                        if (columnsArray[0][i][j] == ':') {
                            temp = '';
                            continue;
                        }
                        if (columnsArray[0][i][j] == '.' || columnsArray[0][i][j] == ',') {
                            break;
                        }
                        temp = temp + columnsArray[0][i][j];
                    }
                    columnsArray[0][i] = temp;
                    temp = '';
                }
                return columnsArray;
            default:
                return columnsArray;
        }
    }
    catch (error) {
        console.log("doFirstColumn(): " + error);
    }
};
var csvGetColumns = function (dataFromFile) {
    var columnsArray = [];
    var columnArray = [];
    var delemiterCount = 0;
    var rowCount = 0;
    try {
        var columnCount = Number((0, csvColumnCounting_1.csvColumnCounting)(dataFromFile));
        for (var i = 0; i < columnCount; i++) {
            for (var j = 0; j < dataFromFile.length - 1; j++) {
                if (dataFromFile[j] == csvParams.delemiter) {
                    delemiterCount = delemiterCount + 1;
                }
                if (dataFromFile[j] == csvParams.end_row) {
                    rowCount = rowCount + 1;
                }
                if ((j == 0 && i == 0) ||
                    (i == 0 &&
                        dataFromFile[j - 1] == csvParams.delemiter &&
                        delemiterCount == columnCount * (rowCount + 1) + i)) {
                    var cell = (0, csvGetStringCell_1.csvGetStringCell)(dataFromFile, j);
                    columnArray.push(cell);
                }
                if (delemiterCount == rowCount * columnCount + i) {
                    if (dataFromFile[j - 1] == csvParams.delemiter) {
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
        var result = doFirstColumn(columnsArray);
        return result;
    }
    catch (error) {
        console.log("csvGetColumns(): " + error);
        return columnsArray;
    }
};
exports.csvGetColumns = csvGetColumns;
//# sourceMappingURL=csvGetColumns.js.map