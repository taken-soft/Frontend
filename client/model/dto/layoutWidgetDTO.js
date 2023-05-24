import EventDTO from "./eventDTO";
import LayoutWidgetSensorDTO from "./layoutWidgetSensorDTO";

export default class LayoutWidgetDTO {
  layoutWidgetStartPos;
  layoutWidgetEndPos;
  layoutWidgetZPos;
  layoutWidgetColor;
  layoutWidgetProperty;
  eventDtoList;
  layoutWidgetSensorDtoList;
  widgetId;

  constructor(
    layoutWidgetStartPos,
    layoutWidgetEndPos,
    layoutWidgetZPos,
    layoutWidgetColor,
    layoutWidgetProperty,
    eventDtoList,
    layoutWidgetSensorDtoList,
    widgetId
  ) {
    this.layoutWidgetStartPos = layoutWidgetStartPos;
    this.layoutWidgetEndPos = layoutWidgetEndPos;
    this.layoutWidgetZPos = layoutWidgetZPos;
    this.layoutWidgetColor = layoutWidgetColor;
    this.layoutWidgetProperty = layoutWidgetProperty;
    this.eventDtoList = eventDtoList;
    this.layoutWidgetSensorDtoList = layoutWidgetSensorDtoList;
    this.widgetId = widgetId;
  }

  toJson() {
    return {
      layoutWidgetStartPos: this.layoutWidgetStartPos,
      layoutWidgetEndPos: this.layoutWidgetEndPos,
      layoutWidgetZPos: this.layoutWidgetZPos,
      layoutWidgetColor: this.layoutWidgetColor,
      layoutWidgetProperty: this.layoutWidgetProperty,
      eventDtoList: this.eventDtoList.map((e) => e.toJson()),
      layoutWidgetSensorDtoList: this.layoutWidgetSensorDtoList.map((e) =>
        e.toJson()
      ),
      widgetId: this.widgetId,
    };
  }

  static fromJson = (json) => {
    let eventDtoList = !json["eventDtoList"]
      ? []
      : Object.entries(json["eventDtoList"]);
    let layoutWidgetSensorDtoList = Object.entries(
      json["layoutWidgetSensorDtoList"]
    );
    return new LayoutWidgetDTO(
      json["layoutWidgetStartPos"],
      json["layoutWidgetEndPos"],
      json["layoutWidgetZPos"],
      json["layoutWidgetColor"],
      json["layoutWidgetProperty"],
      eventDtoList.map((e) => EventDTO.fromJson(e[1])),
      layoutWidgetSensorDtoList.map((e) =>
        LayoutWidgetSensorDTO.fromJson(e[1])
      ),
      json["widgetId"]
    );
  };
}
