import MenuValueEntity from "../menuValueEntity";
import Device from "../../../../json/Devices.json"

export default class MenuSensorEntity extends MenuValueEntity {
  currentValue = ["장비1", ""];
  device = Device;
  sensor = () => Device[this.currentValue[0]];

  onDeviceChange(value) {
    this.currentValue[0] = value;
    this.currentValue[1] = "";
  }
  onSensorChange(value) {
    this.currentValue[1] = value;
    console.log(this.currentValue);
  }
}
