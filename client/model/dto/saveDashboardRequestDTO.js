class SaveDashboardRequestDTO {
  dashboardId;
  dashboardTitle;
  layoutDtoList;

  constructor(dashboardId, dashboardTitle, layoutDtoList) {
    this.dashboardId = dashboardId;
    this.dashboardTitle = dashboardTitle;
    this.layoutDtoList = layoutDtoList;
  }

  toJson = () => {
    return {
      dashboardId: this.dashboardId,
      dashboardTitle: this.dashboardTitle,
      layoutDtoList: this.layoutDtoList.map((e) => e.toJson()),
    };
  };
}
