import { defineStore } from "pinia";
import { getDashboard } from "../axios/dashboardListAxios";
import GetDashboardResponseDTO from "../model/dto/getDashboardResponseDTO";

export const useDashboardStore = defineStore("dashboardStore", {
  state: () => {
    let dashboardList = new Map();
    let currentDashboard;
    return {
      dashboardList,
      selectedDashBoard: Array.from(dashboardList.keys())[0],
      currentDashboard,
    };
  },
  getters: {
    getSelectedDashBoard() {
      return this.dashboardList.get(this.selectedDashBoard);
    },
  },
  actions: {
    setSelectedDashBoard(dashboardId) {
      this.selectedDashBoard = dashboardId;
      getDashboard(dashboardId).then((response) => {
        console.log("getDashboard");
        console.log(response.data);
        this.currentDashboard = GetDashboardResponseDTO.fromJson(response.data);
      });
    },
    setDashboardList(newDashboardList) {
      this.dashboardList.clear();
      for (let dashboard of newDashboardList) {
        console.log(dashboard);
        this.dashboardList.set(
          dashboard["dashboardId"],
          dashboard["dashboardName"]
        );
      }
      this.selectedDashBoard = Array.from(this.dashboardList.keys())[0];
      this.setSelectedDashBoard(Array.from(this.dashboardList.keys())[0]);
    },
    addNewWidget(selectedLayout, layoutWidget) {
      console.log(this.currentDashboard.layoutDtoList);
      console.log(selectedLayout);
      this.currentDashboard.layoutDtoList[selectedLayout].layoutWidgetDtoList.push(layoutWidget);
    },
  },
});
