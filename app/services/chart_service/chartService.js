"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartService = void 0;
var chartModel_1 = require("../../models/chartModel");
var ChartService = (function () {
    function ChartService(_sortedData) {
        var _this = this;
        this.sortedData = [];
        this.getChartOptions = function (chartArray, chartId) {
            var chart = new chartModel_1.ChartModel(chartArray, chartId).createChartOptions();
            return chart;
        };
        this.createChartsOptions = function (sortedData) {
            var charts = [];
            for (var i = 0; i < sortedData.length; i++) {
                var options = _this.getChartOptions(sortedData[i], i);
                var chartObject = _this.createChartObject(options);
                charts.push(chartObject);
                return charts;
            }
        };
        this.sortedData = _sortedData;
    }
    ChartService.prototype.createChartObject = function (options) {
        try {
            var chartObject = {
                divId: options.chart.id,
                chartAreaDiv: "<div id=\"" + options.chart.id + "\" class=\"list-group-item\"></div>",
                options: options,
            };
            return chartObject;
        }
        catch (error) {
            console.log("createChartObject(): " + error);
            return {};
        }
    };
    ChartService.prototype.getChartsOptions = function () {
        try {
            var chartsOptions = this.createChartsOptions(this.sortedData);
            console.log("ChartServ getChartsOptions():");
            console.dir(chartsOptions);
            return chartsOptions;
        }
        catch (error) {
            console.log("getChartsOptions(): " + error);
            return [];
        }
    };
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chartService.js.map