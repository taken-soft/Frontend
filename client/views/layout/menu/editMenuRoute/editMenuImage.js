import MenuItemEntity from "../item/menuItemEntity";
import MenuFileEntity from "../file/menuFileEntity";
import MenuColorEntity from "../color/menuColorEntity";
import MenuButtonEntity from "../button/menuButtonEntity";

import EditMenuWidgetRoute from "./editMenuWidgetRoute";

export default class EditMenuImage extends EditMenuWidgetRoute {
  title = "이미지";
  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () =>
        this.editMenuStore.pop()
      ),
      new MenuFileEntity("이미지", null, "image/*"),
      new MenuColorEntity("배경색상", null),
      new MenuButtonEntity("위젯추가", "add", () => this.addWidget())
    ];
  };
}
