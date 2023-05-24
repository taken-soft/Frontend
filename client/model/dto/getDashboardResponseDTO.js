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

  toJson = () => {
    return {
      dashboardId: this.dashboardId,
      dashboardTitle: this.dashboardTitle,
      dashboardType: this.dashboardType,
      dashboardSequence: this.dashboardSequence,
      layoutList: this.layoutList.map((e) => e.toJson()),
    };
  };

  static fromJson = (json) => {
    let layoutList = Object.entries(json["layoutList"]);
    return new GetDashboardResponseDTO(
      json["dashboardId"],
      json["dashboardTitle"],
      json["dashboardType"],
      json["dashboardSequence"],
      layoutList.map((e) => LayoutDTO.fromJson(e[1]))
    );
  };
}
