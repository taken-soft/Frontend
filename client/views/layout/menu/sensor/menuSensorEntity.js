import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuValueEntity from "../menuValueEntity";

export default class MenuSensorEntity extends MenuValueEntity {
  currentValue = ["없음", "없음"];
  device = new MenuDropdownEntity(
    "장치",
    null,
    ["없음", "장치1", "장치2", "장치3"],
    (value) => this.onDeviceChange(value),
    "없음"
  );
  sensor = new MenuDropdownEntity(
    "센서",
    null,
    ["없음", "센서1", "센서2", "센서3"],
    (value) => this.onSensorChange(value),
    "없음"
  );
  onDeviceChange(value) {
    this.currentValue[0] = value;
    this.currentValue[1] = "없음";
  }
  onSensorChange(value) {
    this.currentValue[1] = value;
  }
}
