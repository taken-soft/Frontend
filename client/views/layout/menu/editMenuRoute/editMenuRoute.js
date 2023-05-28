import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";
import { useWidgetDataStore } from "../../../../stores/widgetDataStore";

export default class EditMenuRoute {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();
  widgetDataStore = useWidgetDataStore();

  route = function () {};

  title;
}
