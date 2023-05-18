import MenuEntity from "../menuEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuButtonEntity from "../button/menuButtonEntity";

export default class MenuSensorEntity extends MenuEntity {
  menuList = [
    new MenuDropdownEntity(
      "장치",
      null,
      ["없음", "장치1", "장치2", "장치3",],
      () => console.log("장치"),
    ),
    new MenuDropdownEntity(
      "센서",
      null,
      ["없음", "장치1", "장치2", "장치3",],
      () => console.log("센서"),
    ),
  ];
}