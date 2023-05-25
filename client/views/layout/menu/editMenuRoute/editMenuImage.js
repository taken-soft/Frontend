import MenuItemEntity from "../item/menuItemEntity";
import MenuFileEntity from "../file/menuFileEntity";
import MenuButtonEntity from "../button/menuButtonEntity";

import EditMenuWidgetRoute from "./editMenuWidgetRoute";

export default class EditMenuImage extends EditMenuWidgetRoute {
  constructor() {
    super();
    this.title = "이미지";
    this.newWidgetStore.setWidgetType(this.widgetMap.get(this.title)[1]);
  }

  imageInput = new MenuFileEntity("이미지", null, "image/*");

  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () =>
        this.editMenuStore.pop()
      ),
      this.imageInput,
      this.colorInput,
      new MenuButtonEntity("위젯추가", "add", () => this.addWidget()),
    ];
  };
}
