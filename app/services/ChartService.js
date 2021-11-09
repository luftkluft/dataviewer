"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartService = void 0;
var chartModel_1 = require("../models/chartModel");
var chart = new chartModel_1.ChartModel('Test Chart Name');
var ChartService = (function () {
    function ChartService(_charts) {
        this.charts = _charts;
    }
    ChartService.render = function () {
        return "<h1>Hello " + chart.chartName + "</h1>";
    };
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=ChartService.js.map