import SensorValueDTO from "./sensorValueDTO";

export default class GetSensorDataResponseDTO {
  sensorId;
  sensorValues;

  constructor(sensorId, sensorValues) {
    this.sensorId = sensorId;
    this.sensorValues = sensorValues;
  }

  static fromJson = (json) => {
    return new GetSensorDataResponseDTO(
      json.get("sensorId"),
      json.get("sensorValues").map((e) => SensorValueDTO.fromJson(e))
    );
  };
}