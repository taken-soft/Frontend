import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuSensorEntity from "../sensor/menuSensorEntity";

import EditMenuWidgetRoute from "./editMenuWidgetRoute";

export default class EditMenuBar extends EditMenuWidgetRoute {
  constructor() {
    super();
    this.title = "막대 그래프";
    this.newWidgetStore.setWidgetType(this.widgetMap.get(this.title));
  }

  sensorList = [new MenuSensorEntity("센서")];
  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () =>
        this.editMenuStore.pop()
      ),
      ...this.sensorList,
      new MenuButtonEntity("센서추가", "add", () => this.addSensor()),
      this.colorInput,
      new MenuButtonEntity("위젯추가", "add", () => this.addWidget()),
    ];
  };

  addSensor() {
    this.sensorList.push(new MenuSensorEntity("센서", null));
    this.editMenuStore.refresh();
  }
}
