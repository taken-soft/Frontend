import EditMenuText from "./editMenuText";
import EditMenuImage from "./editMenuImage";
import EditMenuSquare from "./editMenuSquare";
import EditMenuCircle from "./editMenuCircle";
import EditMenuBar from "./editMenuBar";
import EditMenuLine from "./editMenuLine";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import EditMenuRoute from "./editMenuRoute";
import EditMenuCircleChart from "./editMenuCircleChart";

export default class EditMenuAdd extends EditMenuRoute {
  title = "위젯 추가"
  route = () => {
    return [
      new MenuItemEntity(this.title, "back", null, () =>
        this.editMenuStore.pop()
      ),
      new MenuItemEntity(
        "텍스트",
        "app",
        () => this.editMenuStore.push(new EditMenuText()),
        null
      ),
      new MenuItemEntity(
        "이미지",
        "app",
        () => this.editMenuStore.push(new EditMenuImage()),
        null
      ),
      new MenuItemEntity(
        "사각형",
        "app",
        () => this.editMenuStore.push(new EditMenuSquare()),
        null
      ),
      new MenuItemEntity(
        "원",
        "app",
        () => this.editMenuStore.push(new EditMenuCircle()),
        null
      ),
      new MenuItemEntity(
        "막대 그래프",
        "app",
        () => this.editMenuStore.push(new EditMenuBar()),
        null
      ),
      new MenuItemEntity(
        "꺾은선 그래프",
        "app",
        () => this.editMenuStore.push(new EditMenuLine()),
        null
      ),
      new MenuItemEntity(
        "원 그래프",
        "app",
        () => this.editMenuStore.push(new EditMenuCircleChart()),
        null
      )
    ];
  };
}
