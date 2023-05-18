import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";

import EditMenuSensorText from "./editMenuSensorText";

export default class EditMenuText {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();

  route = [
    new MenuItemEntity(
      "텍스트",
      "back",
      null,
      () => this.editMenuStore.pop(),
    ),
    new MenuDropdownEntity(
      "장치",
      null,
      ["없음", "장치1", "장치2", "장치3",],
      (value) => {
        if(value != "없음") {
          this.onNotNullSelect();
        }
      },
    ),
    new MenuInputEntity(
      "텍스트",
      null,
      "텍스트",
    ),
  ];

  onNotNullSelect() {
    this.editMenuStore.replace(new EditMenuSensorText().route)
  }
}