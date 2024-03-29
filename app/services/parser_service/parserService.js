"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserService = void 0;
var ipcPServiceRenderer = require('electron').ipcRenderer;
var csvParserService_1 = require("../csv_parser_service/csvParserService");
var ParserService = (function () {
    function ParserService() {
        this.parseredData = [];
    }
    ParserService.prototype.getDataFromFile = function () {
        try {
            var result = ipcPServiceRenderer.sendSync('get_file_content');
            return result;
        }
        catch (error) {
            console.log("getDataFromFile(): ".concat(error));
            return '';
        }
    };
    ParserService.prototype.getParserStatus = function () {
        try {
            var result = ipcPServiceRenderer.sendSync('get_parser_status');
            return result;
        }
        catch (error) {
            console.log("getParserStatus(): ".concat(error));
            return '';
        }
    };
    ParserService.prototype.doParsering = function (dataFromFile) {
        var parser = this.getParserStatus();
        switch (parser) {
            case 'parser_csv':
                var parseredData = new csvParserService_1.CsvParserService(dataFromFile).csvParsering();
                return parseredData;
            default:
                return [];
        }
    };
    ParserService.prototype.parsering = function () {
        try {
            var dataFromFile = this.getDataFromFile();
            if (dataFromFile == '' || dataFromFile == undefined) {
                return [];
            }
            else {
                return this.doParsering(dataFromFile);
            }
        }
        catch (error) {
            console.log("parsering(): ".concat(error));
            return [];
        }
    };
    ParserService.prototype.getParseredData = function () {
        return this.parsering();
    };
    return ParserService;
}());
exports.ParserService = ParserService;
//# sourceMappingURL=parserService.js.map