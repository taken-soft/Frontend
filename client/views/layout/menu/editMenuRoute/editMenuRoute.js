import { useDashboardStore } from "../../../../stores/dashboardStore";
import { useModeStore } from "../../../../stores/modeStore";
import { useEditMenuStore } from "../../../../stores/editMenuStore";
import { useWidgetDataStore } from "../../../../stores/widgetDataStore";
import { useNewWidgetStore } from "../../../../stores/newWidgetStore";

export default class EditMenuRoute {
  dashboardStore = useDashboardStore();
  modeStore = useModeStore();
  editMenuStore = useEditMenuStore();
  widgetDataStore = useWidgetDataStore();
  newWidgetStore = useNewWidgetStore();

  route = function () {};

  title;
}
