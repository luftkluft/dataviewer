export declare class ChartService {
    parserData: any;
    constructor(_parserData: {});
    getChartOptions(chartKey?: number): any;
    createChartObject(chartOptions: any): Promise<any>;
    createCharts(): Promise<void>;
    getCharts(): any;
}
