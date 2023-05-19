import SearchDashboardDTO from "./searchDashboardDTO";

export default class SearchDashboardListResponseDTO {
  dashBoardList;

  constructor(dashBoardList) {
    this.dashBoardList = dashBoardList;
  }

  static fromJson = (json) => {
    return new SearchDashboardListResponseDTO(
      json.map(e => SearchDashboardDTO.fromJson(e))
    );
  };
}
