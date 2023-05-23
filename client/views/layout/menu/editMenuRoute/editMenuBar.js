import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuSensorEntity from "../sensor/menuSensorEntity";

import EditMenuWidgetRoute from "./editMenuWidgetRoute";
import MenuEventEntity from "../event/menuEventEntity";
import LayoutWidgetSensorDTO from "../../../../model/dto/layoutWidgetSensorDTO";
import LayoutWidgetDTO from "../../../../model/dto/layoutWidgetDTO";
import MenuColorEntity from "../color/menuColorEntity";
import EventDTO from "../../../../model/dto/eventDTO";

export default class EditMenuBar extends EditMenuWidgetRoute {
  title = "막대 그래프";
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

  addWidget = () => {
    let route = this.route();

    let layoutWidgetSensorDtoList = [];
    let layoutWidgetSensorSequence = 1;

    let backgroundColor;

    for (let i = 0; i < route.length; i++) {
      if (route[i] instanceof MenuSensorEntity)
        layoutWidgetSensorDtoList.push(
          new LayoutWidgetSensorDTO(
            layoutWidgetSensorSequence++,
            route[i].currentValue[1]
          )
        );
      else if (route[i] instanceof MenuColorEntity)
        backgroundColor = route[i].currentValue;
      // else if(route[i] instanceof MenuEventEntity)
      //   eventDtoList.push(new EventDTO(
      //     route[i].currentValue[2],
      //     route[i].currentValue[3],
      //     route[i].currentValue[1],
      //     route[i].currentValue[0]
      //   ))
    }

    console.log(
      new LayoutWidgetDTO(
        this.newWidgetStore.startPos,
        this.newWidgetStore.endPos,
        0,
        backgroundColor,
        null,
        null,
        layoutWidgetSensorDtoList
      )
    );
  };
}
