export declare class ChartModel {
    chartName: string;
    chartData: number[];
    chartId: string;
    chartGroup: string;
    chartType: string;
    chartHeight: number;
    chartColors: string;
    chartYAxisLabelsMinWidth: number;
    chartYAxisLabelsText: string;
    chartTitleText: string;
    chartTitleAlign: string;
    chartTitleMargin: number;
    chartTitleOffsetX: number;
    chartTitleOffsetY: number;
    chartTitleFloating: boolean;
    chartTitleStyleFontSize: string;
    chartTitleStyleFontWeight: string;
    chartTitleStyleFontColor: string;
    chartOptions: any;
    sortedData: any;
    currentChartId: number;
    constructor(_sortedData: [], _currentChartId: number);
    private setDefaultOptions;
    private copyArray;
    private setChartData;
    private setHead3Texts;
    private setHead2Texts;
    private setHead1Texts;
    private setHead0Texts;
    private setChartTexts;
    private createDefaultChartOptions;
    private dataCorrector;
    createChartOptions(): any;
}
