"use strict";
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
    ipcRenderer.send('set_global_file_content', fileContent(fileField.value));
};
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var memo = document.getElementById('memo');
    memo.value = fileContent(fileField.value);
    setGlobalFileContent();
});
var chooseFile = function () {
    console.log("chooseFile");
};
//# sourceMappingURL=openFile.js.map