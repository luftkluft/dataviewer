export declare class RWS {
    static getLineCountFromFile(sFilePath: string, sFileName: string): number;
    static getLastLinesFromFile(sFilePath: string, sFileName: string, lastLineNumber?: number): string[];
    static getLineByNumberFromFile(sFilePath: string, sFileName: string, lineNumber?: number): string;
    static readDataLineFromLog(sLogLine?: string): string;
    static readLinesArray(sFilePath: string, sFileName: string): string[];
    static readTimeFromLog(sLogLine?: string): string;
    static writeErrorToMemoryData(sErrorKey?: string, sErrorMessage?: string): any;
    static readErrorFromMemoryData(sErrorKey?: string): any;
    static getLineByNumberFromLines(sLines: string, lineNumber: number): string;
}
