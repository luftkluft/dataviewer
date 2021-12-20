"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvParserService = void 0;
var ipcCsvPServiceRenderer = require('electron').ipcRenderer;
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
];
var CsvParserService = (function () {
    function CsvParserService(_dataFromFile) {
        this.dataFromFile = _dataFromFile;
        try {
            this.csvParams = ipcCsvPServiceRenderer.sendSync('get_csv_params');
        }
        catch (error) {
            console.log("CsvParserService:constructor: " + error);
        }
    }
    CsvParserService.prototype.columnСounting = function (dataFromFile) {
        if ((this.csvParams.columns = '0')) {
            var delemiterCount = 0;
            for (var i = 0; i <= dataFromFile.length; i++) {
                if (dataFromFile[i] == this.csvParams.delemiter) {
                    delemiterCount = delemiterCount + 1;
                }
                if (dataFromFile[i] == this.csvParams.end_row) {
                    return delemiterCount;
                }
            }
        }
        else {
            return this.csvParams.columns;
        }
    };
    CsvParserService.prototype.csvParsering = function () {
        console.log("file_content: " + this.dataFromFile);
        console.log("column\u0421ounting: " + this.columnСounting(this.dataFromFile));
        return testData;
    };
    return CsvParserService;
}());
exports.CsvParserService = CsvParserService;
//# sourceMappingURL=csvParserService.js.map