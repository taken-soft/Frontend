import LayoutWidgetDTO from "./layoutWidgetDTO";

export default class LayoutDTO {
  layoutId;
  layoutSequence;
  layoutWidgetDTOList;

  constructor(layoutId, layoutSequence, layoutWidgetDTOList) {
    this.layoutId = layoutId;
    this.layoutSequence = layoutSequence;
    this.layoutWidgetDTOList = layoutWidgetDTOList;
  }

  toJson() {
    return {
      layoutId: this.layoutId,
      layoutSequence: this.layoutSequence,
      layoutWidgetDTOList: this.layoutWidgetDTOList.map((e) => e.toJson()),
    };
  }

  static fromJson = (json) => {
    return new LayoutWidgetDTO(
      json["layoutId"],
      json["layoutSequence"],
      json["layoutWidgetDTOList"].map((e) => LayoutWidgetDTO.fromJson(e))
    );
  };
}
