import { defineStore } from "pinia";
import ModalController from "../views/pages/main/modalController";
import CreateDashboardRequestDTO from "../model/dto/createDashboardRequestDTO";
import CreateDashboardResponseDTO from "../model/dto/createDashboardResponseDTO";
import { createDashboard } from "../axios/dashboardListAxios";
import EditMenuRoot from "../views/layout/menu/editMenuRoute/editMenuRoot";
import EditMenuAdd from "../views/layout/menu/editMenuRoute/editMenuAdd";
import EditMenuText from "../views/layout/menu/editMenuRoute/editMenuText";
import EditMenuImage from "../views/layout/menu/editMenuRoute/editMenuImage";
import EditMenuLine from "../views/layout/menu/editMenuRoute/editMenuLine";
import EditMenuBar from "../views/layout/menu/editMenuRoute/editMenuBar";
import EditMenuSquare from "../views/layout/menu/editMenuRoute/editMenuSquare";
import EditMenuCircle from "../views/layout/menu/editMenuRoute/editMenuCircle";
import EditMenuCircleChart from "../views/layout/menu/editMenuRoute/editMenuCircleChart";

export const useEditMenuStore = defineStore("editMenuStore", {
  state: () => {
    let editMenuRouter = [];
    let saveModalController = new ModalController("대시보드 생성");
    let widgetParser = {
      Text: () => new EditMenuText(),
      Img: () => new EditMenuImage(),
      LineChart: () => new EditMenuLine(),
      BarChart: () => new EditMenuBar(),
      Rect: () => new EditMenuSquare(),
      Circle: () => new EditMenuCircle(),
      CircleChart: () => new EditMenuCircleChart(),
    };
    return {
      editMenuRouter,
      saveModalController,
      widgetParser,
    };
  },
  getters: {
    curruentRoute() {
      if (!this.editMenuRouter[this.editMenuRouter.length - 1]) return;
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
    moveTo(widgetType) {
      this.editMenuRouter = [
        new EditMenuRoot(),
        new EditMenuAdd(),
        this.widgetParser[widgetType](),
      ];
    },
  },
});
