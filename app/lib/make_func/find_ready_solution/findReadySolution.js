"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findReadySolution = void 0;
var JSONdb = require('simple-json-db');
var appRoot = require('app-root-path');
var constants_1 = require("../../../constants/constants");
var db = new JSONdb(appRoot + constants_1.PATH_TO_ERROR_MEMORY + 'errors.json');
var rws_1 = require("../../../services/read_write_service/rws");
function findReadySolution(errorMainLine) {
    var key = rws_1.RWS.readDataLineFromLog(errorMainLine);
    try {
        if (db.has(key)) {
            return db.get(key);
        }
        else {
            return '';
        }
    }
    catch (error) {
        return '';
    }
}
exports.findReadySolution = findReadySolution;
//# sourceMappingURL=findReadySolution.js.map