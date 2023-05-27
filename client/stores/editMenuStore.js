import { defineStore } from "pinia";
import ModalController from "../views/pages/main/modalController";
import CreateDashboardRequestDTO from "../model/dto/createDashboardRequestDTO";
import CreateDashboardResponseDTO from "../model/dto/createDashboardResponseDTO";
import { createDashboard } from "../axios/dashboardListAxios";
import EditMenuRoot from "../views/layout/menu/editMenuRoute/editMenuRoot";
import EditMenuAdd from "../views/layout/menu/editMenuRoute/editMenuAdd";


export const useEditMenuStore = defineStore("editMenuStore", {
  state: () => {
    let editMenuRouter = [];
    let saveModalController = new ModalController("대시보드 생성");
    return {
      editMenuRouter,
      saveModalController,
    };
  },
  getters: {
    curruentRoute() {
      return this.editMenuRouter[this.editMenuRouter.length - 1].route();
    },
  },
  actions: {
    clear() {
      this.editMenuRouter = [];
    },
    push(editMenu) {
      this.editMenuRouter.push(editMenu);
    },
    pop() {
      this.editMenuRouter.pop();
    },
    replace(editMenu) {
      this.editMenuRouter.pop();
      this.editMenuRouter.push(editMenu);
    },
    refresh() {
      this.editMenuRouter.push(this.editMenuRouter.pop());
    },
    moveTo(editMenu) {
      this.editMenuRouter = [new EditMenuRoot(), new EditMenuAdd(), editMenu];
    }
  },
});
