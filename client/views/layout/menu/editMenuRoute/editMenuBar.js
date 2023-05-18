import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import EditMenuRoute from "./editMenuRoute";

export default class EditMenuBar extends EditMenuRoute {
  title = "막대 그래프"
  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () =>
        this.editMenuStore.pop()
      ),
    ];
  };
}
