export default class CreateDashboardRequestDTO {
  dashboardType;
  dashboardSequence;

  constructor(dashboardType, dashboardSequence) {
    this.dashboardType = dashboardType;
    this.dashboardSequence = dashboardSequence;
  }

  toJson = () => {
    return {
      dashboardType: this.dashboardType,
      dashboardSequence: this.dashboardSequence,
    };
  };
}
