"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvParserService = void 0;
var ipcCsvPServiceRenderer = require('electron').ipcRenderer;
var CsvParserService = (function () {
    function CsvParserService(_dataFromFile) {
        this.dataFromFile = _dataFromFile;
        try {
            this.csvParams = ipcCsvPServiceRenderer.sendSync('get_csv_params');
        }
        catch (error) {
            console.log("CsvParserService:constructor: " + error);
        }
    }
    return CsvParserService;
}());
exports.CsvParserService = CsvParserService;
//# sourceMappingURL=csvParserService.js.map