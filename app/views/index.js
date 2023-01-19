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
var ApexCharts = require('apexcharts');
var mainController_1 = require("../controllers/mainController");
var Sortable = require('sortablejs');
var mainController = new mainController_1.MainController();
var chartsOptions = mainController.render();
(0, jquery_1.default)(document).ready(function () { return __awaiter(void 0, void 0, void 0, function () {
    var divChartsArea, rootArea, i, _a, _b, i, error_1, el, sortable;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                divChartsArea = document.createElement('div');
                divChartsArea.id = 'charts-area';
                rootArea = document.getElementById('root');
                if (!(rootArea === null)) return [3, 1];
                console.log("rootArea is null!");
                return [3, 12];
            case 1:
                rootArea.appendChild(divChartsArea);
                _c.label = 2;
            case 2:
                _c.trys.push([2, 11, , 12]);
                i = 0;
                _c.label = 3;
            case 3:
                if (!(i < chartsOptions.length)) return [3, 6];
                _a = divChartsArea;
                _b = _a.innerHTML;
                return [4, chartsOptions[i].chartAreaDiv];
            case 4:
                _a.innerHTML = _b + _c.sent();
                _c.label = 5;
            case 5:
                i++;
                return [3, 3];
            case 6:
                i = 0;
                _c.label = 7;
            case 7:
                if (!(i < chartsOptions.length)) return [3, 10];
                return [4, new ApexCharts(document.getElementById(chartsOptions[i].divId), chartsOptions[i].options).render()];
            case 8:
                _c.sent();
                _c.label = 9;
            case 9:
                i++;
                return [3, 7];
            case 10: return [3, 12];
            case 11:
                error_1 = _c.sent();
                console.log("new ApexCharts(): ".concat(error_1));
                return [3, 12];
            case 12:
                el = document.getElementById('charts-area');
                sortable = Sortable.create(el, { delay: 1000 });
                return [2];
        }
    });
}); });
//# sourceMappingURL=index.js.map