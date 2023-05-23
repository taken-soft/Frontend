import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuColorEntity from "../color/menuColorEntity";
import MenuSensorEntity from "../sensor/menuSensorEntity";

import EditMenuWidgetRoute from "./editMenuWidgetRoute";
import MenuValueEntity from "../menuValueEntity";
import LayoutWidgetSensorDTO from "../../../../model/dto/layoutWidgetSensorDTO";

export default class EditMenuBar extends EditMenuWidgetRoute {
  title = "막대 그래프";
  sensorList = [
    new MenuSensorEntity("센서", null, null, ""),
    new MenuColorEntity("막대 색상", null, null, ""),
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
      new MenuColorEntity("막대 색상", null)
    );
    this.editMenuStore.refresh();
  }

  addWidget = () => {
    let route = this.route();
    let layoutWidgetSensorDtoList = [];
    let layoutWidgetSensorSequence = 1;
    
    for (let i = 0; i < route.length; i++) {
      if (!(route[i] instanceof MenuValueEntity)) continue;
      if (route[i] instanceof MenuSensorEntity)
        layoutWidgetSensorDtoList.push(
          new LayoutWidgetSensorDTO(
            layoutWidgetSensorSequence++,
            route[i].currentValue[1]
          )
        );
    }
    console.log(layoutWidgetSensorDtoList);
  };
}
