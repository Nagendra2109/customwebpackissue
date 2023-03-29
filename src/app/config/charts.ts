import { DcLineChartService } from "../shared/services/dc-line-chart.service";
import { DChartMultilineService } from "../shared/services/dc-multiline-chart.service";

/*** PARTICULAR APPLICATION CHARTS: Add herer the imports to the particular charts created and used only by your application ***/

export function getChartsConfig(): void {
  const chartsConfig = window.app.config.chartsConfig || {};

  return {
    ...chartsConfig,

    /************** CHARTS IMPLEMENTED IN OUR APPLICATION **************/
    /*** Add here the list of new charts created in your application ***/
    /*** with the format --> XXX_CHART: {service: xxxService}        ***/

    DC_LINE_CHART: {
      service: DcLineChartService
    },
    DC_MULTILINE_CHART: {
      service: DChartMultilineService
    }
  };
}
