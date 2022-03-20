export declare class RWS {
    static getLineCountFromFile(sFilePath: string, sFileName: string): number;
    static getLastLinesFromFile(sFilePath: string, sFileName: string, lastLineNumber?: number): string[];
    static getLineByNumberFromFile(sFilePath: string, sFileName: string, lineNumber?: number): string;
}
