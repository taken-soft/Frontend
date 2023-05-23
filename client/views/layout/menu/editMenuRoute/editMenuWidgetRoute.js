import EditMenuRoute from "./editMenuRoute";
import MenuColorEntity from "../color/menuColorEntity";

import { useNewWidgetStore } from "../../../../stores/newWidgetStore";

export default class EditMenuWidgetRoute extends EditMenuRoute {
  isVanilla = true;
  backgroundColor;

  colorInput = new MenuColorEntity("배경색상", null);

  newWidgetStore = useNewWidgetStore();

  changeIsVanilla(value) {
    this.isVanilla = value;
    this.editMenuStore.refresh();
  }
  addWidget = () => console.log(`${this.title} 위젯 추가`);
}
