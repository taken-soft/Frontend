import EditMenuRoute from "./editMenuRoute";
import MenuItemEntity from "../item/menuItemEntity";
import MenuColorEntity from "../color/menuColorEntity";

export default class EditMenuWidgetRoute extends EditMenuRoute {
  isVanilla = true;
  colorInput = new MenuColorEntity("배경색상", null);

  changeIsVanilla(value) {
    this.isVanilla = value;
    this.editMenuStore.refresh();
  }
  addWidget = () => console.log(`${this.title} 위젯 추가`);
}
