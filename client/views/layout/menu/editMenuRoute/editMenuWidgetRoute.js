import EditMenuRoute from "./editMenuRoute";
import MenuColorEntity from "../color/menuColorEntity";
import MenuFileEntity from "../file/menuFileEntity";

import { useNewWidgetStore } from "../../../../stores/newWidgetStore";
import MenuInputEntity from "../input/menuInputEntity";
import MenuEventEntity from "../event/menuEventEntity";
import LayoutWidgetSensorDTO from "../../../../model/dto/layoutWidgetSensorDTO";
import LayoutWidgetDTO from "../../../../model/dto/layoutWidgetDTO";
import MenuSensorEntity from "../sensor/menuSensorEntity";
import EventDTO from "../../../../model/dto/eventDTO";

export default class EditMenuWidgetRoute extends EditMenuRoute {
  widgetMap = new Map([
    ["텍스트", [1, "Text"]],
    ["이미지", [2, "Img"]],
    ["꺾은선 그래프", [3, "LineChar"]],
    ["막대 그래프", [4, "BarChar"]],
    ["사각형", [5, "Rect"]],
    ["원", [6, "Circle"]],
    ["원 그래프", [7, "CircleChart"]],
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

    let widgetId = this.widgetMap.get(this.title)[0];

    for (let i = 0; i < route.length; i++) {
      if (route[i] instanceof MenuSensorEntity && route[i].currentValue[1]) {
        layoutWidgetSensorDtoList.push(
          new LayoutWidgetSensorDTO(
            layoutWidgetSensorSequence++,
            route[i].currentValue[1]
          )
        );
      } else if (route[i] instanceof MenuColorEntity)
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

    console.log(this.newWidgetStore.zIndex != 0
      ? this.newWidgetStore.zIndex
      : this.dashboardStore.currentDashboard.layoutDtoList[
          this.newWidgetStore.selectedLayout - 1
        ].layoutWidgetDtoList.length == 0
      ? 1
      : this.dashboardStore.currentDashboard.layoutDtoList[
          this.newWidgetStore.selectedLayout - 1
        ].layoutWidgetDtoList[
          this.dashboardStore.currentDashboard.layoutDtoList[
            this.newWidgetStore.selectedLayout - 1
          ].layoutWidgetDtoList.length - 1
        ].layoutWidgetZPos + 1);

    this.dashboardStore.addNewWidget(
      this.newWidgetStore.selectedLayout,
      new LayoutWidgetDTO(
        this.newWidgetStore.startPos,
        this.newWidgetStore.endPos,
        this.newWidgetStore.zIndex != 0
          ? this.newWidgetStore.zIndex
          : this.dashboardStore.currentDashboard.layoutDtoList[
              this.newWidgetStore.selectedLayout - 1
            ].layoutWidgetDtoList.length == 0
          ? 1
          : this.dashboardStore.currentDashboard.layoutDtoList[
              this.newWidgetStore.selectedLayout - 1
            ].layoutWidgetDtoList[
              this.dashboardStore.currentDashboard.layoutDtoList[
                this.newWidgetStore.selectedLayout - 1
              ].layoutWidgetDtoList.length - 1
            ].layoutWidgetZPos + 1,
        backgroundColor,
        property,
        eventDtoList,
        layoutWidgetSensorDtoList,
        widgetId
      )
    );

    this.newWidgetStore.zIndex = 0;

    console.log(
      new LayoutWidgetDTO(
        this.newWidgetStore.startPos,
        this.newWidgetStore.endPos,
        this.newWidgetStore.zIndex != 0
          ? this.newWidgetStore.zIndex
          : this.dashboardStore.currentDashboard.layoutDtoList[
              this.newWidgetStore.selectedLayout - 1
            ].layoutWidgetDtoList.length == 0
          ? 1
          : this.dashboardStore.currentDashboard.layoutDtoList[
              this.newWidgetStore.selectedLayout - 1
            ].layoutWidgetDtoList[
              this.dashboardStore.currentDashboard.layoutDtoList[
                this.newWidgetStore.selectedLayout - 1
              ].layoutWidgetDtoList.length - 1
            ].layoutWidgetZPos + 1,
        backgroundColor,
        property,
        eventDtoList,
        layoutWidgetSensorDtoList,
        widgetId
      )
    );
    this.editMenuStore.pop();
    this.newWidgetStore.deleteWidget();
  };
}
