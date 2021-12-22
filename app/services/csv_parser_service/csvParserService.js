"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvParserService = void 0;
var csvGetColumns_1 = require("../../lib/csv/csv_get_columns/csvGetColumns");
var testData = [
    {
        series: [
            {
                name: 'sales1',
                data: [
                    30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49, 60, -70,
                    91, 125, 30, 40, 35, -50, 49, 60, -70, 91, 125, 30, 40, 35, -50, 49,
                    60, -70, 91, 125,
                ],
            },
        ],
        chart: {
            id: 'tw1',
            group: 'social',
            type: 'line',
            height: 160,
        },
        colors: ['green'],
        yaxis: {
            labels: {
                minWidth: 40,
            },
        },
        title: {
            text: 'test1',
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
    },
    {
        series: [
            {
                name: 'sales2',
                data: [
                    0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1,
                    0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0,
                ],
            },
        ],
        chart: {
            id: 'tw2',
            group: 'social',
            type: 'line',
            height: 160,
        },
        colors: ['red'],
        yaxis: {
            labels: {
                minWidth: 40,
            },
        },
        title: {
            text: 'test 2',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '12px',
                fontWeight: 'normal',
                color: 'black',
            },
        },
    },
];
var CsvParserService = (function () {
    function CsvParserService(_dataFromFile) {
        this.dataFromFile = _dataFromFile;
    }
    CsvParserService.prototype.csvParsering = function () {
        var result = (0, csvGetColumns_1.csvGetColumns)(this.dataFromFile);
        console.log("[0][0]: " + result[0][0]);
        console.log("[1][0]: " + result[1][0]);
        console.log("[1][2]: " + result[1][2]);
        return testData;
    };
    return CsvParserService;
}());
exports.CsvParserService = CsvParserService;
//# sourceMappingURL=csvParserService.js.map