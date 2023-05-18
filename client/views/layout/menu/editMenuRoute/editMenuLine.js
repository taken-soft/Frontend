import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuColorEntity from "../color/menuColorEntity";
import MenuSensorEntity from "../sensor/menuSensorEntity";
import EditMenuRoute from "./editMenuRoute";

export default class EditMenuLine extends EditMenuRoute {
  title = "꺾은선 그래프";
  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () =>
        this.editMenuStore.pop()
      ),
      ...this.sensorList,
      new MenuButtonEntity("센서추가", "add", () => this.addSensor()),
      new MenuColorEntity("배경색상", null),
    ];
  };

  addSensor() {
    this.sensorList.splice(
      2,
      0,
      new MenuSensorEntity("센서", null),
      new MenuColorEntity("막대색상", null)
    );
    this.editMenuStore.refresh();
  }
}
