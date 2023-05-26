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
        this.currentDashboard = GetDashboardResponseDTO.fromJson(response.data);
        console.log("setSelectedDashBoard");
        console.log(this.currentDashboard);
      });
      console.log("this.currentDashboard.layoutDtoList");
      console.log(this.currentDashboard.layoutDtoList);
    },
    setDashboardList(newDashboardList) {
      this.dashboardList.clear();
      for (let dashboard of newDashboardList) {
        this.dashboardList.set(
          dashboard["dashboardId"],
          dashboard["dashboardName"]
        );
      }
//      this.selectedDashBoard = Array.from(this.dashboardList.keys())[0];
      this.setSelectedDashBoard(Array.from(this.dashboardList.keys())[0]);
    },
    addNewWidget(selectedLayout, layoutWidget) {
      console.log("this.currentDashboard.layoutDtoList");
      console.log(this.currentDashboard.layoutDtoList);
      console.log(selectedLayout);
      this.currentDashboard.layoutDtoList[selectedLayout - 1].layoutWidgetDtoList.push(layoutWidget);
    },
    setDashboardTitle(value) {
      this.currentDashboard.dashboardTitle = value;
      console.log(this.currentDashboard.dashboardTitle);
    }
  },
});
