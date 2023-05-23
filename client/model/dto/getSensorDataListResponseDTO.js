import GetSensorDataResponseDTO from "./getSensorDataResponseDTO";
import SensorValueDTO from "./sensorValueDTO";

export default class GetSensorDataListResponseDTO {
  realtimeSensorDataList;

  constructor(realtimeSensorDataList) {
    this.realtimeSensorDataList = realtimeSensorDataList;
  }

  static fromJson = (json) => {
    return new GetSensorDataListResponseDTO(
      json["realtimeSensorDataList"].map((e) => GetSensorDataResponseDTO.fromJson(e))
    );
  };
}
