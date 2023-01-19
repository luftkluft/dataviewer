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
            try {
                var charts = [];
                if (sortedData.length == 0) {
                    var options = _this.getChartOptions(sortedData, 0);
                    var chartObject = _this.createChartObject(options);
                    charts.push(chartObject);
                    return charts;
                }
                else {
                    for (var i = 0; i < sortedData.length; i++) {
                        var options = _this.getChartOptions(sortedData[i], i);
                        var chartObject = _this.createChartObject(options);
                        charts.push(chartObject);
                    }
                    return charts;
                }
            }
            catch (error) {
                console.log("ChartService createChartsOptions: ".concat(error));
            }
        };
        this.sortedData = _sortedData;
    }
    ChartService.prototype.createChartObject = function (options) {
        try {
            var chartObject = {
                divId: options.chart.id,
                chartAreaDiv: "<div id=\"".concat(options.chart.id, "\" class=\"list-group-item\"></div>"),
                options: options,
            };
            return chartObject;
        }
        catch (error) {
            console.log("createChartObject(): ".concat(error));
            return {};
        }
    };
    ChartService.prototype.getChartsOptions = function () {
        try {
            var chartsOptions = this.createChartsOptions(this.sortedData);
            return chartsOptions;
        }
        catch (error) {
            console.log("getChartsOptions(): ".concat(error));
            return [];
        }
    };
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chartService.js.map