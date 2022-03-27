"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var fs = require('fs');
var ipcLogRenderer = require('electron').ipcRenderer;
var formLog = document.querySelector('.parser-form');
var logFileField = formLog.querySelector('.choose-log-file-field');
logFileField.value = ipcLogRenderer.sendSync('last_opened_log_file');
var vListFileField = formLog.querySelector('.choose-variable-list-file-field');
vListFileField.value = ipcLogRenderer.sendSync('last_opened_variable_list_file');
var csvFilePathField = formLog.querySelector('.csv-file-path-field');
csvFilePathField.value = ipcLogRenderer.sendSync('last_csv_file_path');
var fileStat = function (stat) {
    return "birthtime: " + stat.birthtime + "\nmtime: " + stat.mtime + "\nctime: " + stat.ctime + "\nsize: " + stat.size;
};
var logParams = ipcLogRenderer.sendSync('get_log_params');
var endRowField = formLog.querySelector('.end-row-field');
switch (logParams.end_row) {
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
var delemiter = formLog.querySelector('.delemiter-field');
delemiter.value = logParams.delemiter;
var rows = formLog.querySelector('.rows-field');
rows.value = logParams.rows;
var columns = formLog.querySelector('.columns-field');
columns.value = logParams.columns;
var setLogParams = function () {
    switch (endRowField.value) {
        case '\\n':
            logParams.end_row = '\n';
            break;
        case '\\r':
            logParams.end_row = '\r';
            break;
        default:
            logParams.end_row = endRowField.value;
            break;
    }
    logParams.delemiter = delemiter.value;
    logParams.rows = rows.value;
    logParams.columns = columns.value;
    ipcLogRenderer.send('set_log_params', logParams);
};
var chooseLogFile = function () {
    var path = ipcLogRenderer.sendSync('open-log-file-dialog');
    var memo = document.getElementById('memo');
    if (path == 'no_file_selected') {
        memo.value = ipcLogRenderer.sendSync('i18n', path);
    }
    else {
        logFileField.value = path;
        fs.stat(path, function (err, stat) {
            if (err) {
                memo.value = err;
            }
            else {
                memo.value = fileStat(stat);
                setMakeCsvButtonStatus();
            }
        });
    }
};
var chooseVariableListFile = function () {
    var path = ipcLogRenderer.sendSync('open-variable-list-file-dialog');
    var memo = document.getElementById('memo');
    if (path == 'no_file_selected') {
        memo.value = ipcLogRenderer.sendSync('i18n', path);
    }
    else {
        vListFileField.value = path;
        fs.stat(path, function (err, stat) {
            if (err) {
                memo.value = err;
            }
            else {
                memo.value = fileStat(stat);
                setMakeCsvButtonStatus();
            }
        });
    }
};
var chooseCsvFilePath = function () {
    var path = ipcLogRenderer.sendSync('open-csv-file-path-dialog');
    var memo = document.getElementById('memo');
    if (path == 'no_file_selected') {
        memo.value = ipcLogRenderer.sendSync('i18n', path);
    }
    else {
        csvFilePathField.value = path;
        setMakeCsvButtonStatus();
    }
};
var setMakeCsvButtonStatus = function () {
    var makeCsvButton = document.querySelector('.make-csv-file-btn');
    if (logFileField.value == undefined || logFileField.value.length == 0
        || vListFileField.value == undefined || vListFileField.value.length == 0
        || csvFilePathField.value == undefined || csvFilePathField.value.length == 0) {
        makeCsvButton.disabled = true;
    }
    else {
        makeCsvButton.disabled = false;
    }
};
(0, jquery_1.default)(document).ready(function () {
    setMakeCsvButtonStatus();
});
formLog.addEventListener('submit', function (event) {
    event.preventDefault();
    setLogParams();
    var memo = document.getElementById('memo');
    memo.value = makeCSVfromLog();
});
var makeCSVfromLog = function () {
    return ipcLogRenderer.sendSync('make_csv_from_log');
};
//# sourceMappingURL=parserLOG.js.map