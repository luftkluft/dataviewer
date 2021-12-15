"use strict";
var ipcCsvRenderer = require('electron').ipcRenderer;
var formCsv = document.querySelector('.parser-form');
var fileCsvField = formCsv.querySelector('.target-file-name-field');
fileCsvField.value = ipcCsvRenderer.sendSync('target_file_name');
formCsv.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("csv click");
});
//# sourceMappingURL=parserCSV.js.map