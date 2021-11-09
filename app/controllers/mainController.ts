import { ChartService } from '../services/chart_service/ChartService'

export class MainController {
  static render() {
    return ChartService.render()
  }
}
