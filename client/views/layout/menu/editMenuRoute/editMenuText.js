import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuSensorEntity from "../sensor/menuSensorEntity";
import MenuEventEntity from "../event/menuEventEntity";

import EditMenuRoute from "./editMenuRoute";

export default class EditMenuText extends EditMenuRoute {
  title = "텍스트";
  sensorList = [new MenuSensorEntity("센서", null)];
  eventList = [];

  route = () => {
    if (this.isVanilla) {
      return [
        new MenuItemEntity(this.title, "back", null, () =>
          this.editMenuStore.pop()
        ),
        new MenuDropdownEntity(
          "장치",
          null,
          ["없음", "장치1", "장치2", "장치3"],
          (value) => this.changeIsVanilla(value == "없음")
        ),
        new MenuInputEntity("텍스트", null, "텍스트"),
      ];
    } else {
      return [
        new MenuItemEntity(this.title, "back", null, () =>
          this.editMenuStore.pop()
        ),
        ...this.sensorList,
        new MenuButtonEntity("센서추가", "add", () => this.addSensor()),
        new MenuDropdownEntity("산술식", null, ["평균, 최대, 최소, 합"], null, "평균"),
        ...this.eventList,
        new MenuButtonEntity("이벤트추가", "add", () => this.addEvent()),
      ];
    }
  };

  addSensor() {
    this.sensorList.push(new MenuSensorEntity("센서", null));
    this.editMenuStore.refresh();
  }
  addEvent() {
    this.eventList.push(new MenuEventEntity("이벤트", null));
    this.editMenuStore.refresh();
  }
}
