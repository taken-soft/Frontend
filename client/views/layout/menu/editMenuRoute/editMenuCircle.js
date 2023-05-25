import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuSensorEntity from "../sensor/menuSensorEntity";
import MenuEventEntity from "../event/menuEventEntity";

import EditMenuWidgetRoute from "./editMenuWidgetRoute";

import Device from "../../../../json/Devices.json";
import Calculate from "../../../../json/Calculate.json"

export default class EditMenuCircle extends EditMenuWidgetRoute {
  constructor() {
    super();
    this.title = "원";
    this.newWidgetStore.setWidgetType(this.widgetMap.get(this.title)[1]);
  }
  sensorList = [new MenuSensorEntity("센서", null)];
  eventList = [];

  vanillaDropdown = new MenuDropdownEntity(
    "장치",
    null,
    Device,
    (value) => this.changeIsVanilla(value == "없음"),
    "없음"
  );

  calculateDropdown = new MenuDropdownEntity(
    "산술식",
    null,
    Calculate,
    null,
    "평균"
  );

  route = () => {
    if (this.isVanilla) {
      return [
        new MenuItemEntity(this.title, "back", null, () =>
          this.editMenuStore.pop()
        ),
        this.vanillaDropdown,
        this.colorInput,
        new MenuButtonEntity("위젯추가", "add", () => this.addWidget()),
      ];
    } else {
      return [
        new MenuItemEntity(this.title, "back", null, () =>
          this.editMenuStore.pop()
        ),
        ...this.sensorList,
        new MenuButtonEntity("센서추가", "add", () => this.addSensor()),
        this.calculateDropdown,        
        ...this.eventList,
        new MenuButtonEntity("이벤트추가", "add", () => this.addEvent()),
        this.colorInput,
        new MenuButtonEntity("위젯추가", "add", () => this.addWidget()),
      ];
    }
  };

  addSensor() {
    this.sensorList.push(new MenuSensorEntity("센서", null));
    this.editMenuStore.refresh();
  }
  addEvent() {
    this.eventList.push(new MenuEventEntity("이벤트", null));
    this.editMenuStore.refresh();
  }
}
