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
    new MenuButtonEntity(
      "센서추가",
      "add",
      () => {
        this.menuList = [
          ...this.menuList.slice(0, this.menuList.length - 1),
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
          ...this.menuList.slice(this.menuList.length - 1),
        ]
        console.log(this.menuList.length);
      },
    ),
  ];
}