"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manualSorting = void 0;
var ipcMSortingRenderer = require('electron').ipcRenderer;
function manualSorting(parseredData) {
    try {
        var viewArray = ipcMSortingRenderer.sendSync('get_sort_params_view_array');
        if (viewArray == undefined || viewArray.length == 0 || viewArray.length == 0) {
            return [];
        }
        var sortedData = [];
        for (var i = 0; i < parseredData.length; i++) {
            if (viewArray.includes(String(i))) {
                sortedData.push(parseredData[i]);
            }
        }
        return sortedData;
    }
    catch (error) {
        console.log("manualSorting(): ".concat(error));
        return [];
    }
}
exports.manualSorting = manualSorting;
//# sourceMappingURL=manualSorting.js.map