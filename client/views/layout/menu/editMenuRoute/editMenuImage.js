import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";

import MenuItemEntity from "../item/menuItemEntity";
import MenuButtonEntity from "../button/menuButtonEntity";
import MenuInputEntity from "../input/menuInputEntity";
import MenuDropdownEntity from "../dropdown/menuDropdownEntity";
import MenuFileEntity from "../file/menuFileEntity";
import MenuColorEntity from "../color/menuColorEntity";

export default class EditMenuImage {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();

  route = [
    new MenuItemEntity(
      "이미지",
      "back",
      null,
      () => this.editMenuStore.pop(),
    ),
    new MenuFileEntity(
      "이미지",
      null,
      "image/*",
    ),
    new MenuColorEntity(
      "배경색상",
      null,
    )
  ];

}