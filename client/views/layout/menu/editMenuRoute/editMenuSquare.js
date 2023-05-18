import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuSensorEntity from "../sensor/menuSenorEntity";
import EditMenuRoute from "./editMenuRoute";

export default class EditMenuSquare extends EditMenuRoute {
  title = "사각형";
  sensorList = [new MenuSensorEntity("센서", null)];

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
      ];
    }
  };

  addSensor() {
    this.sensorList.splice(1, 0, new MenuSensorEntity("센서", null));
    this.editMenuStore.refresh();
  }
}
