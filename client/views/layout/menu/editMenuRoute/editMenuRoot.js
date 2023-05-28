import EditMenuAdd from "./editMenuAdd";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import EditMenuRoute from "./editMenuRoute";

import {
  saveDashboard,
  getDashboardList,
  deleteDashboard,
} from "../../../../axios/dashboardListAxios";
import MenuInputItemEntity from "../inputItem/MenuInputItemEntity";

export default class EditMenuRoot extends EditMenuRoute {
  title = this.dashboardStore.getSelectedDashBoard;

  onBackPressed = () => {
    getDashboardList().then((result) => {
      this.dashboardStore.setDashboardList(result.data);
    });
    this.modeStore.changeMode();
    this.modeStore.startInterval(setInterval(this.widgetDataStore.getSensorDataList, 1000));
    this.editMenuStore.clear();
  };

  route = () => {
    return [
      new MenuInputItemEntity(
        this.title,
        "back",
        "대시보드 명",
        this.title,
        (event) => {
          this.title = event.target.value;
          this.dashboardStore.setDashboardTitle(event.target.value);
        },
        null,
        () => {
          this.onBackPressed();
        }
      ),
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
