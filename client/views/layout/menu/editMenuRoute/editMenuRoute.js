import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";

export default class EditMenuRoute {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();

  route = function() {};

  isVanilla = true;
  changeIsVanilla(value) {
    this.isVanilla = value;
    this.editMenuStore.refresh();
  }

  title;
}