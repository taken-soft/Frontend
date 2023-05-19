import GetSensorDataResponseDTO from "./getSensorDataResponseDTO";
import SensorValueDTO from "./sensorValueDTO";

export default class GetSensorDataListResponseDTO {
  realtimeSensorDataList;

  constructor(realtimeSensorDataList) {
    this.realtimeSensorDataList = realtimeSensorDataList;
  }

  static fromJson = (json) => {
    return new GetSensorDataListResponseDTO(
      json.get("realtimeSensorDataList").map((e) => GetSensorDataResponseDTO(e))
    );
  };
}
