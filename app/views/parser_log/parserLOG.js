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
var fileStat = function (stat) {
    return "birthtime: " + stat.birthtime + "\nmtime: " + stat.mtime + "\nctime: " + stat.ctime + "\nsize: " + stat.size;
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
var setMakeCsvButtonStatus = function () {
    var makeCsvButton = document.querySelector('.make-csv-file-btn');
    if (logFileField.value == undefined || logFileField.value.length == 0) {
        makeCsvButton.disabled = true;
    }
    else {
        makeCsvButton.disabled = false;
    }
};
(0, jquery_1.default)(document).ready(function () {
    setMakeCsvButtonStatus();
});
//# sourceMappingURL=parserLOG.js.map