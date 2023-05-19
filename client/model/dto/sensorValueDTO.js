export default class SensorValueDTO {
  time;
  value;
  constructor(time, value) {
    this.time = time;
    this.value = value;
  }  
  
  static fromJson = (json) => {
    return new SensorValueDTO(
      json.get("time"),
      json.get("value"),
    );
  }
}