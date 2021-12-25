"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartModel = void 0;
var ipcChartModelRenderer = require('electron').ipcRenderer;
var csvParams = ipcChartModelRenderer.sendSync('get_csv_params');
var ChartModel = (function () {
    function ChartModel(_sortedData, _currentChartId) {
        try {
            this.sortedData = _sortedData;
            this.currentChartId = _currentChartId;
            this.setDefaultOptions();
        }
        catch (error) {
            console.log("class ChartModel constructor: " + error);
        }
    }
    ChartModel.prototype.setDefaultOptions = function () {
        this.chartName = 'chart name';
        this.chartData = [];
        this.chartId = String(this.currentChartId);
        this.chartGroup = 'group';
        this.chartType = 'line';
        this.chartHeight = 160;
        this.chartColors = '#151515';
        this.chartYAxisLabelsMinWidth = 40;
        this.chartYAxisLabelsText = ipcChartModelRenderer.sendSync('i18n', 'empty_text');
        this.chartTitleText = 'title text';
        this.chartTitleAlign = 'left';
        this.chartTitleMargin = 10;
        this.chartTitleOffsetX = 0;
        this.chartTitleOffsetY = 0;
        this.chartTitleFloating = false;
        this.chartTitleStyleFontSize = '14px';
        this.chartTitleStyleFontWeight = 'normal';
        this.chartTitleStyleFontColor = '#151515';
    };
    ChartModel.prototype.copyArray = function (sourceArray, targetArray) {
        try {
            for (var i = 0; i <= sourceArray.length; i++) {
                targetArray[i] = sourceArray[i];
            }
            return targetArray;
        }
        catch (error) {
            console.log("chartModel copyArray(): " + error);
        }
    };
    ChartModel.prototype.setChartData = function (options) {
        try {
            var sData = [];
            sData = this.copyArray(this.sortedData, sData);
            var headRows = csvParams.head_rows;
            options.series[0].data = sData.splice(Number(headRows), this.sortedData.length - Number(headRows));
            return options;
        }
        catch (error) {
            console.log("chartModel setChartData(): " + error);
        }
    };
    ChartModel.prototype.setHead3Texts = function (options) {
        try {
            options.series[0].name = this.sortedData[0] + " - " + this.sortedData[1];
            options.title.text = this.sortedData[0] + " - " + this.sortedData[1] + " - " + this.sortedData[2];
            return options;
        }
        catch (error) {
            console.log("chartModel setHead3Texts(): " + error);
        }
    };
    ChartModel.prototype.setHead2Texts = function () {
    };
    ChartModel.prototype.setHead1Texts = function () {
    };
    ChartModel.prototype.setHead0Texts = function () {
    };
    ChartModel.prototype.setChartTexts = function (options) {
        try {
            var headRows = csvParams.head_rows;
            switch (headRows) {
                case '3':
                    return this.setHead3Texts(options);
                case '2':
                    this.setHead2Texts();
                    break;
                case '1':
                    this.setHead1Texts();
                    break;
                default:
                    this.setHead0Texts();
                    break;
            }
        }
        catch (error) {
            console.log("class ChartModel chartTexts(): " + error);
        }
    };
    ChartModel.prototype.createDefaultChartOptions = function () {
        var defaultOptions = {
            series: [
                {
                    name: this.chartName,
                    data: this.chartData,
                },
            ],
            chart: {
                id: this.chartId,
                group: this.chartGroup,
                type: this.chartType,
                height: this.chartHeight,
            },
            colors: [this.chartColors],
            yaxis: {
                labels: {
                    minWidth: this.chartYAxisLabelsMinWidth,
                },
            },
            title: {
                text: this.chartYAxisLabelsText,
                align: this.chartTitleAlign,
                margin: this.chartTitleMargin,
                offsetX: this.chartTitleOffsetX,
                offsetY: this.chartTitleOffsetY,
                floating: this.chartTitleFloating,
                style: {
                    fontSize: this.chartTitleStyleFontSize,
                    fontWeight: this.chartTitleStyleFontWeight,
                    color: this.chartTitleStyleFontColor,
                },
            },
        };
        return defaultOptions;
    };
    ChartModel.prototype.dataCorrector = function () {
        try {
            var options = this.createDefaultChartOptions();
            if (this.sortedData.length == 0) {
                return options;
            }
            else {
                options = this.setChartTexts(options);
                options = this.setChartData(options);
                return options;
            }
        }
        catch (error) {
            console.log("ChartCervice dataCorrector(): " + error);
        }
    };
    ChartModel.prototype.createChartOptions = function () {
        var chartOptions = this.dataCorrector();
        return chartOptions;
    };
    return ChartModel;
}());
exports.ChartModel = ChartModel;
//# sourceMappingURL=chartModel.js.map