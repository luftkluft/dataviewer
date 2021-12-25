"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
var chartService_1 = require("../services/chart_service/chartService");
var sortingService_1 = require("../services/sorting_service/sortingService");
var parserService_1 = require("../services/parser_service/parserService");
var MainController = (function () {
    function MainController() {
        this.parseredData = [];
    }
    MainController.prototype.getParseredData = function () {
        return new parserService_1.ParserService().getParseredData();
    };
    MainController.prototype.sortingData = function (_parserData) {
        return new sortingService_1.SortingService(_parserData).sorting();
    };
    MainController.prototype.render = function () {
        this.parseredData = this.getParseredData();
        var sortedData = this.sortingData(this.parseredData);
        var charts = new chartService_1.ChartService(sortedData);
        return charts.getChartsOptions();
    };
    return MainController;
}());
exports.MainController = MainController;
//# sourceMappingURL=mainController.js.map