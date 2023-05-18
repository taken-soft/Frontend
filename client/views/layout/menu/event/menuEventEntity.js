import MenuColorEntity from "../color/menuColorEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuValueEntity from "../menuValueEntity";

export default class MenuEventEntity extends MenuValueEntity {
  currentValue = ["없음", null, null, null];
  type = new MenuDropdownEntity(
    "장치",
    null,
    ["없음", "장치1", "장치2", "장치3"],
    (value) => this.onTypeChange(value),
    "없음"
  );
  color = new MenuColorEntity(
    "색상",
    null,
    (value) => this.onColorChange(value),
    null
  );
  over = new MenuInputEntity(
    "임계값-초과",
    null,
    (value) => this.onOverChange(value),
    "초과"
  );
  less = new MenuInputEntity(
    "임계값-이하",
    null,
    (value) => this.onLessChange(value),
    "이하"
  );
  onTypeChange(value) {
    this.currentValue[0] = value;
  }
  onColorChange(value) {
    this.currentValue[1] = value;
  }
  onOverChange(value) {
    this.currentValue[2] = value;
  }
  onLessChange(value) {
    this.currentValue[3] = value;
  }
}
