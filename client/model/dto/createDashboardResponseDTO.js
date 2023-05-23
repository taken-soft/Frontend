import LayoutDTO from "./layoutDTO";

export default class CreateDashboardResponseDTO {
  dashboardId;
  layoutDtos;

  constructor(dashboardId, layoutDtos) {
    this.dashboardId = dashboardId;
    this.layoutDtos = layoutDtos;
  }

  static fromJson = (json) => {
    let layoutDtos = [];
    for(let layoutDto in json["layoutDtos"]) {
      layoutDtos.push(LayoutDTO.fromJson(layoutDto));
    }
    return new CreateDashboardResponseDTO(
      json["dashboardId"],
      layoutDtos//json["layoutDtos"].map((e) => LayoutDTO.fromJson(e))
    );
  };
}
