<template>
  <div>
    <div v-if="!curruentMode()" v-for="(item, index) in menuList" v-bind:key="index">
      <menu-item :menu-entity=item v-if="item.constructor.name == 'MenuItemEntity'"></menu-item>
      <menu-button :menu-entity=item v-if="item.constructor.name == 'MenuButtonEntity'"></menu-button>
    </div>
    <div v-if="curruentMode()" v-for="(item, index) in curruentRoute()" v-bind:key="index">
      <menu-item :menu-entity=item v-if="item.constructor.name == 'MenuItemEntity'"></menu-item>
      <menu-button :menu-entity=item v-if="item.constructor.name == 'MenuButtonEntity'"></menu-button>
      <menu-input :menu-entity=item v-if="item.constructor.name == 'MenuInputEntity'"></menu-input>
      <menu-dropdown :menu-entity=item v-if="item.constructor.name == 'MenuDropdownEntity'"></menu-dropdown>
      <menu-file :menu-entity=item v-if="item.constructor.name == 'MenuFileEntity'"></menu-file>
      <menu-color :menu-entity=item v-if="item.constructor.name == 'MenuColorEntity'"></menu-color>
      <menu-sensor :menu-entity=item v-if="item.constructor.name == 'MenuSensorEntity'"></menu-sensor>
      <menu-event :menu-entity=item v-if="item.constructor.name == 'MenuEventEntity'"></menu-event>
    </div>
  </div>
</template>
<script>
import MenuItem from "./item/MenuItem.vue";
import MenuButton from "./button/MenuButton.vue";
import MenuInput from "./input/MenuInput.vue";
import MenuDropdown from "./dropdown/MenuDropdown.vue";
import MenuFile from "./file/MenuFile.vue";
import MenuColor from "./color/MenuColor.vue";
import MenuSensor from "./sensor/MenuSensor.vue";
import MenuEvent from "./event/MenuEvent.vue";

import MenuButtonEntity from "../menu/button/menuButtonEntity";
import MenuItemEntity from "../menu/item/menuItemEntity";

import EditMenuRoot from "../menu/editMenuRoute/editMenuRoot";

import { useDashboardStore } from "../../../stores/dashboardStore"; 
import { useEditMenuStore } from "../../../stores/editMenuStore";
import { useModeStore } from '../../../stores/modeStore';

export default {
  setup() {
    const dashboardStore = useDashboardStore();
    const editMenuStore = useEditMenuStore();
    const modeStore = useModeStore();

    const dashboardList = dashboardStore.dashboardList;
    const selectDashboard = (dashboardId) => {
      dashboardStore.setSelectedDashBoard(dashboardId);
    };

    const curruentRoute = () => {
      return editMenuStore.curruentRoute;
    }

    const curruentMode = () => {
      return modeStore.curruentMode;
    }
    const changeMode = (dashboardId) => {
      dashboardStore.setSelectedDashBoard(dashboardId);
      editMenuStore.push(new EditMenuRoot());
      modeStore.changeMode();
    }

    let menuList = [];

    for (let dashboard of dashboardList) {
      menuList.push(
        new MenuItemEntity(dashboard[1], "edit", () => selectDashboard(dashboard[0]), () => changeMode(dashboard[0]))
      );
    }
    
    menuList.push(
      new MenuButtonEntity("데시보드 추가", "add", null)
    );

    return {
      curruentRoute,
      curruentMode,
      menuList,
    }
  },
  components: {
    MenuItem: MenuItem,
    MenuButton: MenuButton,
    MenuInput: MenuInput,
    MenuDropdown: MenuDropdown,
    MenuFile: MenuFile,
    MenuColor: MenuColor,
    MenuSensor: MenuSensor,
    MenuEvent: MenuEvent,
  },
}
</script>
<style scoped>
.img-l {
  width: 30px;
  height: 30px;
}

img {
  width: 20px;
  height: 20px;
}
</style>