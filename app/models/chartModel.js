"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartModel = void 0;
var ipcChartModelRenderer = require('electron').ipcRenderer;
var csvParams = ipcChartModelRenderer.sendSync('get_csv_params');
var testChart = {
    series: [
        {
            name: 'test chart',
            data: [
                30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49, 60, -70,
                91, 125, 30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49,
                60, -70, 91, 125,
            ],
        },
    ],
    chart: {
        id: 'twt',
        group: 'social',
        type: 'line',
        height: 160,
    },
    colors: ['#008F00'],
    yaxis: {
        labels: {
            minWidth: 40,
        },
    },
    title: {
        text: 'test chart',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '12px',
            fontWeight: 'normal',
            color: 'blue',
        },
    },
};
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
        this.chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartId = String(this.currentChartId);
        this.chartGroup = 'group';
        this.chartType = 'line';
        this.chartHeight = 160;
        this.chartColors = '#008F00';
        this.chartYAxisLabelsMinWidth = 40;
        this.chartYAxisLabelsText = 'yaxis text';
        this.chartTitleText = 'title text';
        this.chartTitleAlign = 'left';
        this.chartTitleMargin = 10;
        this.chartTitleOffsetX = 0;
        this.chartTitleOffsetY = 0;
        this.chartTitleFloating = false;
        this.chartTitleStyleFontSize = '14px';
        this.chartTitleStyleFontWeight = 'normal';
        this.chartTitleStyleFontColor = '#008F00';
    };
    ChartModel.prototype.head3Texts = function () {
    };
    ChartModel.prototype.head2Texts = function () {
    };
    ChartModel.prototype.head1Texts = function () {
    };
    ChartModel.prototype.head0Texts = function () {
    };
    ChartModel.prototype.chartTexts = function () {
        try {
            var headRows = csvParams.head_rows;
            switch (headRows) {
                case '3':
                    this.head3Texts();
                    break;
                case '2':
                    this.head2Texts();
                    break;
                case '1':
                    this.head1Texts();
                    break;
                default:
                    this.head0Texts();
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
        var options = this.createDefaultChartOptions();
        return options;
    };
    ChartModel.prototype.createChartOptions = function () {
        var chart = this.dataCorrector();
        console.log("createChart():");
        console.dir(chart);
        return chart;
    };
    return ChartModel;
}());
exports.ChartModel = ChartModel;
//# sourceMappingURL=chartModel.js.map