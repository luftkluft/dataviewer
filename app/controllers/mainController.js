"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
var ChartService_1 = require("../services/chart_service/ChartService");
var sortingService_1 = require("../services/sorting_service/sortingService");
var parserService_1 = require("../services/parser_service/parserService");
var testData = [
    {
        series: [
            {
                name: 'sales1',
                data: [30, 40, 35, -50, 49, 60, -70, 91, 125],
            },
        ],
        chart: {
            id: 'tw1',
            group: 'social',
            type: 'area',
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
                data: [0, 0, 1, 1, 1, 0, 1, 0, 0],
            },
        ],
        chart: {
            id: 'tw2',
            group: 'social',
            type: 'area',
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
    {
        series: [
            {
                name: 'sales3',
                data: [-30, -40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
        chart: {
            id: 'tw3',
            group: 'social',
            type: 'line',
            height: 160,
        },
        colors: ['#008FFB'],
        yaxis: {
            labels: {
                minWidth: 40,
                text: 'test 3',
            },
        },
        title: {
            text: 'test 3',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                fontWeight: 'normal',
                color: 'green',
            },
        },
    },
    {
        series: [
            {
                name: 'sales4',
                data: [30, 40, 35, -50, 49, 60, -70, 91, 125],
            },
        ],
        chart: {
            id: 'tw4',
            group: 'social',
            type: 'area',
            height: 160,
        },
        colors: ['green'],
        yaxis: {
            labels: {
                minWidth: 40,
            },
        },
        title: {
            text: 'test 4',
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
                name: 'sales5',
                data: [0, 0, 1, 1, 1, 0, 1, 0, 0],
            },
        ],
        chart: {
            id: 'tw5',
            group: 'social',
            type: 'area',
            height: 160,
        },
        colors: ['red'],
        yaxis: {
            labels: {
                minWidth: 40,
            },
        },
        title: {
            text: 'test 5',
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
    {
        series: [
            {
                name: 'test 6',
                data: [-30, -40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
        chart: {
            id: 'tw6',
            group: 'social',
            type: 'line',
            height: 160,
        },
        colors: ['#008FFB'],
        yaxis: {
            labels: {
                minWidth: 40,
                text: 'Lablel 1',
            },
        },
        title: {
            text: 'test 6',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                fontWeight: 'normal',
                color: 'green',
            },
        },
    },
];
var MainController = (function () {
    function MainController() {
        this.parseredData = [];
    }
    MainController.prototype.parserData = function () {
        return new parserService_1.ParserService(testData).getParserData();
    };
    MainController.prototype.sortingData = function (_parserData) {
        return new sortingService_1.SortingService(_parserData).sorting();
    };
    MainController.prototype.render = function () {
        this.parseredData = this.parserData();
        var sortedData = this.sortingData(this.parseredData);
        var charts = new ChartService_1.ChartService(sortedData);
        return charts.getCharts();
    };
    return MainController;
}());
exports.MainController = MainController;
//# sourceMappingURL=mainController.js.map