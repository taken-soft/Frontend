import LayoutWidgetDTO from "./layoutWidgetDTO";

export default class LayoutDTO {
  layoutId;
  layoutSequence;
  layoutWidgetDtoList;

  constructor(layoutId, layoutSequence, layoutWidgetDtoList) {
    this.layoutId = layoutId;
    this.layoutSequence = layoutSequence;
    this.layoutWidgetDtoList = layoutWidgetDtoList;
  }

  toJson() {
    return {
      layoutId: this.layoutId,
      layoutSequence: this.layoutSequence,
      layoutWidgetDtoList: this.layoutWidgetDtoList.map((e) => e.toJson()),
    };
  }

  static fromJson = (json) => {
    let layoutWidgetDtoList = Object.entries(json["layoutWidgetDtoList"])
    return new LayoutDTO(
      json["layoutId"],
      json["layoutSequence"],
      layoutWidgetDtoList.map((e) => LayoutWidgetDTO.fromJson(e[1]))
    );
  };
}
