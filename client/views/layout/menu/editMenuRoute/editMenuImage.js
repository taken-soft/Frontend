import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuFileEntity from "../file/menuFileEntity";
import MenuColorEntity from "../color/menuColorEntity";
import EditMenuRoute from "./editMenuRoute";

export default class EditMenuImage extends EditMenuRoute {
  title = "이미지";
  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () =>
        this.editMenuStore.pop()
      ),
      new MenuFileEntity("이미지", null, "image/*"),
      new MenuColorEntity("배경색상", null),
    ];
  };
}
