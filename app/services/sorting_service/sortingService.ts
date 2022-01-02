import { noSorting } from '../../lib/no_sorting/noSorting'
import { manualSorting } from '../../lib/manual_sorting/manualSorting'

export class SortingService {
  parseredData: [] = []

  constructor(_parseredData: []) {
    this.parseredData = _parseredData
  }

  sorting(sortAs: string = 'no_sorting') {
    switch (sortAs) {
      case 'no_sorting':
        return noSorting(this.parseredData)
      case 'sorting_manual':
        return manualSorting(this.parseredData)
      default:
        return noSorting(this.parseredData)
    }
  }
}
