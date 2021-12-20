"use strict";
var ipcCsvRenderer = require('electron').ipcRenderer;
var formCsv = document.querySelector('.parser-form');
var fileCsvField = formCsv.querySelector('.target-file-name-field');
fileCsvField.value = ipcCsvRenderer.sendSync('target_file_name');
var csvParams = ipcCsvRenderer.sendSync('get_csv_params');
var headRowsField = formCsv.querySelector('.head-rows-field');
headRowsField.value = csvParams.head_rows;
var firstColumnName = formCsv.querySelector('.first-column-name-field');
firstColumnName.value = csvParams.first_column_name;
var endRowField = formCsv.querySelector('.end-row-field');
switch (csvParams.end_row) {
    case '\n':
        endRowField.value = '\\n';
        break;
    case '\r':
        endRowField.value = '\\r';
        break;
    default:
        endRowField.value = csvParams.end_row;
        break;
}
var delemiter = formCsv.querySelector('.delemiter-field');
delemiter.value = csvParams.delemiter;
var rows = formCsv.querySelector('.rows-field');
rows.value = csvParams.rows;
var columns = formCsv.querySelector('.columns-field');
columns.value = csvParams.columns;
var setCsvParams = function () {
    csvParams.head_rows = headRowsField.value;
    csvParams.first_column_name = firstColumnName.value;
    switch (endRowField.value) {
        case '\\n':
            csvParams.end_row = '\n';
            break;
        case '\\r':
            csvParams.end_row = '\r';
            break;
        default:
            csvParams.end_row = endRowField.value;
            break;
    }
    csvParams.delemiter = delemiter.value;
    csvParams.rows = rows.value;
    csvParams.columns = columns.value;
    ipcCsvRenderer.sendSync('set_csv_params', csvParams);
};
formCsv.addEventListener('submit', function (event) {
    event.preventDefault();
    setCsvParams();
});
//# sourceMappingURL=parserCSV.js.map