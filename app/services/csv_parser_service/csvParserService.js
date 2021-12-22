"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvParserService = void 0;
var csvGetColumns_1 = require("../../lib/csv/csv_get_columns/csvGetColumns");
var CsvParserService = (function () {
    function CsvParserService(_dataFromFile) {
        this.dataFromFile = _dataFromFile;
    }
    CsvParserService.prototype.csvParsering = function () {
        var result = (0, csvGetColumns_1.csvGetColumns)(this.dataFromFile);
        return result;
    };
    return CsvParserService;
}());
exports.CsvParserService = CsvParserService;
//# sourceMappingURL=csvParserService.js.map