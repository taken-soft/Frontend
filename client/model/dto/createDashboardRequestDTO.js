export default class CreateDashboardRequestDTO {
  dashboardType;
  dashboardSequence;
  toJson = () => {
    return {
      "dashboardType": this.dashboardType,
      "dashboardSequence": this.dashboardSequence,
    };
  };
}
