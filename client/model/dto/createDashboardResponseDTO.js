import LayoutDTO from "./layoutDTO";

export default class CreateDashboardResponseDTO {
  dashboardId;
  layoutList;

  constructor(dashboardId, layoutList) {
    this.dashboardId = dashboardId;
    this.layoutList = layoutList;
  }

  static fromJson = (json) => {
    let layoutList = Object.entries(json["layoutList"])
    return new CreateDashboardResponseDTO(
      json["dashboardId"],
      layoutList.map((e) => LayoutDTO.fromJson(e[1]))
    );
  };
}
