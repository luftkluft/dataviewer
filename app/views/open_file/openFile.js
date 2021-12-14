"use strict";
var fs = require('fs');
var ipcRenderer = require('electron').ipcRenderer;
var form = document.querySelector('.form');
var fileField = form.querySelector('.file-field');
fileField.value = ipcRenderer.sendSync('target_path_file');
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
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var memo = document.getElementById('memo');
    memo.value = fileContent(fileField.value);
});
var chooseFile = function () {
    console.log("chooseFile");
};
//# sourceMappingURL=openFile.js.map