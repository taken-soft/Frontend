import EditMenuAdd from "./editMenuAdd";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import EditMenuRoute from "./editMenuRoute";

import {
  saveDashboard,
  getDashboardList,
  deleteDashboard,
} from "../../../../axios/dashboardListAxios";

export default class EditMenuRoot extends EditMenuRoute {
  title = this.dashboardStore.getSelectedDashBoard;

  onBackPressed = () => {
    getDashboardList().then((result) => {
      this.dashboardStore.setDashboardList(result.data);
    });
    this.modeStore.changeMode();
    this.editMenuStore.clear();
  };

  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () => {
        this.onBackPressed();
      }),
      new MenuItemEntity(
        "위젯 추가",
        "add",
        () => this.editMenuStore.push(new EditMenuAdd()),
        null
      ),
      new MenuButtonEntity("데시보드 저장", "save", async () => {
        await saveDashboard(this.dashboardStore.currentDashboard);
        this.onBackPressed();
      }),
      new MenuButtonEntity("데시보드 삭제", "delete", async () => {
        await deleteDashboard(this.dashboardStore.selectedDashBoard);
        this.onBackPressed();
      }),
    ];
  };
}
