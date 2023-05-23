import EventDTO from "./eventDTO";

export default class LayoutWidgetDTO {
  layoutWidgetStartPos;
  layoutWidgetEndPos;
  layoutWidgetZPos;
  layoutWidgetColor;
  layoutWidgetProperty;
  eventDtoList;

  constructor(
    layoutWidgetStartPos,
    layoutWidgetEndPos,
    layoutWidgetZPos,
    layoutWidgetColor,
    layoutWidgetProperty,
    eventDtoList
  ) {
    this.layoutWidgetStartPos = layoutWidgetStartPos;
    this.layoutWidgetEndPos = layoutWidgetEndPos;
    this.layoutWidgetZPos = layoutWidgetZPos;
    this.layoutWidgetColor = layoutWidgetColor;
    this.layoutWidgetProperty = layoutWidgetProperty;
    this.eventDtoList = eventDtoList;
  }

  toJson() {
    return {
      layoutWidgetStartPos: this.layoutWidgetStartPos,
      layoutWidgetEndPos: this.layoutWidgetEndPos,
      layoutWidgetZPos: this.layoutWidgetZPos,
      layoutWidgetColor: this.layoutWidgetColor,
      layoutWidgetProperty: this.layoutWidgetProperty,
      eventDtoList: this.eventDtoList.map((e) => e.toJson()),
    };
  }

  static fromJson = (json) => {
    return new LayoutWidgetDTO(
      json.get("layoutWidgetStartPos"),
      json.get("layoutWidgetEndPos"),
      json.get("layoutWidgetZPos"),
      json.get("layoutWidgetColor"),
      json.get("layoutWidgetProperty"),
      json.get("eventDtoList").map((e) => new EventDTO(e))
    );
  };
}
