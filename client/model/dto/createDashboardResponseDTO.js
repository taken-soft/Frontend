import LayoutDTO from "./layoutDTO";

export default class CreateDashboardResponseDTO {
  dashboardId;
  layoutDtos;

  constructor(dashboardId, layoutDtos) {
    this.dashboardId = dashboardId;
    this.layoutDtos = layoutDtos;
  }

  static fromJson = (json) => {
    let layoutDtos = Object.entries(json["layoutDtos"])
    return new CreateDashboardResponseDTO(
      json["dashboardId"],
      layoutDtos.map((e) => LayoutDTO.fromJson(e[1]))
    );
  };
}
