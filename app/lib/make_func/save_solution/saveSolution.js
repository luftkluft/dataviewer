"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSolution = void 0;
var JSONdb = require('simple-json-db');
var appRoot = require('app-root-path');
var constants_1 = require("../../../constants/constants");
var db = new JSONdb(appRoot + constants_1.PATH_TO_ERROR_MEMORY + 'errors.json');
function saveSolution(key, sNote) {
    try {
        db.set(key, sNote);
        db.sync();
        return 'ok';
    }
    catch (error) {
        return '';
    }
}
exports.saveSolution = saveSolution;
//# sourceMappingURL=saveSolution.js.map