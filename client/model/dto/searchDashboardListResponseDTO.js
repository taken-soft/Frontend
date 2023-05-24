import SearchDashboardDTO from "./searchDashboardDTO";

export default class SearchDashboardListResponseDTO {
  dashBoardList;

  constructor(dashBoardList) {
    this.dashBoardList = dashBoardList;
  }

  static fromJson = (json) => {
    let dashBoardList = !json ? [] : Object.entries(json);
    return new SearchDashboardListResponseDTO(
      dashBoardList.map((e) => SearchDashboardDTO.fromJson(e))
    );
  };
}
