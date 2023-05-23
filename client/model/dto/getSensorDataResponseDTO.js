import SensorValueDTO from "./sensorValueDTO";

export default class GetSensorDataResponseDTO {
  sensorId;
  sensorValues;

  constructor(sensorId, sensorValues) {
    this.sensorId = sensorId;
    this.sensorValues = sensorValues;
  }

  static fromJson = (json) => {
    let sensorValues = Object.entries(json["sensorValues"])
    return new GetSensorDataResponseDTO(
      json["sensorId"],
      sensorValues.map((e) => SensorValueDTO.fromJson(e[1]))
    );
  };
}