import LayoutWidgetDTO from "./layoutWidgetDTO";

export default class LayoutDTO {
  id;
  sequence;
  layoutWidgetDtoList;

  constructor(id, sequence, layoutWidgetDtoList) {
    this.id = id;
    this.sequence = sequence;
    this.layoutWidgetDtoList = layoutWidgetDtoList;
  }

  static fromJson = (json) => {
    return new LayoutDTO(
      json.get("id"),
      json.get("sequence"),
      json.get("layoutWidgetDtoList").map((e) => LayoutWidgetDTO.fromJson(e))
    );
  };
}
