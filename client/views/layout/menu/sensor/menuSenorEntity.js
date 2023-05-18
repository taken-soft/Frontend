import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuValueEntity from "../menuValueEntity";

export default class MenuSensorEntity extends MenuValueEntity {
  currentValue = ["없음", "없음"];
  device = new MenuDropdownEntity(
    "장치",
    null,
    ["없음", "장치1", "장치2", "장치3"],
    () => console.log("장치"),
    "없음",
  );
  sensor = new MenuDropdownEntity(
    "센서",
    null,
    ["없음", "장치1", "장치2", "장치3"],
    () => console.log("센서"),
    "없음",
  );
}
