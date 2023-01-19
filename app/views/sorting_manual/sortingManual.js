"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var parserService_1 = require("../../services/parser_service/parserService");
var ipcSManualRenderer = require('electron').ipcRenderer;
var csvParams = ipcSManualRenderer.sendSync('get_csv_params');
var ipcSortingRenderer = require('electron').ipcRenderer;
var setSortingParamsButton = document.querySelector('.set-sorting-params-btn');
var getSortParamsFromView = function () {
    var viewArray = [];
    try {
        var table = document.querySelector('.table');
        var markedCheckbox = document.getElementsByName('ibox');
        for (var _i = 0, markedCheckbox_1 = markedCheckbox; _i < markedCheckbox_1.length; _i++) {
            var checkbox = markedCheckbox_1[_i];
            if (checkbox.checked) {
                viewArray.push(String(checkbox.id));
            }
        }
        if (viewArray.length > 0) {
            viewArray.unshift('0');
        }
    }
    catch (error) {
        console.log("getSortParamsFromView(): ".concat(error));
    }
    return viewArray;
};
var setSortParamsViewArray = function () { return __awaiter(void 0, void 0, void 0, function () {
    var viewArray;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                viewArray = getSortParamsFromView();
                return [4, ipcSManualRenderer.send('set_sort_params_view_array', viewArray)];
            case 1:
                _a.sent();
                return [4, ipcSManualRenderer.send('update_app')];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); };
setSortingParamsButton.addEventListener('click', function (event) {
    event.preventDefault();
    setSortParamsViewArray();
});
var getTableData = function () {
    try {
        var parseredData = new parserService_1.ParserService().getParseredData();
        return parseredData;
    }
    catch (error) {
        console.log("getTableData(): ".concat(error));
    }
};
var tableConstructor = function () {
    var tableData = getTableData();
    var divTableInfo = document.getElementById('table-info');
    var headSize = csvParams.head_rows;
    if (tableData == undefined || tableData.length == 0) {
        divTableInfo.innerHTML = "";
        setSortingParamsButton.disabled = true;
        return "<h1>".concat(ipcSManualRenderer.sendSync('i18n', 'nothing_to_sort'), "</h1>");
    }
    try {
        var sortingTable = "";
        var beginTableHead = "<table class=\"table table-striped\">\n<thead>\n<tr>";
        var bodyTableHead = "";
        var endTableHead = "</tr>\n</thead>";
        var beginTableBody = "<tbody>";
        var bodyTableBody = "";
        var tempTableBody = "";
        var endTableBody = "</tbody>\n</table>";
        var rowNumber = 0;
        for (var i = 0; i < tableData.length; i++) {
            for (var j = 0; j < tableData[i].length; j++) {
                if (i == 0) {
                    if (j < headSize) {
                        if (j == 0) {
                            bodyTableHead = "<th scope=\"col\">#</th>";
                        }
                        bodyTableHead = bodyTableHead + "<th scope=\"col\">".concat(tableData[i][j], "</th>");
                        if (j == headSize - 1) {
                            bodyTableHead = bodyTableHead + "<th scope=\"col\">".concat(ipcSManualRenderer.sendSync('i18n', 'show'), "</th>");
                        }
                    }
                }
                else {
                    if (j < headSize) {
                        if (j == 0) {
                            rowNumber = rowNumber + 1;
                            tempTableBody = "<tr><td>".concat(rowNumber, "</td>");
                        }
                        tempTableBody = tempTableBody + "<td>".concat(tableData[i][j], "</td>");
                        if (j == headSize - 1) {
                            tempTableBody = tempTableBody + "<td><input type=\"checkbox\" id=\"".concat(rowNumber, "\" name=\"ibox\"></td></tr>");
                            bodyTableBody = bodyTableBody + tempTableBody;
                            tempTableBody = "";
                        }
                    }
                }
            }
        }
        sortingTable = beginTableHead + bodyTableHead + endTableHead + beginTableBody + bodyTableBody + endTableBody;
        divTableInfo.innerHTML = "".concat(ipcSManualRenderer.sendSync('i18n', 'end_table_creation'));
        setSortingParamsButton.disabled = false;
        return sortingTable;
    }
    catch (error) {
        console.log("tableConstructor(): ".concat(error));
        return "<h1>Sorting Table Error</h1>";
    }
};
(0, jquery_1.default)(document).ready(function () {
    var divTableArea = document.createElement('div');
    divTableArea.id = 'table-area';
    var rootTable = document.getElementById('root');
    if (rootTable === null) {
        console.log("rootArea is null!");
    }
    else {
        rootTable.appendChild(divTableArea);
        try {
            divTableArea.innerHTML = tableConstructor();
        }
        catch (error) {
            console.log("Sorting table: ".concat(error));
        }
    }
});
//# sourceMappingURL=sortingManual.js.map