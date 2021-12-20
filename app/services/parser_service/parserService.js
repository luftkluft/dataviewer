"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserService = void 0;
var ipcPServiceRenderer = require('electron').ipcRenderer;
var csvParserService_1 = require("../csv_parser_service/csvParserService");
var emptyData = [
    {
        series: [
            {
                name: ipcPServiceRenderer.sendSync('i18n', 'no_data'),
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            },
        ],
        chart: {
            id: 'no-data',
            group: 'no-group',
            type: 'line',
            height: 160,
        },
        colors: ['#008FFB'],
        yaxis: {
            labels: {
                minWidth: 40,
                text: ipcPServiceRenderer.sendSync('i18n', 'empty_label'),
            },
        },
        title: {
            text: ipcPServiceRenderer.sendSync('i18n', 'empty_text'),
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
                fontWeight: 'normal',
                color: 'red',
            },
        },
    },
];
var ParserService = (function () {
    function ParserService() {
        this.parseredData = [];
    }
    ParserService.prototype.getDataFromFile = function () {
        try {
            var result = ipcPServiceRenderer.sendSync('get_file_content');
            return result;
        }
        catch (error) {
            console.log("getDataFromFile(): " + error);
            return '';
        }
    };
    ParserService.prototype.getParserStatus = function () {
        try {
            var result = ipcPServiceRenderer.sendSync('get_parser_status');
            return result;
        }
        catch (error) {
            console.log("getParserStatus(): " + error);
            return '';
        }
    };
    ParserService.prototype.doParsering = function (dataFromFile) {
        var parser = this.getParserStatus();
        switch (parser) {
            case 'parser_csv':
                var parseredData = new csvParserService_1.CsvParserService(dataFromFile).csvParsering();
                return parseredData;
                break;
            default:
                return emptyData;
                break;
        }
    };
    ParserService.prototype.parsering = function () {
        try {
            var dataFromFile = this.getDataFromFile();
            if (dataFromFile == '' || dataFromFile == undefined) {
                return emptyData;
            }
            else {
                return this.doParsering(dataFromFile);
            }
        }
        catch (error) {
            console.log("parsering(): " + error);
            return emptyData;
        }
    };
    ParserService.prototype.getParseredData = function () {
        return this.parsering();
    };
    return ParserService;
}());
exports.ParserService = ParserService;
//# sourceMappingURL=parserService.js.map