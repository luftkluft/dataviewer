"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var fs = require('fs');
var ipcDiagnRenderer = require('electron').ipcRenderer;
var formDiagn = document.querySelector('.diagnostics-form');
var patternFileField = formDiagn.querySelector('.choose-pattern-file-field');
patternFileField.value = ipcDiagnRenderer.sendSync('last_opened_pattern_file');
var errorFileField = formDiagn.querySelector('.choose-error-file-field');
errorFileField.value = ipcDiagnRenderer.sendSync('last_opened_error_file');
var fileStat = function (stat) {
    return "birthtime: " + stat.birthtime + "\nmtime: " + stat.mtime + "\nctime: " + stat.ctime + "\nsize: " + stat.size;
};
var choosePatternFile = function () {
    var path = ipcDiagnRenderer.sendSync('open-pattern-file-dialog');
    var memo = document.getElementById('memo');
    if (path == 'no_file_selected') {
        memo.value = ipcDiagnRenderer.sendSync('i18n', path);
    }
    else {
        patternFileField.value = path;
        fs.stat(path, function (err, stat) {
            if (err) {
                memo.value = err;
            }
            else {
                memo.value = fileStat(stat);
                setMakeDiagnosticsButtonStatus();
            }
        });
    }
};
var chooseErrorFile = function () {
    var path = ipcDiagnRenderer.sendSync('open-error-file-dialog');
    var memo = document.getElementById('memo');
    if (path == 'no_file_selected') {
        memo.value = ipcDiagnRenderer.sendSync('i18n', path);
    }
    else {
        errorFileField.value = path;
        fs.stat(path, function (err, stat) {
            if (err) {
                memo.value = err;
            }
            else {
                memo.value = fileStat(stat);
                setMakeDiagnosticsButtonStatus();
            }
        });
    }
};
formDiagn.addEventListener('submit', function (event) {
    event.preventDefault();
    var memo = document.getElementById('memo');
    memo.value = "click submit";
});
var setMakeDiagnosticsButtonStatus = function () {
    var makeDiagnosticButton = document.querySelector('.make-diagnostics-btn');
    if (patternFileField.value == undefined || patternFileField.value.length == 0
        || errorFileField.value == undefined || errorFileField.value.length == 0) {
        makeDiagnosticButton.disabled = true;
    }
    else {
        makeDiagnosticButton.disabled = false;
    }
};
(0, jquery_1.default)(document).ready(function () {
    setMakeDiagnosticsButtonStatus();
});
//# sourceMappingURL=diagnostics.js.map