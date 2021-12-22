"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingService = void 0;
var manualSorting_1 = require("../../lib/manual_sorting/manualSorting");
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
        colors: ['#008FFB'],
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
        colors: ['#5FFFFB'],
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
var SortingService = (function () {
    function SortingService(_parseredData) {
        this.parseredData = [];
        this.parseredData = _parseredData;
    }
    SortingService.prototype.noSortingData = function (parseredData) {
        console.log("parseredData no sorting:");
        console.dir(parseredData);
        return testData;
    };
    SortingService.prototype.manualSortingData = function () {
        return (0, manualSorting_1.manualSorting)(this.parseredData);
    };
    SortingService.prototype.sorting = function (sortAs) {
        if (sortAs === void 0) { sortAs = 'no_sorting'; }
        switch (sortAs) {
            case 'no_sorting':
                return this.noSortingData(this.parseredData);
                break;
            case 'manual_sorting':
                return this.manualSortingData();
                break;
            default:
                return this.noSortingData(this.parseredData);
                break;
        }
    };
    return SortingService;
}());
exports.SortingService = SortingService;
//# sourceMappingURL=sortingService.js.map