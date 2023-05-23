class SaveDashboardRequestDTO {
  dashboardId;
  dashboardTitle;
  layoutList;

  constructor(dashboardId, dashboardTitle, layoutDtoList) {
    this.dashboardId = dashboardId;
    this.dashboardTitle = dashboardTitle;
    this.layoutList = layoutDtoList;
  }

  toJson = () => {
    return {
      dashboardId: this.dashboardId,
      dashboardTitle: this.dashboardTitle,
      layoutList: this.layoutList.map((e) => e.toJson()),
    };
  };
}
