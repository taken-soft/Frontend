import EditMenuRoute from "./editMenuRoute";
import MenuColorEntity from "../color/menuColorEntity";
import MenuFileEntity from "../file/menuFileEntity"

import { useNewWidgetStore } from "../../../../stores/newWidgetStore";
import MenuInputEntity from "../input/menuInputEntity";
import MenuEventEntity from "../event/menuEventEntity";
import LayoutWidgetSensorDTO from "../../../../model/dto/layoutWidgetSensorDTO";
import LayoutWidgetDTO from "../../../../model/dto/layoutWidgetDTO";
import MenuSensorEntity from "../sensor/menuSensorEntity";
import EventDTO from "../../../../model/dto/eventDTO";

export default class EditMenuWidgetRoute extends EditMenuRoute {
  widgetMap = new Map([
    ["텍스트", "Text"],
    ["이미지", "Img"],
    ["사각형", "Rect"],
    ["원", "Circle"],
    ["막대 그래프", "BarChar"],
    ["꺾은선 그래프", "LineChar"],
  ]);

  isVanilla = true;
  backgroundColor;

  colorInput = new MenuColorEntity("배경색상", null);

  newWidgetStore = useNewWidgetStore();

  changeIsVanilla(value) {
    this.isVanilla = value;
    this.editMenuStore.refresh();
  }

  addWidget = () => {
    let route = this.route();

    let layoutWidgetSensorDtoList = [];
    let layoutWidgetSensorSequence = 1;

    let backgroundColor;

    let property = "";

    let eventDtoList = [];

    let widgetId = 1; // widgetMap[this.title]

    for (let i = 0; i < route.length; i++) {
      if (route[i] instanceof MenuSensorEntity && !route[i].currentValue[1])
        layoutWidgetSensorDtoList.push(
          new LayoutWidgetSensorDTO(
            layoutWidgetSensorSequence++,
            route[i].currentValue[1]
          )
        );
      else if (route[i] instanceof MenuColorEntity)
        backgroundColor = route[i].currentValue;
      else if (route[i] instanceof MenuEventEntity)
        eventDtoList.push(
          new EventDTO(
            route[i].currentValue[2],
            route[i].currentValue[3],
            route[i].currentValue[1],
            route[i].currentValue[0]
          )
        );
      else if (route[i] instanceof MenuInputEntity)
        property = route[i].currentValue;
      else if (route[i] instanceof MenuFileEntity)
        property = route[i].currentValue;
    }

    this.dashboardStore.addNewWidget(
      this.newWidgetStore.selectedLayout,
      new LayoutWidgetDTO(
        this.newWidgetStore.startPos,
        this.newWidgetStore.endPos,
        0,
        backgroundColor,
        property,
        eventDtoList,
        layoutWidgetSensorDtoList,
        widgetId
      )
    );

    console.log(
      new LayoutWidgetDTO(
        this.newWidgetStore.startPos,
        this.newWidgetStore.endPos,
        0,
        backgroundColor,
        property,
        eventDtoList,
        layoutWidgetSensorDtoList,
        widgetId
      )
    );
    this.editMenuStore.pop();
  };
}
