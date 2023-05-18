import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuSensorEntity from "../sensor/menuSenorEntity";

export default class EditMenuSensorText {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();

  route = [
    new MenuItemEntity("텍스트", "back", null, () => this.editMenuStore.pop()),
    new MenuSensorEntity("센서", null),
    new MenuButtonEntity("센서추가", "add", () => this.addSensor()),
  ];

  addSensor() {
    this.route.splice(1, 0, new MenuSensorEntity("센서", null));
    this.editMenuStore.refresh();
  }
}
