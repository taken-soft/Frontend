import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboardStore", {
  state: () => {
    let dashboardList = new Map([
      ["dashboard1", "dashboard1"],
      ["dashboard2", "dashboard2"],
      ["dashboard3", "dashboard3"],
    ]);
    return {
      dashboardList,
      selectedDashBoard: Array.from(dashboardList.keys())[0],
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
    },
  },
});
