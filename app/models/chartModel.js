"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartModel = void 0;
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
    function ChartModel(sortedData) {
    }
    ChartModel.prototype.createChart = function () {
        return testChart;
    };
    return ChartModel;
}());
exports.ChartModel = ChartModel;
//# sourceMappingURL=chartModel.js.map