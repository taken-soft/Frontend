import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import EditMenuRoute from "./editMenuRoute";

export default class EditMenuCircle extends EditMenuRoute {
  title = "원";
  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () => this.editMenuStore.pop()),
    ];
  };
}
