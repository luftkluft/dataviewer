"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var fs = require('fs');
var ipcRenderer = require('electron').ipcRenderer;
var form = document.querySelector('.form');
var fileField = form.querySelector('.file-field');
fileField.value = ipcRenderer.sendSync('last_opened_file');
var fileContent = function (_fileName) {
    var fileContent = '';
    try {
        fileContent = fs.readFileSync(_fileName, 'utf8');
    }
    catch (error) {
        fileContent = error;
    }
    return fileContent;
};
var setGlobalFileContent = function () {
    ipcRenderer.send('set_file_content', fileContent(fileField.value));
};
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var memo = document.getElementById('memo');
    memo.value = fileContent(fileField.value);
    setGlobalFileContent();
    ipcRenderer.send('open-file');
});
var fileStat = function (stat) {
    return "birthtime: " + stat.birthtime + "\nmtime: " + stat.mtime + "\nctime: " + stat.ctime + "\nsize: " + stat.size;
};
var chooseFile = function () {
    var path = ipcRenderer.sendSync('open-file-dialog');
    var memo = document.getElementById('memo');
    if (path == 'no_file_selected') {
        memo.value = ipcRenderer.sendSync('i18n', path);
    }
    else {
        fileField.value = path;
        fs.stat(path, function (err, stat) {
            if (err) {
                memo.value = err;
            }
            else {
                memo.value = fileStat(stat);
            }
        });
    }
};
var showData = function () {
    ipcRenderer.sendSync('update_app');
};
(0, jquery_1.default)(document).ready(function () {
    var sortingStatus = ipcRenderer.sendSync('get_sorting');
    var viewArray = ipcRenderer.sendSync('get_sort_params_view_array');
    var showDataButton = document.querySelector('.show-data-btn');
    var memo = document.querySelector('.memo');
    if (sortingStatus == 'sorting_manual') {
        if (viewArray == undefined || viewArray.length == 0) {
            showDataButton.disabled = true;
            memo.value = ipcRenderer.sendSync('i18n', 'set_manual_sorting_options');
        }
        else {
            showDataButton.disabled = false;
        }
    }
});
//# sourceMappingURL=openFile.js.map