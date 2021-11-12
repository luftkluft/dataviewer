import { noSorting } from '../../lib/no_sorting/noSorting'
import { manualSorting } from '../../lib/manual_sorting/manualSorting'

export class SortingService {
  parserData: {} = []
  constructor(_parserData: {}){
    this.parserData = _parserData
  }
  noSortingData() {
    // TODO
    noSorting(this.parserData)
  }
  manualSortingData() {
    // TODO
    manualSorting(this.parserData)
  }
}
