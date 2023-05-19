export default class SearchDashboardDTO {
  dashboardId;
  dashBoardName;

  constructor(dashboardId, dashBoardName) {
    this.dashboardId = dashboardId;
    this.dashBoardName = dashBoardName;
  }

  static fromJson = (json) => {
    return new SearchDashboardDTO(
      json.get("dashboardId"),
      json.get("dashBoardName"),
    );
  };
}
