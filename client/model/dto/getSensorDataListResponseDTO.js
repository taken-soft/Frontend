import GetSensorDataResponseDTO from "./getSensorDataResponseDTO";
import SensorValueDTO from "./sensorValueDTO";

export default class GetSensorDataListResponseDTO {
  realtimeSensorDataList;

  constructor(realtimeSensorDataList) {
    this.realtimeSensorDataList = realtimeSensorDataList;
  }

  static fromJson = (json) => {
    let realtimeSensorDataList = Object.entries(json["realtimeSensorDataList"])
    return new GetSensorDataListResponseDTO(
      realtimeSensorDataList.map((e) => GetSensorDataResponseDTO.fromJson(e))
    );
  };
}
