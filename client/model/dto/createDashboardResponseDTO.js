import LayoutDTO from "./layoutDTO";

export default class CreateDashboardResponseDTO {
  dashboardId;
  layoutDtos;

  constructor(dashboardId, layoutDtos) {
    this.dashboardId = dashboardId;
    this.layoutDtos = layoutDtos;
  }

  static fromJson = (json) => {
    return new CreateDashboardResponseDTO(
      json.get("dashboardId"),
      json.get("layoutDtos").map((e) => LayoutDTO.fromJson(e))
    );
  };
}
