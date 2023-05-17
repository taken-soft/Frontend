import EditMenuAdd from './editMenuAdd';

import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";

export default class EditMenuRoot {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();

  route = [
    new MenuItemEntity(
      this.dashboardStore.getSelectedDashBoard,
      "back",
      null,
      () => {
        this.modeStore.changeMode();
        this.editMenuStore.clear();
      },
    ),
    new MenuItemEntity(
      "위젯 추가",
      "add",
      () => this.editMenuStore.push(new EditMenuAdd().route),
      null,
    ),
    new MenuButtonEntity(
      "데시보드 저장",
      "save",
      () => {
        this.modeStore.changeMode();
        this.editMenuStore.clear();
      },
    ),
    new MenuButtonEntity(
      "데시보드 삭제",
      "delete",
      () => {
        this.modeStore.changeMode();
        this.editMenuStore.clear();
      },
    ),
  ];
}