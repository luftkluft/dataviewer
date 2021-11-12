import { noSorting } from '../../lib/no_sorting/noSorting'
import { manualSorting } from '../../lib/manual_sorting/manualSorting'

export class SortingService {
  parserData: {} = []

  constructor(_parserData: {}){
    this.parserData = _parserData
  }
  noSortingData() {
    // TODO
    return noSorting(this.parserData)
  }
  manualSortingData() {
    // TODO
    return manualSorting(this.parserData)
  }
  sorting(sortAs: string = 'no_sorting'){
    switch (sortAs) {
      case 'no_sorting':
        return this.noSortingData()
        break
      case 'manual_sorting':
        return this.manualSortingData()
        break
      default:
        return this.noSortingData()
        break
    }
  }
}
