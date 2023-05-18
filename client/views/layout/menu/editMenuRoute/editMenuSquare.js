import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuSensorEntity from "../sensor/menuSenorEntity";

export default class EditMenuSquare {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();

  route = [
    new MenuItemEntity(
      "사각형",
      "back",
      null,
      () => this.editMenuStore.pop(),
    ),
    new MenuSensorEntity(
      "센서",
      null,
    ),
    new MenuButtonEntity(
      "센서추가",
      "add",
      () => this.addSensor(),
    ),
  ];

  addSensor() {
    const button = this.route.pop();
    this.route.push(
      new MenuSensorEntity(
        "센서",
        null,
      ),
      button,
    );
    this.editMenuStore.refresh();
  }
}