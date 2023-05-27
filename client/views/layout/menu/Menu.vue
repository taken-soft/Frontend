<template>
  <modal :modalController="saveModalController">
    <div class="modal_body">
      <p style="margin-bottom: 1rem">레이아웃 배치</p>
      <div class="flex">
        <select name="" id="" class="m-r" @change="(event) => {
          changeSelectedCreateDashboardType(event.target.value);
        }">
          <option v-for="(item, index) in ['2x2', '2x4']" v-bind:value="item" :innerHTML="item" v-bind:key="index"
            :selected="selectedCreateDashboardType == item"></option>
        </select>
        <button @click="afterCreateDashboardClick">생성</button>
      </div>
    </div>
  </modal>

  <div>
    <div v-if="!curruentMode()" v-for="(item, index) in menuList()" v-bind:key="index">
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
      <menu-input-item :menu-entity=item v-if="item.constructor.name == 'MenuInputItemEntity'"></menu-input-item>
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
import MenuInputItem from "./inputItem/MenuInputItem.vue";

import Modal from "../../pages/main/Modal.vue";

import MenuButtonEntity from "../menu/button/menuButtonEntity";
import MenuItemEntity from "../menu/item/menuItemEntity";

import EditMenuRoot from "../menu/editMenuRoute/editMenuRoot";

import { useDashboardStore } from "../../../stores/dashboardStore";
import { useEditMenuStore } from "../../../stores/editMenuStore";
import { useModeStore } from '../../../stores/modeStore';

import { createDashboard } from "../../../axios/dashboardListAxios";

import CreateDashboardRequestDTO from "../../../model/dto/createDashboardRequestDTO"

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

    const saveModalController = editMenuStore.saveModalController;

    let selectedCreateDashboardType = '2x2';

    const changeSelectedCreateDashboardType = (value) => {
      console.log(value);
      selectedCreateDashboardType = value;
    }

    const afterCreateDashboardClick = () => {
      console.log(selectedCreateDashboardType);
      let createDashboardRequestDTO = new CreateDashboardRequestDTO(selectedCreateDashboardType, 1)
      createDashboard(createDashboardRequestDTO).then((response) => {
        let data = response.data;
        data["dashboardTitle"] = "New Dashboard";
        data["dashboardType"] = createDashboardRequestDTO.dashboardType;
        data["dashboardSequence"] = createDashboardRequestDTO.dashboardSequence;
        changeMode(data["dashboardId"]);
        saveModalController.close();
      })
    }

    return {
      dashboardList,
      selectDashboard,
      curruentRoute,
      curruentMode,
      changeMode,
      saveModalController,
      afterCreateDashboardClick,
      selectedCreateDashboardType,
      changeSelectedCreateDashboardType
    }
  },
  methods: {
    menuList() {
      let menuList = [];

      for (let dashboard of this.dashboardList) {
        menuList.push(
          new MenuItemEntity(dashboard[1], "edit", () => this.selectDashboard(dashboard[0]), () => this.changeMode(dashboard[0]))
        );
      }

      menuList.push(
        new MenuButtonEntity("대시보드 추가", "add", this.onCreateDashboardClick)
      );

      return menuList;
    },

    onCreateDashboardClick() {
      this.saveModalController.show();
    },
  },
  components: {
    Modal: Modal,
    MenuItem: MenuItem,
    MenuButton: MenuButton,
    MenuInput: MenuInput,
    MenuDropdown: MenuDropdown,
    MenuFile: MenuFile,
    MenuColor: MenuColor,
    MenuSensor: MenuSensor,
    MenuEvent: MenuEvent,
    MenuInputItem: MenuInputItem
  },
}
</script>
<style scoped>
.img-l {
  width: 25px;
  height: 25px;
}

img {
  width: 20px;
  height: 20px;
}

.Menu{
  height: calc(100vh - 9.5rem);
  overflow-y: auto;
}
</style>