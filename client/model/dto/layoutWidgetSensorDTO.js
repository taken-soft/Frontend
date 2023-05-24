export default class LayoutWidgetSensorDTO {
  layoutWidgetSensorSequence;
  sensorId;

  constructor(layoutWidgetSensorSequence, sensorId) {
    this.layoutWidgetSensorSequence = layoutWidgetSensorSequence;
    this.sensorId = sensorId;
  }

  toJson() {
    return {
      layoutWidgetSensorSequence: this.layoutWidgetSensorSequence,
      sensorId: this.sensorId,
    };
  }

  static fromJson(json) {
    return LayoutWidgetSensorDTO(
      json["layoutWidgetSensorSequence"],
      json["sensorId"]
    );
  }
}
