import MenuEntity from "../menuEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";

export default class MenuSensorEntity extends MenuEntity {
  device = new MenuDropdownEntity(
    "장치",
    null,
    ["없음", "장치1", "장치2", "장치3"],
    () => console.log("장치")
  );
  sensor = new MenuDropdownEntity(
    "센서",
    null,
    ["없음", "장치1", "장치2", "장치3"],
    () => console.log("센서")
  );
}
