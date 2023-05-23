import { defineStore } from "pinia";
import { getDashboard } from "../axios/dashboardListAxios";
import GetDashboardResponseDTO from "../model/dto/getDashboardResponseDTO";

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
        console.log(response.data);
        this.currentDashboard = GetDashboardResponseDTO.fromJson(response.data);
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
      this.setSelectedDashBoard(Array.from(this.dashboardList.keys())[0]);
    },
    addNewWidget(selectedLayout, layoutWidget) {
      this.currentDashboard.layoutList[selectedLayout].layoutWidgetDtoList.push(layoutWidget);
    },
  },
});
