import MenuEntity from "../menu/menuEntity";
import { useDashboardStore } from "../../../stores/dashboardStore";
import { useModeStore } from "../../../stores/modeStore";
import { useEditMenuStore } from "../../../stores/editMenuStore";

export default class EditMenu {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();
  root = [
    new MenuEntity(
      this.dashboardStore.getSelectedDashBoard,
      "back",
      null,
      () => {
				this.modeStore.changeMode();
				this.editMenuStore.clear();
			},
      "item"
    ),
    new MenuEntity(
      "위젯 추가",
      "add",
      () => this.editMenuStore.push(this.add),
      null,
      "item"
    ),
  ];

  add = [];
}
