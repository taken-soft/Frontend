import LayoutDTO from "./layoutDTO";

export default class GetDashboardResponseDTO {
  dashboardId;
  dashboardTitle;
  dashboardType;
  dashboardSequence;
  layoutDtoList;

  constructor(
    dashboardId,
    dashboardTitle,
    dashboardType,
    dashboardSequence,
    layoutDtoList
  ) {
    this.dashboardId = dashboardId;
    this.dashboardTitle = dashboardTitle;
    this.dashboardType = dashboardType;
    this.dashboardSequence = dashboardSequence;
    this.layoutDtoList = layoutDtoList;
  }

  toJson = () => {
    return {
      dashboardId: this.dashboardId,
      dashboardTitle: this.dashboardTitle,
      dashboardType: this.dashboardType,
      dashboardSequence: this.dashboardSequence,
      layoutDtoList: this.layoutDtoList.map((e) => e.toJson()),
    };
  };

  static fromJson = (json) => {
    let layoutDtoList = !json["layoutDtoList"] ? [] : Object.entries(json["layoutDtoList"]);
    return new GetDashboardResponseDTO(
      json["dashboardId"],
      json["dashboardTitle"],
      json["dashboardType"],
      json["dashboardSequence"],
      layoutDtoList.map((e) => LayoutDTO.fromJson(e[1]))
    );
  };
}
