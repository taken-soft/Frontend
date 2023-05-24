import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuColorEntity from "../color/menuColorEntity";
import MenuSensorEntity from "../sensor/menuSensorEntity";

import EditMenuWidgetRoute from "./editMenuWidgetRoute";

export default class EditMenuLine extends EditMenuWidgetRoute {
  constructor() {
    super();
    this.title = "꺾은선 그래프";
    this.newWidgetStore.setWidgetType(this.widgetMap.get(this.title));
  }
  sensorList = [
    new MenuSensorEntity("센서", null),
    new MenuColorEntity("꺾은선 색상", null),
  ];
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
    this.sensorList.push(
      new MenuSensorEntity("센서", null),
      new MenuColorEntity("꺾은선 색상", null)
    );
    this.editMenuStore.refresh();
  }
}
