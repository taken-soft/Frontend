import MenuColorEntity from "../color/menuColorEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuValueEntity from "../menuValueEntity";
import Event from "../../../../json/Event.json"

export default class MenuEventEntity extends MenuValueEntity {
  currentValue = ["배경색 변경", null, null, null];
  type = new MenuDropdownEntity(
    "이벤트 종류",
    null,
    Event,
    (event) => this.onTypeChange(event.target.value),
    "이벤트 종류"
  );
  color = new MenuColorEntity(
    "색상",
    null,
    (event) => this.onColorChange(event.target.value),
    null
  );
  over = new MenuInputEntity("임계값-초과", null, "초과", (event) =>
    this.onOverChange(event.target.value)
  );
  less = new MenuInputEntity("임계값-이하", null, "이하", (event) =>
    this.onLessChange(event.target.value)
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
