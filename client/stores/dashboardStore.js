import { defineStore } from "pinia";
import { getDashboard } from "../axios/dashboardListAxios";
import CreateDashboardResponseDTO from "../model/dto/createDashboardResponseDTO";

export const useDashboardStore = defineStore("dashboardStore", {
  state: () => {
    let dashboardList = new Map([
      ["dashboard1", "dashboard1"],
      ["dashboard2", "dashboard2"],
      ["dashboard3", "dashboard3"],
    ]);
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
        this.currentDashboard = CreateDashboardResponseDTO.fromJson(
          response.data
        );
        console.log(this.currentDashboard);
      });
    },
    setDashboardList(dashboardList) {
      this.dashboardList.clear();
      for (let dashboard of dashboardList) {
        console.log(dashboard);
        this.dashboardList.set(
          dashboard["dashboardId"],
          dashboard["dashboardName"]
        );
      }
      this.selectedDashBoard = Array.from(this.dashboardList.keys())[0];
    },
    addNewWidget(layoutWidget) {
      this.currentDashboard.layoutList.push(layoutWidget);
    },
  },
});
