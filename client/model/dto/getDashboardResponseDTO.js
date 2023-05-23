import LayoutDTO from "./layoutDTO";

export default class GetDashboardResponseDTO {
  dashboardId;
  dashboardTitle;
  dashboardType;
  dashboardSequence;
  layoutList;

  constructor(
    dashboardId,
    dashboardTitle,
    dashboardType,
    dashboardSequence,
    layoutList
  ) {
    this.dashboardId = dashboardId;
    this.dashboardTitle = dashboardTitle;
    this.dashboardType = dashboardType;
    this.dashboardSequence = dashboardSequence;
    this.layoutList = layoutList;
  }

  static fromJson = (json) => {
    return new GetDashboardResponseDTO(
      json.get("dashboardId"),
      json.get("dashboardTitle"),
      json.get("dashboardType"),
      json.get("dashboardSequence"),
      json.get("layoutList").map((e) => LayoutDTO.fromJson(e))
    );
  };
}
