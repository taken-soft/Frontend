import EditMenuText from "./editMenuText";
import EditMenuImage from "./editMenuImage"
import EditMenuSquare from "./editMenuSquare";
import EditMenuCircle from "./editMenuCircle";
import EditMenuBar from "./editMenuBar";
import EditMenuLine from "./editMenuLine";

import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";

export default class EditMenuAdd {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();

  route = [
    new MenuItemEntity(
      "위젯 추가",
      "back",
      null,
      () => this.editMenuStore.pop(),
    ),
    new MenuItemEntity(
      "텍스트",
      "app",
      () => this.editMenuStore.push(new EditMenuText().route),
      null,
    ),
    new MenuItemEntity(
      "이미지",
      "app",
      () => this.editMenuStore.push(new EditMenuImage().route),
      null,
    ),
    new MenuItemEntity(
      "사각형",
      "app",
      () => this.editMenuStore.push(new EditMenuSquare().route),
      null,
    ),
    new MenuItemEntity(
      "원",
      "app",
      () => this.editMenuStore.push(new EditMenuCircle().route),
      null,
    ),
    new MenuItemEntity(
      "막대 그래프",
      "app",
      () => this.editMenuStore.push(new EditMenuBar().route),
      null,
    ),
    new MenuItemEntity(
      "꺾은선 그래프",
      "app",
      () => this.editMenuStore.push(new EditMenuLine().route),
      null,
    ),
  ];
}