export class ParserService {
  parserData: {} = []
  constructor(_parserData: {}) {
    this.parserData = _parserData
  }
  getParserData() {
    // TODO
    return this.parserData
  }
}
